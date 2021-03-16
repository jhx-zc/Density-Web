<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          {{ $t('common.projectName') }}
        </q-toolbar-title>

        <template v-if='loginStatus?.isLogin===true'>
          <div class='text-h6'>
            {{ loginStatus?.username ?? '' }}
          </div>
          <q-btn flat round dense icon="shopping_cart" class='q-ml-md' @click='onShopCardClick'/>
        </template>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view class="main-page-container"/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

  import { defineComponent } from 'vue'
  import { loginStatus } from 'src/service/login'

  export default defineComponent({
    name: 'MainLayout',

    setup() {
      const onShopCardClick = () => {
        // isShowShopCart.value = !isShowShopCart.value
      }
      return { loginStatus, onShopCardClick }
    },
  })
</script>

<style lang="scss">
  .main-page-container > div {
    height: calc(100vh - 50px);
  }
</style>
