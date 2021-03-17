import protobuf from 'protobufjs'
import { serverAddr } from 'src/service/config'
import { ErrorMessage, SuccessMessage } from 'src/utils/Notify'
import { GenHttpService } from 'src/service/utils'
import { rpc } from 'src/service/rpc/rpc'
import LoginReq = rpc.LoginReq
import LoginResp = rpc.LoginResp
import LoginRespCode = rpc.LoginRespCode

export const loginStatus={
  isLogin : false,
  username: '',
}

export const LoginPath = '/login'

export function Login(username: string, pwd: string, api = '/login/Manager'): Promise<boolean> {
  const loginReq = LoginReq.create({
    username: username,
    password: pwd,
  })

  const req_buff = LoginReq.encode(loginReq).finish()

  const blob = new Blob([req_buff], { type: 'buffer' })
  // 新建一个axios对象
  const httpService = GenHttpService()

  return new Promise<boolean>((resolve, reject) => {
    httpService
      .post(
        serverAddr + api,
        blob,
      )
      .then(val => {
        if (LoginResp.decode(new protobuf.Reader(new Uint8Array(val.data))).code ===
          LoginRespCode.SUCCESS) {
          SuccessMessage('登录成功')
          loginStatus.isLogin = true
          loginStatus.username = username
          resolve(true)
        } else {
          ErrorMessage('账号或密码错误')
          reject(false)
        }
      })
      .catch(e => {
        ErrorMessage('未知错误')
        console.error('login error', e)
        // reject(false)

        //todo
        loginStatus.isLogin = true
        loginStatus.username = username
        resolve(true)
      })
  })
}
