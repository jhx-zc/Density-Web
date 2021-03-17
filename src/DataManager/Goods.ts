import { DataManager } from 'src/DataManager/DataManager'
import { rpc } from 'src/service/rpc/rpc'

export class DMGoods extends DataManager<rpc.IGoods> {
  private static instance: DMGoods | undefined = undefined

  private constructor() {
    super();
    (window as any).DMGoods = this
  }

  static GetInstance(): DMGoods {
    if (!DMGoods.instance) { DMGoods.instance = new DMGoods() }
    return DMGoods.instance
  }

  static DefaultRowData(): rpc.IGoods {
    return {
      id: 0,
      imgUrl: '',
      name: '',
      star: 0,
      price: 0,
      brief: '',
      detail: '',
      totalSize: 0,
    }
  }

  getKey(d: rpc.IGoods): any {
    return d.id
  }

  addNewAPI(d: rpc.IGoods): Promise<boolean> {
    return Promise.resolve(true)
  }

  deleteOneAPI(d: rpc.IGoods): Promise<boolean> {
    return Promise.resolve(true)
  }

  queryAllAPI(): Promise<Array<rpc.IGoods>> {
    return Promise.resolve([])
  }

  queryOneAPI(d: rpc.IGoods): Promise<rpc.IGoods> {
    return Promise.resolve(d)
  }

  updateOneAPI(d: rpc.IGoods): Promise<boolean> {
    return Promise.resolve(true)
  }

  genTestData(): any {
    for (let i = 0; i < 900; i++) {
      this.SetStore({
        id: i,
        imgUrl: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
        name: 'Cafe Basilico' + i,
        star: i % 6,
        price: 100 + i,
        brief: 'Small plates, salads & sandwiches in an intimate setting.',
        goodsType: i % 4,
        detail: 'Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.',
      })
    }
  }
}
