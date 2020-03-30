<template>
    <div>
      <Test></Test>
    </div>
</template>

<script>
// import { mapActions } from 'vuex'
import Test from './../module/cj/page/cj_table'
import axios from 'axios'
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
  },
  created () {
    axios.get('../../grid.json').then(res => {
      console.log(res.data)
    }, res => {
      console.log('error')
    })
  }
}
</script>

<style scoped>

</style>
