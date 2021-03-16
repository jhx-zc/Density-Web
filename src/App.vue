<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Router } from 'src/router'

export default defineComponent({
  name: 'App',
  beforeCreate() {
    Router.push('/')
  }
})
</script>
