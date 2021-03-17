<template>
  <div class='full-width full-height shop-card-page'>
    <q-virtual-scroll
      :items="data"
      separator
    >
      <template v-slot="{ item }">
        <q-item
          :key="index"
          dense
        >
          <q-item-section>
            <q-item-label>
              <div class='shop-card-list-item row'>
                <div class='col-1'>
                  <q-checkbox v-model="selectedGoods" :val='item.goodsId' @input='checkIfNeedSelectAll'/>
                </div>
                <div class='col-2'>
                  <q-img :src='GetShopImgByGoodsId(item.goodsId)'/>
                </div>
                <div class='col-9 q-pl-md row column full-height'>
                  <div class='col-3'>
                    {{ GetGoodsNameById(item.goodsId) }}
                  </div>
                  <div class='col-7' style='overflow: auto'>
                    {{ GetGoodsBriefById(item.goodsId) }}
                  </div>
                  <div class='col-2'>
                    {{ GetGoodsPriceById(item.goodsId) }}
                  </div>
                </div>
              </div>
            </q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-virtual-scroll>

    <hr/>

    <div class='shop-card-page-footer row justify-center'>
      <div class='col-2 q-pl-md text-overline'>
        <q-checkbox dense v-model="selectAll" label="全选" color="orange" keep-color @click='onSelectAll'/>
      </div>
      <q-space/>
      <div class='text-caption'>
        总金额：{{ wholeCount }} 元
      </div>
      <div class='col-2 q-ml-lg'>
        <q-btn class='q-px-xl' color="primary" label="结 算"/>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
  import { computed, defineComponent, onMounted, Ref, ref, shallowRef } from 'vue'
  import { DMShopCard } from 'src/DataManager/ShopCard'
  import { DMGoods } from 'src/DataManager/Goods'

  export default defineComponent({
    name: 'ShopCard',
    setup() {
      const dmShopCard = DMShopCard.GetInstance()
      const container = dmShopCard.GetAllData()
      const updateTag = dmShopCard.GetUpdateTag()

      const selectAll: Ref<boolean> = ref(false)

      const selectedGoods: Ref<Array<number>> = shallowRef([])

      onMounted(() => {
        dmShopCard.genTestData()
      })

      const data = computed(() => {
        updateTag.value = updateTag.value
        return Object.freeze([...container])
      })

      const checkIfNeedSelectAll = () => {
        if (!selectAll.value && selectedGoods.value.length === data.value.length) {
          selectAll.value = true
        }

        if (selectAll.value && selectedGoods.value.length !== data.value.length) {
          selectAll.value = false
        }
      }

      const onSelectAll = () => {
        const tmp = []
        if (selectAll.value) {
          for (let iShopGood of data.value) {
            tmp.push(iShopGood.goodsId as number)
          }
        }
        selectedGoods.value = tmp
      }

      const dmGoods = DMGoods.GetInstance()

      const GetShopImgByGoodsId = (goodsId: number): string => {
        return dmGoods.GetDataByIndex(dmGoods.GetIndex({ id: goodsId }))?.imgUrl as string
      }

      const GetGoodsNameById = (goodsId: number): string => {
        return dmGoods.GetDataByIndex(dmGoods.GetIndex({ id: goodsId }))?.name as string
      }

      const GetGoodsDetailById = (goodsId: number): string => {
        return dmGoods.GetDataByIndex(dmGoods.GetIndex({ id: goodsId }))?.detail as string
      }

      const GetGoodsPriceById = (goodsId: number): string => {
        return dmGoods.GetDataByIndex(dmGoods.GetIndex({ id: goodsId }))?.price + '' ?? ''
      }

      const wholeCount = computed(() => {
        let ret = 0
        for (let goodsId of selectedGoods.value) {
          ret += dmGoods.GetDataByIndex(goodsId)?.price ?? 0
        }
        return ret
      })

      return {
        data,
        selectAll,
        wholeCount,
        GetShopImgByGoodsId,
        selectedGoods,
        checkIfNeedSelectAll,
        onSelectAll,
        GetGoodsNameById,
        GetGoodsBriefById: GetGoodsDetailById,
        GetGoodsPriceById,
      }
    },
  })
</script>

<style lang='scss'>
  .shop-card-page {
    .q-list.q-list--separator.q-virtual-scroll.q-virtual-scroll--vertical.scroll {
      height: calc(100% - 70px);

      .shop-card-list-item {
        height: 120px;
        align-items: center;
      }
    }

    .shop-card-page-footer {
      height: 60px;
      align-items: center;
    }
  }
</style>
