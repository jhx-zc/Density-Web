import { goodsQueryAll, goodsQueryOne, goodsUpdateOne, serverAddr } from 'src/service/config'
import { ErrorMessage } from 'src/utils/Notify'
import protobuf from 'protobufjs'
import { GenHttpService } from 'src/service/utils'
import { rpc } from 'src/service/rpc/rpc'
import GoodsList = rpc.GoodsList
import Goods = rpc.Goods
import GoodsUpdateRet = rpc.GoodsUpdateRet

export function queryAll(): Promise<Array<rpc.IGoods>> {
  const httpService = GenHttpService()

  return new Promise<Array<rpc.IGoods>>((resolve, reject) => {
    httpService
      .post(
        serverAddr + goodsQueryAll,
      )
      .then(val => {
        const goodsList = GoodsList.decode(new protobuf.Reader(new Uint8Array(val.data)))
        resolve(goodsList.goods)
      })
      .catch(e => {
        ErrorMessage('查询出错')
        console.error('queryAll goods', e)
        reject(false)
      })
  })
}

export function queryOne(d: rpc.IGoods): Promise<rpc.IGoods> {
  const httpService = GenHttpService()

  return new Promise<rpc.IGoods>((resolve, reject) => {
    httpService
      .post(
        serverAddr + goodsQueryOne,
      )
      .then(val => {
        const goods = Goods.decode(new protobuf.Reader(new Uint8Array(val.data)))
        resolve(goods)
      })
      .catch(e => {
        // ErrorMessage('查询出错')
        console.error('queryOne goods', e)
        reject(false)
      })
  })
}

export function UpdateOne(d: rpc.IGoods): Promise<boolean> {
  const httpService = GenHttpService()

  return new Promise<boolean>((resolve, reject) => {
    httpService
      .post(
        serverAddr + goodsUpdateOne,
      )
      .then(val => {
        const ret = GoodsUpdateRet.decode(new protobuf.Reader(new Uint8Array(val.data)))
        resolve(ret.success)
      })
      .catch(e => {
        ErrorMessage('查询出错')
        console.error('queryAll goods', e)
        reject(false)
      })
  })
}
