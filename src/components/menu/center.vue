<template>
   <div>
     <!-- 顶部轮播图 -->
     <header>
       <Swipe
         :autoplay="3000"
         @change="onSwipeChange"
       >
         <SwipeItem v-for="(img, index) in swipeImages" :key="index">
           <img v-lazy="img" :height="swipeImagesHeight"/>
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
         <li>
           <label>常用</label>
           <Grid
             :column-num="3"
           >
             <GridItem icon="photo-o" text="成绩查询"></GridItem>
             <GridItem icon="photo-o" text="课表查询"></GridItem>
             <GridItem icon="photo-o" text="空教室"></GridItem>
           </Grid>
         </li>
         <li>
           <label>工具</label>
           <Grid
             :column-num="3"
           >
             <GridItem icon="photo-o" text="绩点计算器"></GridItem>
             <GridItem icon="photo-o" text="成绩excel下载"></GridItem>
             <GridItem icon="photo-o" text="重修查询"></GridItem>
             <GridItem icon="photo-o" text="考试查询"></GridItem>
             <GridItem icon="photo-o" text="作息时间"></GridItem>
             <GridItem icon="photo-o" text="后勤问题"></GridItem>
             <GridItem icon="photo-o" text="校园电话簿"></GridItem>
           </Grid>
         </li>
         <li>
           <label>校内</label>
           <Grid
             :column-num="3"
           >
             <GridItem icon="photo-o" text="表白墙plus"></GridItem>
             <GridItem icon="photo-o" text="二手市场"></GridItem>
             <GridItem icon="photo-o" text="卖室友plus"></GridItem>
             <GridItem icon="photo-o" text="计算机二级"></GridItem>
             <GridItem icon="photo-o" text="CTE4/6"></GridItem>
             <GridItem icon="photo-o" text="教务通知"></GridItem>
             <GridItem icon="photo-o" text="校园八卦"></GridItem>
             <GridItem icon="photo-o" text="360全景校园"></GridItem>
           </Grid>
         </li>
         <li>
           <label>反馈</label>
           <Grid
             :column-num="3"
           >
             <GridItem icon="photo-o" text="加入我们"></GridItem>
             <GridItem icon="photo-o" text="需求希望"></GridItem>
             <GridItem icon="photo-o" text="评分"></GridItem>
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
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      noticeBarText: '通知内容:附加按附件法律的萨克附近安防监控拉萨的风景史黛拉发了'
    }
  },
  methods: {
    onSwipeChange (index) {
      console.log('Swipe:' + index)
    }
  }
}
</script>

<style scoped>

</style>
