import { ref, Ref } from 'vue'
import { ErrorMessage, SuccessMessage } from 'src/utils/Notify'

export abstract class DataManager<T> {
  private readonly container: Ref<Array<T>> = ref([])
  //goodsId -> container index
  private readonly indexMap: Ref<Map<any, number>> = ref(new Map<any, number>())

  private readonly currentRowIndex = ref<number>(-1)

  protected constructor() {
    this.QueryAll();
    (window as any).DMShopCard = this
  }

  abstract getKey(d: T): any

  abstract queryAllAPI(): Promise<Array<T>>

  abstract queryOneAPI(d: T): Promise<T>

  abstract addNewAPI(d: T): Promise<boolean>

  abstract updateOneAPI(d: T): Promise<boolean>

  abstract deleteOneAPI(d: T): Promise<boolean>

  abstract genTestData(): any

  GetAllData():Ref<Array<T>>{
    return this.container
  }

  GetDataByIndex(index:number):T{
    return this.container.value[index]
  }

  SetStore(d: T) {
    const index = this.GetIndex(d)
    if (index === -1) {
      this.indexMap.value.set(this.getKey(d), this.container.value.length)
      this.container.value.push(d)
    } else {
      this.container.value[index] = d
    }
  }

  DeleteFromStore(d: T) {
    this.RemoveIndex(d)

    const containerBack: Array<T> = []
    const indexMapBack: Map<any, number> = new Map<any, number>()

    if (this.container.value.length - this.indexMap.value.size > 200) {
      this.indexMap.value.forEach((index, key: any) => {
        containerBack.push(this.container.value[index])
        indexMapBack.set(key, index)
      })

      this.container.value = containerBack
      this.indexMap.value = indexMapBack
    }
  }

  //return -1 if can not get index
  GetIndex(d: T): number {
    const index = this.indexMap.value.get(this.getKey(d))
    if (index === undefined) { return -1 }
    return index
  }

  RemoveIndex(d: T) {
    this.indexMap.value.delete(this.getKey(d))
  }

  SetCurrentRowIndex(d:T){
    this.currentRowIndex.value = this.GetIndex(d)
  }

  GetCurrentRowIndex():Ref<number>{
    return this.currentRowIndex
  }

  QueryAll() {
    this.queryAllAPI().then((ds: Array<T>) => {
      for (let d of ds) {
        this.SetStore(d)
      }
    }).catch(() => {
      ErrorMessage('查询数据列失败,网络错误')
    })
  }

  QueryOne(d: T) {
    this.queryOneAPI(d).then(val => {this.SetStore(val)}).catch(() => {
      ErrorMessage('查询数据失败,网络错误')
    })
  }

  AddNew(d: T) {
    this.addNewAPI(d).then(isOk => {
      if (isOk) {
        this.SetStore(d)
        SuccessMessage('增加数据成功')
      } else {ErrorMessage('增加数据失败')}
    }).catch(() => {ErrorMessage('增加失败，网络错误')})
  }

  UpdateOne(d: T) {
    this.updateOneAPI(d).then(val => {
      if (val) {
        this.SetStore(d)
        SuccessMessage('更新数据成功')
      } else {ErrorMessage('更新数据失败')}
    }).catch(() => {ErrorMessage('更新失败，网络错误')})
  }

  DeleteOne(d: T) {
    this.deleteOneAPI(d).then(val => {
      if (val) {
        this.DeleteFromStore(d)
        SuccessMessage('删除数据成功')
      } else {ErrorMessage('删除数据失败')}
    }).catch(() => {ErrorMessage('删除失败，网络错误')})
  }
}

