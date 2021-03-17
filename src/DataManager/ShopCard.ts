import { DataManager } from 'src/DataManager/DataManager'
import { com } from 'src/service/rpc/rpc'
import IShopGoods = com.main.module.rpc.IShopGoods

export class DMShopCard extends DataManager<IShopGoods> {
  private static instance: DMShopCard | undefined = undefined

  private constructor() {
    super();
    (window as any).DMShopCard = this
  }

  static GetInstance(): DMShopCard {
    if (!DMShopCard.instance) { DMShopCard.instance = new DMShopCard() }
    return DMShopCard.instance
  }

  getKey(d: IShopGoods): any {
    return d.goodsId
  }

  addNewAPI(d: IShopGoods): Promise<boolean> {
    return Promise.resolve(true)
  }

  deleteOneAPI(d: IShopGoods): Promise<boolean> {
    return Promise.resolve(true)
  }

  queryAllAPI(): Promise<Array<IShopGoods>> {
    return Promise.resolve([])
  }

  queryOneAPI(d: IShopGoods): Promise<IShopGoods> {
    return Promise.resolve(d)
  }

  updateOneAPI(d: IShopGoods): Promise<boolean> {
    return Promise.resolve(true)
  }

  genTestData(): any {
    for (let i = 0; i < 90; i++) {
      this.SetStore({
        goodsId: i + 1,
        count: 1,
      })
    }
  }
}
