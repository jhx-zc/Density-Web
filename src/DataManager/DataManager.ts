import { ref, Ref } from 'vue'
import { ErrorMessage, SuccessMessage } from 'src/utils/Notify'

export abstract class DataManager<T> {
  private container: Array<T> = []
  //goodsId -> container index
  private indexMap: Map<any, number> = new Map<any, number>()

  private updateTag: Ref<number> = ref(0)

  private readonly currentRowIndex = ref<number>(-1)

  protected constructor() {
    this.QueryAll();
  }

  abstract getKey(d: T): any

  protected abstract queryAllAPI(): Promise<Array<T>>

  protected abstract queryOneAPI(d: T): Promise<T>

  protected abstract addNewAPI(d: T): Promise<boolean>

  protected abstract updateOneAPI(d: T): Promise<boolean>

  protected abstract deleteOneAPI(d: T): Promise<boolean>

  abstract genTestData(): any

  private updateDataTag() {
    if (this.updateTag.value < 0xffff) { this.updateTag.value++ } else { this.updateTag.value = 0 }
  }

  private removeIndex(d: T) {
    this.indexMap.delete(this.getKey(d))
  }

  GetUpdateTag(): Ref<number> {
    return this.updateTag
  }

  GetAllData(): Array<T> {
    return this.container
  }

  GetDataByIndex(index: number): T {
    return this.container[index]
  }

  SetStore(d: T) {
    const index = this.GetIndex(d)
    if (index === -1) {
      this.indexMap.set(this.getKey(d), this.container.length)
      this.container.push(d)
    } else {
      this.container[index] = d
    }
    this.updateDataTag()
  }

  DeleteFromStore(d: T) {
    this.removeIndex(d)

    const containerBack: Array<T> = []
    const indexMapBack: Map<any, number> = new Map<any, number>()

    if (this.container.length - this.indexMap.size > 200) {
      this.indexMap.forEach((index, key: any) => {
        containerBack.push(this.container[index])
        indexMapBack.set(key, index)
      })

      this.container = containerBack
      this.indexMap = indexMapBack
    }
    this.updateDataTag()
  }

  //return -1 if can not get index
  GetIndex(d: T): number {
    const index = this.indexMap.get(this.getKey(d))
    if (index === undefined) { return -1 }
    return index
  }

  SetCurrentRowIndex(d: T) {
    this.currentRowIndex.value = this.GetIndex(d)
  }

  GetCurrentRowIndex(): Ref<number> {
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

