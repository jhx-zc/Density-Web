<template>
  <q-card flat bordered>
    <q-img
      :src="currentGoods.imgUrl"
    />

    <q-card-section>
      <div class="text-overline text-orange-9">{{ $t('goods.price') + ': ' + currentGoods.price }} RMB</div>
      <div class="text-h5 q-mt-sm q-mb-xs">简介</div>
      <div class="text-caption text-grey">
        {{ currentGoods.brief }}
      </div>
    </q-card-section>

    <q-card-section>
      <q-separator/>
      <q-card-section>
        <div class="text-subitle2" style="overflow: auto;max-height: 120px;">
          {{ currentGoods.detail }}
        </div>
      </q-card-section>
    </q-card-section>

    <q-card-actions class="justify-center">
      <q-btn label="加入购物车" icon="shopping_cart" color="primary"/>
    </q-card-actions>

  </q-card>
</template>

<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { DMGoods } from 'src/DataManager/Goods'

  export default defineComponent({
    name: 'Detail',

    setup() {
      const dmGoods = DMGoods.GetInstance()
      const currentGoodsIndex = dmGoods.GetCurrentRowIndex()
      const allData = dmGoods.GetAllData()
      const updateTag = dmGoods.GetUpdateTag()
      const currentGoods = computed(() => {
        updateTag.value = updateTag.value
        return allData[currentGoodsIndex.value]
      })

      return { currentGoods }
    },
  })
</script>

<style lang="scss">

</style>
