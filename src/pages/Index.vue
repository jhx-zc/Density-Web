<template>
  <q-page class="row items-center justify-evenly index-page">
    <div class="row justify-center q-gutter-lg pic-area">
      <q-intersection
        v-for="oneGoods in goods"
        :key="oneGoods.id"
        class="intersection-item"
        transition="scale"
      >
        <q-card class="my-card">
          <q-img :src="oneGoods.imgUrl" @click="ShowDetail(oneGoods)" style="cursor:pointer"/>
          <q-card-section>
            <q-btn
              fab
              color="primary"
              icon="shopping_cart"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
              @click="add2ShopCard(oneGoods)"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                {{ oneGoods.name }}
              </div>
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              {{ $t('goods.price') + ': ' + oneGoods.price }} RMB
            </div>
            <div class="text-caption text-grey">
              {{ oneGoods.brief }}
            </div>
          </q-card-section>
          <q-separator/>
          <q-card-actions class="justify-center">
            <q-btn flat color="primary" @click="ShowDetail(oneGoods)" label="查看详情"/>
          </q-card-actions>
        </q-card>
      </q-intersection>

      <q-dialog v-model="showDetail" persistent>
        <q-card class='goods-detail-card'>
          <q-card-section class="row items-center q-pb-none goods-detail-card-title">
            <div class="text-h6">{{ currentGoods.name }}</div>
            <q-space/>
            <q-btn icon="close" flat round dense v-close-popup/>
          </q-card-section>

          <q-card-section class='goods-detail-card-content'>
            <detail/>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue'
  import Detail from 'src/components/goods/Detail.vue'
  import { com } from 'src/service/rpc/rpc'
  import rpc = com.main.module.rpc
  import { DMGoods } from 'src/DataManager/Goods'

  export default defineComponent({
    name: 'PageIndex',
    components: {
      Detail,
    },
    setup() {
      const dmGoods = DMGoods.GetInstance()
      dmGoods.GenTestData()

      const goods = dmGoods.GetGoods()

      const showDetail = ref<Boolean>(false)

      const currentGoodsIndex = dmGoods.GetCurrentRowIndex()
      const currentGoods = computed(() => {
        return dmGoods.GetGoods().value[currentGoodsIndex.value]
      })

      const add2ShopCard = (oneGoods: rpc.IGoods) => {
        dmGoods.SetCurrentRowIndex(oneGoods)
      }

      const ShowDetail = (oneGoods: rpc.IGoods) => {
        dmGoods.SetCurrentRowIndex(oneGoods)
        showDetail.value = true
      }

      const showShopCard = ()=>{}

      return { goods, add2ShopCard, ShowDetail, showDetail, currentGoods,showShopCard }
    },
  })
</script>

<style lang="scss">
  .index-page {
    .pic-area {
      max-width: 80vw;
    }

    .intersection-item > div {
      height: 100%;
      width: 100%;
    }

    .intersection-item {
      height: 410px;
      width: 320px;


      .q-card__section.q-card__section--vert {
        height: calc(100% - 200px);
      }

      .q-card__section.q-card__section--vert > div {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .q-card__section.q-card__section--vert .brief-container {
        white-space: unset;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
    }
  }

  .goods-detail-card {
    max-height: 65vh !important;

    display: flex;
    flex-direction: column;
    position: relative;

    & > div {
      padding: 8px;
    }

    .goods-detail-card-content {
      height: calc(100% - 50px);
      overflow: auto;
    }
  }
</style>
