<template>
  <div class="main">
    <scroll ref="scroll" class="recommend-content">
      <div class="slider-wrapper">
        <slider>
          <div v-for="item in recommends" :key="item.id">
            <img class="needsclick" @load="loadImage" :src="item.picUrl">
          </div>
        </slider>
      </div>
      <div class="news">
        <ul>
          <li class="item">
            <div class="title"></div>
            <div class="time"></div>
            <div class="comment"></div>
            <i><img src="../../static/photo/item.jpg" height="110px" width="99px"/></i>
          </li>
        </ul>
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
      news: []
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
    bottom: 0
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
          width 100%
          background-color red
          height 2.5rem
</style>
