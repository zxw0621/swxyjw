<template>
  <div>
    <PullRefresh v-model="isLoading" @refresh="onRefresh">
    <header>
      <div id="div1">
        姓名：<span>{{$store.state.qz.userrealname}}</span>
        <br>
        学号：<span>{{$store.state.qz.user.useraccount}}</span>
      </div>
      <span class="iconfont icon-shuaxin pull">下拉刷新</span>
    </header>
    <table>
      <tr>
        <td colspan="4">2019-2020-1学期</td>
      </tr>
      <tr>
        <th>课程</th>
        <th>成绩</th>
        <th>绩点</th>
        <th>学分</th>
      </tr>
      <tr>
        <td>1-1</td>
        <td>1-2</td>
        <td>1-3</td>
        <td>1-3</td>
      </tr>
      <tr>
        <td>1-1</td>
        <td>1-2</td>
        <td>1-3</td>
        <td>1-3</td>
      </tr>
    </table>
    <table>
      <tr>
        <td colspan="4">2019-2020-1学期</td>
      </tr>
      <tr>
        <th>课程</th>
        <th>成绩</th>
        <th>绩点</th>
        <th>学分</th>
      </tr>
      <tr>
        <td>1-1</td>
        <td>1-2</td>
        <td>1-3</td>
        <td>1-3</td>
      </tr>
      <tr>
        <td>1-1</td>
        <td>1-2</td>
        <td>1-3</td>
        <td>1-3</td>
      </tr>
    </table>
    <table>
      <tr>
        <td colspan="4">2019-2020-1学期</td>
      </tr>
      <tr>
        <th>课程</th>
        <th>成绩</th>
        <th>绩点</th>
        <th>学分</th>
      </tr>
      <tr>
        <td>1-1</td>
        <td>1-2</td>
        <td>1-3</td>
        <td>1-3</td>
      </tr>
      <tr>
        <td>1-1</td>
        <td>1-2</td>
        <td>1-3</td>
        <td>1-3</td>
      </tr>
    </table>
    </PullRefresh>
  </div>
</template>

<script>
import { Toast, PullRefresh } from 'vant'
import { mapActions } from 'vuex'
export default {
  name: 'cj_table',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Toast,
    PullRefresh
  },
  data () {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['updataQzInfo']),
    onRefresh () {
      setTimeout(() => {
        Toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    }
  },
  created () {
    const token = this.$store.state.qz.token
    // 简单检测token
    if (token == null || token === '-1' || String(token).length !== 128) {
      console.log('updataqzinfo更新了数据')
      this.updataQzInfo()
    }
  }
}
</script>
<style scoped>
  header{
    width: 92%;
    margin: 1rem 4%;
    height: 6.18rem;
    border-radius: 0.618rem;
    background-color: #fafffb;
    position: relative;
    background-image:url("http://pic.changaspl.xin/img/812af6c173cffa01ca8cafa90541d71c.jpg");
    background-size: 100% 100%;
  }
  /* 刷新span*/
  .pull{
    position: absolute;
    bottom: .4rem;
    right: .618rem;
    font-size: .9em;
    color: rgba(25, 50, 71, 0.78);
  }
  #div1{
    padding: 0.618em;
    font-size: .8em;
    color: #425f7e;
    text-shadow:.1rem .1rem .1rem #d1d1d1;
  }
  table{
    width: 92%;
    margin: 1.5em 4%;
    padding: .5rem .3rem 1.5rem;
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: .3rem .3rem .5rem rgba(180, 180, 180, 0.9);
  }

  /*课程哪一行的css设置*/
  th{
    text-align: left;
    padding: 1rem 0 .3rem 0;
  }
  /*虚线设置*/
  td{
    border-style:none none dashed none;
    border-width:0.04rem;
    padding: 0.35rem;
    border-color: #ccc;
    white-space:nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
  }
  /*字体颜色调节-----th 和 第一列*/
  th, td:first-child{
    color: rgb(97, 97, 97);
  }
  /*最上面标题的字体调节*/
  tr:first-child>td{
    font-size: 1.2rem;
    font-family: "黑体";
    font-weight:bold;
    text-align: center;
    padding: 0.5rem 0 .8rem;
  }
  /*宽度调节*/
  th:nth-child(1){
    width: 61.8%;
  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
