<template>
  <div>
    <h1>
      {{id ? '编辑' : '新建'}}英雄
    </h1>
    <el-form @submit.native.prevent="save" label-width="120px">
      <el-form-item label="名称：" >
        <el-col :span="4">
          <el-input v-model="model.name"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="头像：" >
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.avatar" :src="model.avatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="称号：" >
        <el-col :span="4">
          <el-input v-model="model.title"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="类型：" >
        <el-select v-model="model.categories" multiple >
          <el-option v-for="item of categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="难度：" >
        <el-col :span="6">
          <el-rate style="margin-top: 0.6rem" v-model="model.scores.difficult" :max="10"></el-rate>
        </el-col>
      </el-form-item>
      <el-form-item label="技能：" >
        <el-col :span="6">
          <el-rate style="margin-top: 0.6rem" v-model="model.scores.skills" :max="10"></el-rate>
        </el-col>
      </el-form-item>
      <el-form-item label="攻击：" >
        <el-col :span="6">
          <el-rate style="margin-top: 0.6rem" v-model="model.scores.attack" :max="10"></el-rate>
        </el-col>
      </el-form-item>
      <el-form-item label="生存：" >
        <el-col :span="6">
          <el-rate style="margin-top: 0.6rem" v-model="model.scores.survive" :max="10"></el-rate>
        </el-col>
      </el-form-item>
      <el-form-item label="顺风出装：" >
        <el-select v-model="model.items1" multiple >
          <el-option v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="逆风出装：" >
        <el-select v-model="model.items2" multiple >
          <el-option v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="使用技巧：" >
        <el-input v-model="model.usageTips" style="textarea"></el-input>
      </el-form-item>
      <el-form-item label="对抗技巧：" >
        <el-input v-model="model.battleTips" style="textarea"></el-input>
      </el-form-item>
      <el-form-item label="团战思路：" >
        <el-input v-model="model.teamTips" style="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data () {
    return {
      items: [],
      categories: [],
      model: {
        name: '',
        avatar: '',
        scores: {
          difficult: 0
        }
      }
    }
  },
  methods: {
    afterUpload (res) {
      // vue数据的响应式问题
      // this.$set(this.model, 'icon', res.url)  使用显示赋值
      this.model.avatar = res.url // 设置了属性就可以使用
    },
    async save () {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/heroes/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/heroes', this.model)
      }

      this.$router.push('/heroes/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () {
      const res = await this.$http.get(`rest/heroes/${this.id}`)
      this.model = Object.assign({}, this.model, res.data)
    },
    async fetchCategories () {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
    async fetchItmes () {
      const res = await this.$http.get(`rest/items`)
      this.items = res.data
    }
  },
  created () {
    this.fetchCategories()
    this.fetchItmes()
    this.id && this.fetch()
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
