<script setup lang="ts">
import { ref } from 'vue'

let acount = ref(null)
let password = ref(null)
const register = () => {
  console.log(1)
}

const login = async () => {
  console.log(
    JSON.stringify({
      acount: acount.value,
      password: password.value
    })
  )
  const res = await fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      acount: 1,
      password: 123123
    })
  })
  console.log(await res.json())
}
</script>

<template>
  <div
    class="flex flex-col justify-center items-center"
    style="width: 100vw; height: 100vh"
  >
    <div class="inline-block">
      <div class="flex">
        <span class="pr-4">账号</span>
        <input type="" class="border-2 border-rose-600 h-8" v-model="acount" />
      </div>
      <div class="flex pt-3">
        <span class="pr-4">密码</span>
        <input
          type="password"
          class="border-2 border-rose-600 h-8"
          v-model="password"
        />
      </div>
      <div class="flex justify-between pt-3">
        <button
          class="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm"
          @click="register"
        >
          注册
        </button>
        <button
          class="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-none shadow-sm"
          @click="login"
        >
          登录
        </button>
      </div>
    </div>
  </div>
</template>
