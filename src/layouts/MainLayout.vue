<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat @click="showLeftShopCardDrawer = !showLeftShopCardDrawer" round dense icon="menu"
                 v-if='loginStatus?.isLogin===true'/>
          {{ $t('common.projectName') }}
        </q-toolbar-title>

        <template v-if='loginStatus?.isLogin===true'>
          <div class='text-h6'>
            {{ loginStatus?.username ?? '' }}
          </div>
          <q-btn flat round dense icon="shopping_cart" class='q-ml-md' @click='onShopCardClick'/>
          <q-btn flat @click="showRightShopCardDrawer = !showRightShopCardDrawer" round dense icon="menu"/>
        </template>
      </q-toolbar>
    </q-header>

    <q-drawer
      bordered
      v-if='loginStatus?.isLogin===true'
      v-model="showLeftShopCardDrawer"
      :width="280"
      :breakpoint="700"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <div v-for="n in 50" :key="n">aaa {{ n }} / 50</div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-drawer
      bordered
      v-if='loginStatus?.isLogin===true'
      v-model="showRightShopCardDrawer"
      :width="280"
      :breakpoint="700"
      side="right"
    >
      <q-scroll-area class="fit">
        <div class="q-pa-sm">
          <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-dialog v-model='showShopCard' persistent class='z-top' full-height>
      <q-card class='main-shop-card-page'>
        <q-card-section class="row items-center q-pb-none shop-card-title bg-primary text-white">
          <div class="text-h6">购物车</div>
          <q-space/>
          <q-btn icon="close" flat round dense v-close-popup/>
        </q-card-section>

        <q-card-section class='shop-card-content'>
          <shop-card/>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-page-container>
      <router-view class="main-page-container"/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { loginStatus } from 'src/service/login'
  import ShopCard from 'src/components/goods/ShopCard.vue'

  export default defineComponent({
    name: 'MainLayout',
    components: {
      ShopCard,
    },
    setup() {
      const showShopCard = ref<Boolean>(false)
      const showLeftShopCardDrawer = ref<Boolean>(false)
      const showRightShopCardDrawer = ref<Boolean>(false)
      const onShopCardClick = () => {
        showShopCard.value = true
      }

      return {
        loginStatus,
        showShopCard,
        onShopCardClick,
        showLeftShopCardDrawer,
        showRightShopCardDrawer,
      }
    },
  })
</script>

<style lang="scss">
  .main-page-container > div {
    height: calc(100vh - 50px);
  }

  .main-shop-card-page {
    width: 70vw;
    max-width: unset !important;

    & > div {
      padding: 8px;
    }

    .shop-card-content {
      height: calc(100% - 50px);
    }
  }
</style>
