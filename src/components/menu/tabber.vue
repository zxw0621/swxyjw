<template>
    <div>
      <router-view/>
      <Tabbar
        v-model="active"
        active-color="#07c160"
        inactive-color="#000"
      >
        <TabbarItem icon="home-o" to="left">atd</TabbarItem>
        <TabbarItem icon="search" to="center">教务</TabbarItem>
        <TabbarItem icon="friends-o" to="right">mi</TabbarItem>
      </Tabbar>
      <!--底部 footer -->
      <Footer/>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
import Footer from '../footer'
export default {
  name: 'tabber',
  components: {
    Tabbar,
    TabbarItem,
    Footer
  },
  data () {
    return {
      active: 1
    }
  }
}
</script>

<style scoped>

</style>
