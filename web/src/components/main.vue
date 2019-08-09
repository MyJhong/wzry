<template>
  <div class="main">
    <scroll ref="scroll" class="recommend-content" :data="list">
      <div>
        <div class="slider-wrapper">
          <slider>
            <div v-for="item in recommends" :key="item.id">
              <img class="needsclick" @load="loadImage" :src="item.picUrl">
            </div>
          </slider>
        </div>
        <div class="news">
          <ul>
            <li class="item" v-for="item in list" :key="item.id">
              <div class="title">{{item.title}}</div>
              <div class="time">发布时间：{{item.time}}</div>
              <div class="comment">评论：{{item.comment}}</div>
              <i class="photo"><img :src="item.img" height="110px" width="99px"/></i>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from './base/scroll'
import Slider from './base/slider'
export default {
  name: 'Main',
  data () {
    return {
      recommends: [
        {
          id: 1,
          picUrl: [
            '../../static/photo/slider-1.jpg'
          ]
        },
        {
          id: 2,
          picUrl: [
            '../../static/photo/slider-2.jpg'
          ]
        }
      ],
      list: [
        {
          id: 1,
          title: '云顶之弈真好玩',
          time: '2019.8.9',
          comment: '4396',
          img: '../../static/photo/item.jpg'
        },
        {
          id: 2,
          title: '云顶之弈阵容',
          time: '2019.8.9',
          comment: '4396',
          img: '../../static/photo/item.jpg'
        },
        {
          id: 3,
          title: '六刺客三忍者/三虚空',
          time: '2019.8.9',
          comment: '4396',
          img: '../../static/photo/item.jpg'
        },
        {
          id: 4,
          title: '云顶之弈',
          time: '2019.8.9',
          comment: '4396',
          img: '../../static/photo/item.jpg'
        },
        {
          id: 5,
          title: '云顶之弈',
          time: '2019.8.9',
          comment: '4396',
          img: '../../static/photo/item.jpg'
        }
      ]
    }
  },
  components: {
    Scroll,
    Slider
  },
  methods: {
    loadImage () {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh()
        this.checkLoaded = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main
    position: fixed
    width: 100%
    top: 1rem
    bottom: 1.3rem
    .recommend-content
      height 100%
      overflow hidden
      .slider-wrapper
        position: relative
        width: 100%
        height 4rem
        overflow: hidden
        .needsclick
          height 4rem
          width 100%
      .news
        .item
          position relative
          width 100%
          height 2.5rem
          border-top 1px solid #cccccc
          border-bottom 1px solid #cccccc
          .title
            font-size .5rem
            margin-top .8rem
            margin-left .2rem
            width 70vw
            overflow: hidden
            text-overflow ellipsis
            white-space nowrap
            height .5rem
          .time
            float left
            font-size .2rem
            color #cccccc
            margin-top .3rem
            margin-left .2rem
          .comment
            float left
            margin-top .3rem
            margin-left 2rem
            font-size .2rem
            color #cccccc
          .photo
            position absolute
            right .15rem
            top .15rem
</style>
