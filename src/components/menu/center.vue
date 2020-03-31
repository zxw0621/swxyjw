<template>
   <div>
     <!-- 顶部轮播图 -->
     <header>
       <Swipe
         :autoplay="3000"
         @change="onSwipeChange"
       >
         <SwipeItem v-for="(img, index) in swipeImages" :key="index">
           <img v-lazy="img" :height="swipeImagesHeight" width="100%"/>
         </SwipeItem>
       </Swipe>
     </header>
     <!-- 顶部滚动通知 -->
     <div>
       <NoticeBar :text="noticeBarText" left-icon="volume-o"/>
     </div>
     <!-- 中间功能图 -->
     <div>
       <ul>
         <li v-for="(value, index) in gridData" :key="index">
           <label>{{value.title}}</label>
           <Grid
             :column-num="3"
           >
             <GridItem v-for="(val, ind) in value.data" :key="ind" :icon="val.icon" :text="val.text" :url="val.url" ></GridItem>
           </Grid>
         </li>
       </ul>
     </div>
   </div>
</template>

<script>
import {
  Swipe,
  SwipeItem,
  NoticeBar,
  Grid,
  GridItem
} from 'vant'
import axios from 'axios'
export default {
  name: 'center',
  components: {
    Swipe,
    SwipeItem,
    NoticeBar,
    Grid,
    GridItem
  },
  data () {
    return {
      swipeImagesHeight: '180px',
      swipeImages: [
        'https://pic.gksec.com/2020/03/30/d8aef160b1cfe/20200330220936.png',
        'https://pic.gksec.com/2020/03/30/12415ff6fb901/20200330221117.png',
        'https://pic.gksec.com/2020/03/30/b2cbc33054b2a/20200330221159.png'
      ],
      noticeBarText: '通知内容:附加按附件法律的萨克附近安防监控拉萨的风景史黛拉发了',
      gridData: []
    }
  },
  methods: {
    onSwipeChange (index) {
      console.log('Swipe:' + index)
    }
  },
  created () {
    axios.get('../../grid.json').then(res => {
      this.gridData = res.data
    }, res => {
      console.log('error')
    })
  }
}
</script>

<style scoped>

</style>
