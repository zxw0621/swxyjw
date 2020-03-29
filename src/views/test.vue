<template>
    <div>
      <Test></Test>
    </div>
</template>

<script>
// import { mapActions } from 'vuex'
import Test from './../module/cj/page/cj_table'
export default {
  name: 'test',
  components: {
    Test: Test
  },
  data () {
    return {
    }
  },
  methods: {
    // ...mapActions(['updataQzInfo'])
  },
  created () {
    // this.updataQzInfo()
  }
}
</script>

<style scoped>

</style>
