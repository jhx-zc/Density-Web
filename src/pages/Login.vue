<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="login-page-form q-pa-md z-top">
      <div class="text-h5 row justify-evenly q-pb-lg">系统登录</div>
      <q-form
        @submit="onSubmit"
        class="row q-col-gutter-md"
      >
        <div class="col col-12">
          <q-input outlined v-model="username" label="用户名"/>
        </div>
        <div class="col col-12">
          <q-input outlined v-model="password" type="password" label="密码"/>
        </div>
        <div class="col col-12 row justify-evenly">
          <q-btn type="submit" color="primary" icon="login" label="登录" size="18px" class="q-px-lg"/>
        </div>
      </q-form>
    </q-card>

    <q-img
      :src='bgImage'
      spinner-color='white'
      class='bf-login-bg-image'
    />
  </q-page>
</template>

<script lang="ts">
  import { defineComponent, Ref, ref } from 'vue'
  import { Login } from 'src/service/login'
  import { Router } from 'src/router'

  export default defineComponent({
    name: 'Login',
    setup() {
      const username: Ref<string> = ref('')
      const password: Ref<string> = ref('')

      const bgImage = ref('')
      import('src/assets/banner.jpg')
        .then((res:any) => {
          bgImage.value = res.default
        })

      const onSubmit = () => {
        Login(username.value, password.value).then((isOk) => {
          if (isOk) { Router.push({ path: '/main' }) }
        })
      }

      return { onSubmit, username, password, bgImage }
    },
  })
</script>

<style lang="scss">
  .login-page-form {
    height: 280px !important;
    width: 400px !important;
    opacity:0.9;
  }

  .bf-login-bg-image {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
