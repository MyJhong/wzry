<template>
<div>
  <div class="mon" v-show="mon" @click="close"></div>
  <div class="header">
    <div class="circle" @click="setting">
      <!-- <svg width="100%" height="50px" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle class="circle-img" r="20" cx="25" cy="25"/>
      </svg> -->
    </div>
    <ul class="select">
      <li class="option" :class="{click: click == 'recommend'}" @click="recommend">推荐</li>
      <li class="option" :class="{click: click == 'activity'}" @click="activity">活动</li>
      <li class="option" :class="{click: click == 'news'}" @click="news">新闻</li>
      <li class="option" :class="{click: click == 'hero'}" @click="hero">英雄</li>
      <li class="option" :class="{click: click == 'live_broadcast'}" @click="live_broadcast">直播</li>
    </ul>
    <div class="search">
      <img src="./search.png" height="28px" width="28px" />
    </div>
    <div class="setting" ref="setting">
      <div class="car">
        <div class="name">
          <div class="username">{{username}}</div>
          <hr class="undeline"/>
        </div>
        <div class="number">
          <ul class="message">
            <li>
              <div class="num">0</div>
              <div>关注</div>
            </li>
            <li>
              <div class="num">0</div>
              <div>粉丝</div>
            </li>
            <li>
              <div class="num">0</div>
              <div>收藏</div>
            </li>
            <li>
              <div class="num">0</div>
              <div>发表</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="car_two"></div>
      <div class="photo"></div>
      <div class="headframe"></div>
      <ul class="option">
        <li class="item" v-for="item in list" :key="item">{{item}}</li>
      </ul>
      <div class="bottom">
        <div class="set">设置</div>
        <div class="find">发现</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      username: 'Jhong',
      click: 'recommend',
      mon: false,
      list: [
        '与我相关',
        '活动中心',
        '我的订单',
        '我的任务',
        '我的收藏'
      ]
    }
  },
  methods: {
    setting () {
      if (!this.mon) {
        this.$refs.setting.style.transition = 'all 0.5s'
        this.$refs.setting.style.transform = 'translateX(0)'
        this.mon = true
      }
    },
    recommend () {
      this.click = 'recommend'
    },
    activity () {
      this.click = 'activity'
    },
    news () {
      this.click = 'news'
    },
    hero () {
      this.click = 'hero'
    },
    live_broadcast () {
      this.click = 'live_broadcast'
    },
    close () {
      this.$refs.setting.style.transition = 'all 0.5s'
      this.$refs.setting.style.transform = 'translateX(-280px)'
      this.mon = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .mon
      position fixed
      top 0
      bottom 0
      background-color rgba(0,0,0,0.1)
      z-index 49
      width 100%
  .header
    display flex
    height 1rem
    overflow hidden
    border-bottom 1px solid #f0f0f0
    width 100%
    .setting
      position fixed
      top 0
      bottom 0
      background linear-gradient(to bottom right, rgba(200, 243, 250, 0.9) , rgba(130, 243, 250, 1))
      width 280px
      z-index 50
      transform translateX(-280px)
      .option
        position absolute
        overflow hidden
        top 6.5rem
        left 50%
        transform translateX(-50%)
        height 6rem
        width 80%
        .item
          font-size .4rem
          margin-top .3rem
      .bottom
        position absolute
        bottom 0
        height 2rem
        width 100%
        .set
          float left
          margin-left .5rem
        .find
          float right
          margin-right .5rem
      .photo
        position absolute
        top 1.4rem
        left 2.23rem
        height 47px
        width 47px
        border-radius 50%
        background-image url(./heade_portrait.jpg)
        background-size: 47px 47px
        background-repeat no-repeat
        background-position 50% 50%
      .headframe
        position absolute
        top 1rem
        left 2rem
        height 79px
        width 70px
        background-image url(./headframe.png)
        overflow hidden
      .car
        position absolute
        left .34rem
        top 2rem
        border 2px solid yellow
        width 4.8rem
        height 3.6rem
        .number
          .message
            display flex
            justify-content space-around
            margin-top .2rem
            .num
              text-align center
              font-size .5rem
              margin-bottom .1rem
        .name
          height 2rem
          overflow hidden
          .undeline
            width 85%
            margin 0 auto
            margin-top .6rem
          .username
            text-align center
            font-size .5rem
            margin-top .8rem
      .car_two
        position absolute
        left .2rem
        top 1.85rem
        border 2px solid yellow
        width 5.1rem
        height 3.9rem
    .circle
      height .8rem
      width .8rem
      border-radius 50%
      background-image url(./heade_portrait.jpg)
      background-size: 40px 40px
      background-repeat no-repeat
      background-position 50% 50%
      margin-left .1rem
      margin-top .1rem
    .search
      width 28px
      height 28px
      position absolute
      right .2rem
      top .2rem
    .select
      width 6rem
      margin-top .31rem
      margin-left .5rem
      display flex
      justify-content space-around
      .option
        height:16px;
        font-size:17px;
        font-family:SimSun;
        font-weight:400;
        color:rgba(178,178,178,1);
      .click
        height:23px;
        font-size:25px;
        font-family:SimSun;
        font-weight:400;
        color:rgba(5,243,240,1);
        margin-top -.1rem
        border-bottom 1px solid rgba(5,243,240,1)
</style>
