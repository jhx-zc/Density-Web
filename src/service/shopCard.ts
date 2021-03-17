import { GenHttpService } from 'src/service/utils'
import { goodsQueryAll, serverAddr } from 'src/service/config'
import protobuf from 'protobufjs'
import { ErrorMessage } from 'src/utils/Notify'
import { IShopGoods } from 'src/DataManager/ShopCard'

export function queryAll(): Promise<Array<IShopGoods>> {
  const httpService = GenHttpService()

  return new Promise<Array<IShopGoods>>((resolve, reject) => {
    httpService
      .post(
        serverAddr + goodsQueryAll,
      )
      .then(val => {
        // const goodsList = GoodsList.decode(new protobuf.Reader(new Uint8Array(val.data)))
        // resolve(goodsList.goods)
      })
      .catch(e => {
        ErrorMessage('查询出错')
        console.error('queryAll shopGoods', e)
        reject(false)
      })
  })
}
