import { com } from 'src/service/rpc/rpc'
import rpc = com.main.module.rpc
import { queryAll, queryOne } from 'src/service/goods'

export class DMGoods {
  private container: Array<rpc.IGoods>

  constructor() {
    this.container = []
    this.QueryAll()
  }

  GenTestData() {
    const goods: Array<rpc.IGoods> = []
    for (let i = 0; i < 100; i++) {
      goods.push({
        id: i,
        imgUrl: 'https://cdn.quasar.dev/img/chicken-salad.jpg',
        name: 'Cafe Basilico' + i,
        star: i % 6,
        price: 100 + i,
        brief: 'Small plates, salads & sandwiches in an intimate setting.',
        detail: 'Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.Detail Small plates, salads & sandwiches in an intimate setting.',
      })
    }
    this.container = goods
  }

  GetGoods() {
    return [...this.container]
  }

  QueryAll() {
    queryAll().then((val) => {
      this.container = val
    })
  }

  SetStore(data: rpc.IGoods) {
    const index = this.container.findIndex(item => item.id === data.id)
    if (index > -1) { this.container[index] = data } else {this.container.push(data)}
  }

  QueryOne(data: rpc.IGoods) {
    queryOne(data).then(val => this.SetStore(val))
  }

  UpdateOne(data: rpc.IGoods) {

  }
}
