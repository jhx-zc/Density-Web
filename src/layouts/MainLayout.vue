<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          {{ $t('common.projectName') }}
        </q-toolbar-title>

        <!--        <q-btn-dropdown color="primary" :label="$t('common.lang')" unelevated>-->
        <!--          <q-list>-->
        <!--            <q-item clickable v-close-popup @click="changeLocation()">-->
        <!--              <q-item-section>-->
        <!--                <q-item-label>{{ $t('lang.zh') }}</q-item-label>-->
        <!--              </q-item-section>-->
        <!--            </q-item>-->

        <!--            <q-item clickable v-close-popup @click="changeLocation('en')">-->
        <!--              <q-item-section>-->
        <!--                <q-item-label>{{ $t('lang.en') }}</q-item-label>-->
        <!--              </q-item-section>-->
        <!--            </q-item>-->
        <!--          </q-list>-->
        <!--        </q-btn-dropdown>-->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view class="main-page-container"/>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { changeLocation } from 'boot/i18n'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    return { changeLocation }
  },
})
</script>

<style lang="scss">
.main-page-container > div {
  height: calc(100vh - 50px);
}
</style>
