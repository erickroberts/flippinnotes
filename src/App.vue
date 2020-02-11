<template>
  <div id="app">
    <Menu></Menu>
    <router-view></router-view>
  </div>
</template>

<script>

import Menu from "@/components/Menu";


export default {
  name: 'app',
  components: {
    Menu
  }
}
</script>

