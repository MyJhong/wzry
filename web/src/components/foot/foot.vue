<template>
  <div>
    <div class="mon" v-show="!no_select" @click="close"></div>
    <div class="foot" ref="foot">
        <div class="button"  ref="button">
          <!-- stop阻止事件冒泡，prvent阻止默认事件 -->
          <img @click.stop.prevent="select" src="./button.png" />
        </div>
        <div class="item" v-show="no_select">
          <div class="news" ref="news" @click.stop.prevent="news" :class="{click: this.click == 'news'}">
            <img src="./news.png" height="30px"/>
            <div class="news-text">资讯</div>
          </div>
          <div class="record" ref="record" @click.stop.prevent="record" :class="{click: this.click == 'record'}">
            <img src="./record.png" height="30px" />
            <div class="record-text">战绩</div>
          </div>
          <div class="mall" ref="mall" @click.stop.prevent="mall" :class="{click: this.click == 'mall'}">
            <img src="./mall.png" height="30px" />
            <div class="mall-text">商城</div>
          </div>
          <div class="my" ref="my" @click.stop.prevent="my" :class="{click: this.click == 'my'}">
            <img src="./my.png" height="30px"/>
            <div class="my-text">我的</div>
          </div>
        </div>
        <div ref="item" class="option" v-show="!no_select">
          <div class="text" ref="text" @click.stop.prevent="text">
            <img src="./text.png" height="30px"/>
            <div class="text-text">文字</div>
          </div>
          <div class="photo" ref="photo" @click.stop.prevent="photo">
            <img src="./photo.png" height="30px" />
            <div class="photo-text">相册</div>
          </div>
          <div class="photograph" ref="photograph" @click.stop.prevent="photograph">
            <img src="./photograph.png" height="30px" />
            <div class="photograph-text">拍照</div>
          </div>
          <div class="scan" ref="scan" @click.stop.prevent="scan">
            <img src="./scan.png" height="30px"/>
            <div class="scan-text">扫描</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      no_select: true,
      click: 'news' // 控制选中的图标样式
    }
  },
  methods: {
    close () {
      this.no_select = false
      this.select()
    },
    news () {
      console.log(1)
      this.click = 'news'
      this.$router.push('/news')
    },
    record () {
      console.log(2)
      this.click = 'record'
      this.$router.push('/record')
    },
    mall () {
      console.log(3)
      this.click = 'mall'
      this.$router.push('/mall')
    },
    my () {
      console.log(4)
      this.click = 'my'
      this.$router.push('/my')
    },
    text () {
      console.log(5)
    },
    photo () {
      console.log(6)
    },
    photograph () {
      console.log(7)
    },
    scan () {
      console.log(8)
    },
    select () {
      // 判断是展开还是收起
      if (this.no_select) {
        // js操作css，添加动画效果
        this.$refs.foot.style.transition = 'all 1s'
        this.$refs.foot.style.borderRadius = '12px 12px 0 0'
        this.$refs.foot.style.height = '5rem'
        this.$refs.foot.style.background = 'rgba(255,255,255,.9)'
        this.$refs.button.style.transition = 'all 2.5s'
        this.$refs.button.style.transform = 'translateY(3rem) scale(0.6) rotate(45deg)'
        this.$refs.news.style.transition = 'all 1s'
        this.$refs.news.style.transform = 'translate(1rem,1rem)'
        this.$refs.news.style.opacity = 0
        this.$refs.record.style.transition = 'all 1s'
        this.$refs.record.style.transform = 'translate(.9rem,1rem)'
        this.$refs.record.style.opacity = 0
        this.$refs.mall.style.transition = 'all 1s'
        this.$refs.mall.style.transform = 'translate(-.9rem,1rem)'
        this.$refs.mall.style.opacity = 0
        this.$refs.my.style.transition = 'all 1s'
        this.$refs.my.style.transform = 'translate(-1rem,1rem)'
        this.$refs.my.style.opacity = 0
        // 取消添加的样式
        this.$refs.text.style.transform = ''
        this.$refs.text.style.opacity = ''
        this.$refs.photo.style.transform = ''
        this.$refs.photo.style.opacity = ''
        this.$refs.photograph.style.transform = ''
        this.$refs.photograph.style.opacity = ''
        this.$refs.scan.style.transform = ''
        this.$refs.scan.style.opacity = ''
        // 让动画完成后变化
        setTimeout(() => {
          this.no_select = false
          /*
            取消动画效果
            this.$refs.text.style.transition = ''
            this.$refs.photo.style.transition = ''
            this.$refs.photograph.style.transition = ''
            this.$refs.scan.style.transition = ''
          */
        }, 1000)
      } else {
        // 让动画完成后变化
        setTimeout(() => {
          this.no_select = true
          // this.$refs.foot.style.transition = ''
          // this.$refs.news.style.transition = ''
          // this.$refs.record.style.transition = ''
          // this.$refs.mall.style.transition = ''
          // this.$refs.my.style.transition = ''
        }, 1000)
        // js操作css，添加动画效果
        this.$refs.text.style.transition = 'all 1s'
        this.$refs.text.style.transform = 'translate(-1rem,3rem)'
        this.$refs.text.style.opacity = 0
        this.$refs.photo.style.transition = 'all 1s'
        this.$refs.photo.style.transform = 'translate(-1rem,3rem)'
        this.$refs.photo.style.opacity = 0
        this.$refs.photograph.style.transition = 'all 1s'
        this.$refs.photograph.style.transform = 'translate(.8rem,3rem)'
        this.$refs.photograph.style.opacity = 0
        this.$refs.scan.style.transition = 'all 1s'
        this.$refs.scan.style.transform = 'translate(1rem,3rem)'
        this.$refs.scan.style.opacity = 0
        // 取消添加的样式
        this.$refs.foot.style.borderRadius = ''
        this.$refs.foot.style.height = ''
        this.$refs.foot.style.background = ''
        this.$refs.button.style.transform = ''
        this.$refs.news.style.transform = ''
        this.$refs.record.style.transform = ''
        this.$refs.mall.style.transform = ''
        this.$refs.my.style.transform = ''
        this.$refs.news.style.opacity = ''
        this.$refs.record.style.opacity = ''
        this.$refs.mall.style.opacity = ''
        this.$refs.my.style.opacity = ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .mon
    position fixed
    top 0
    background-color rgba(0,0,0,0.1)
    height 100vh
    width 100%
  .foot
    // fixed布局以窗口为定位
    position fixed
    bottom 0
    height 1.3rem
    width 100%
    background rgba(255,255,255,1)
    box-shadow 0px 0.2308rem 0.5385rem 0px rgba(0, 0, 0, 0.29)
    .button
      margin 0 auto
      position relative
      bottom 0.3rem
      width 71px
      height 71px
      z-index 10
    .item
      position absolute
      width 100%
      height 1.3rem
      bottom 0
      top .1rem
      display flex
      .news
        position absolute
        height 1.3rem
        width 1.5rem
        left 8.5vw
        .news-text
          position absolute
          bottom 0.2rem
          left 0.04rem
          font-size 0.1rem
          color:rgba(100,142,127,1)
          font-family:SimSun
          font-weight:400
      .record
        position absolute
        height 1.3rem
        width 1.5rem
        left 28vw
        .record-text
          position absolute
          bottom 0.2rem
          left 0.04rem
          font-size 0.1rem
          color:rgba(100,142,127,1)
          font-family:SimSun
          font-weight:400
      .mall
        position absolute
        height 1.3rem
        width 1.5rem
        right 16vw
        .mall-text
          font-size 0.1rem
          color:rgba(100,142,127,1)
          font-family:SimSun
          font-weight:400
          position absolute
          bottom 0.2rem
          left .1rem
      .my
        position absolute
        height 1.3rem
        flex 1
        right 8.5vw
        .my-text
          width 1.5rem
          font-size 0.1rem
          color:rgba(100,142,127,1)
          font-family:SimSun
          font-weight:400
          position absolute
          bottom 0.2rem
          left -.1rem
    .option
      position absolute
      bottom 20.5vh
      left 20.5vw
      display flex
      .text
        .text-text
          margin-top 10px
          text-align center
      .photo
        margin-left 11.5vw
        .photo-text
          margin-top 10px
          text-align center
      .photograph
        margin-left 10vw
        .photograph-text
          margin-top 10px
          text-align center
      .scan
        margin-left 11vw
        .scan-text
          margin-top 10px
          text-align center
    .click
      transition all 0.5s
      transform translateY(-0.2rem)
</style>
