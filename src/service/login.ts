import { com } from 'src/service/rpc/rpc'
import axios from 'axios'
import protobuf from 'protobufjs'
import { serverAddr } from 'src/service/config'
import LoginReq = com.main.module.rpc.LoginReq
import LoginResp = com.main.module.rpc.LoginResp
import LoginRespCode = com.main.module.rpc.LoginRespCode
import { ErrorMessage, SuccessMessage } from 'src/utils/Notify'
import { GenHttpService } from 'src/service/utils'

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
        resolve(true)
      })
  })
}
