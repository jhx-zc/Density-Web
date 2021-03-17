import { DataManager } from 'src/DataManager/DataManager'

export interface IShopGoods {
  goodsId?: number,
  count?: number,
}

export class DMShopCard extends DataManager<IShopGoods> {
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
    for (let i = 0; i < 90000; i++) {
      this.SetStore({
        goodsId: i+1,
        count: 1,
      })
    }
  }
}
