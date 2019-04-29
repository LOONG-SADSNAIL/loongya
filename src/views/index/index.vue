<template>
  <div class="homeMainContainer" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)" >
    <el-container>
      <div class="homeMainContent">
        <div class="iboxTitle">
          <h5>首页</h5>
        </div>
        <el-row class="homeMainRow">
          <el-col class="homeMainRowColRight" :span="24">
            <div class="homeMainRowColRightTable">
              <el-collapse>
                <el-collapse-item title="系统通知" name="1">
                  <div class="">
                    <el-collapse v-model="activeName" accordion @change="handleChange">
                      <el-collapse-item v-for="item in data" :key="item.id" :title="item.title" :name="item.id">
                        <div>{{item.content}}</div>
                      </el-collapse-item>
                    </el-collapse>
                  </div>
                </el-collapse-item>
              </el-collapse>

            </div>
          </el-col>
        </el-row>
      </div>
    </el-container>
  </div>
</template>

<script>
import '@/assets/css/appmain.css'
import { list } from '@/api/system/sysnotice'
export default {
  name: 'index',
  components: {
  },
  data () {
    return {
      loading: false,
      activeName: '',
      data: []
    }
  },
  created () {
    this.getList()
  },
  computed: {
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    getList () { // 列表获取
      this.loading = true
      list({}).then(res => {
        this.loading = false
        if (res.errcode === 0) {
          this.data = res.data.tableData
          if (this.data.length > 0) {
            this.activeNames = this.data[0].id
          }
        }
      })
    }
  }
}
</script>
<style>
</style>
