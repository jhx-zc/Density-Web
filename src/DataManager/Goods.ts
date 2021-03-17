import { com } from 'src/service/rpc/rpc'
import rpc = com.main.module.rpc
import { queryAll, queryOne } from 'src/service/goods'
import { ref, Ref } from 'vue'
import { DataManager } from 'src/DataManager/DataManager'

export class IDMGoods extends DataManager<rpc.IGoods> {
  private static instance: IDMGoods | undefined = undefined

  private constructor() {
    super()
  }

  static GetInstance(): IDMGoods {
    if (!IDMGoods.instance) { IDMGoods.instance = new IDMGoods() }
    return IDMGoods.instance
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
        detail: 'Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.',
      })
    }
  }
}

export class DMGoods {
  private readonly container: Ref<Array<rpc.IGoods>>
  private indexMap: Map<number, number> = new Map<number, number>()

  private static instance: DMGoods | undefined = undefined

  private readonly currentRowIndex = ref<number>(-1)

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

  static GetInstance(): DMGoods {
    if (!DMGoods.instance) { DMGoods.instance = new DMGoods() }
    return DMGoods.instance
  }

  private constructor() {
    this.container = ref([])
    this.QueryAll();
    (window as any).DMGoods = this
  }

  GenTestData() {
    for (let i = 0; i < 100; i++) {
      this.SetStore({
        id: i,
        imgUrl: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
        name: 'Cafe Basilico' + i,
        star: i % 6,
        price: 100 + i,
        brief: 'Small plates, salads & sandwiches in an intimate setting.',
        detail: 'Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.',
      })
    }
  }

  GetGoods() {
    return this.container
  }

  QueryAll() {
    queryAll().then((val) => {
      for (let i = 0; i < val.length; i++) {
        this.SetStore(val[i])
      }
    })
  }

  SetStore(data: rpc.IGoods) {
    const index = this.indexMap.get(data.id as number)
    if (index === undefined) {
      this.indexMap.set(data.id as number, this.container.value.length)
      this.container.value.push(data)
    } else {
      this.container.value[index] = data
    }
  }

  SetCurrentRowIndex(data: rpc.IGoods) {
    this.currentRowIndex.value = this.indexMap.get(data.id as number) as number
    this.QueryOne(data)
  }

  GetCurrentRowIndex(): Ref<number> {
    return this.currentRowIndex
  }

  QueryOne(data: rpc.IGoods) {
    queryOne(data).then(val => this.SetStore(val))
  }

  UpdateOne(data: rpc.IGoods) {

  }
}
