<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Router } from 'src/router'
import { LoginPath } from 'src/service/login'

export default defineComponent({
  name: 'App',
  beforeCreate() {
    Router.push(LoginPath)
  }
})
</script>
