<template>
  <div class="homeMainContent">
    <div class="iboxTitle">
      网点定位管理
    </div>
    <el-row class="homeMainRow">
      <el-col class="homeMainRowColLeft" :span="4">
        <OrganTreeList
          @getOrganno="getOrganno"
        />
      </el-col>
      <el-col class="homeMainRowColLeft" :span="3">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark" style="padding-left: 20px;">
              <el-table
                :data="hwterminalList"
                @row-click="rowClick"
                style="width: 100%;height: 100%;"
                :row-class-name="tableRowClassName">
                <el-table-column
                  prop="tername"
                  label="设备名称">
                </el-table-column>
              </el-table>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col class="homeMainRowColRight" :span="17">
        <div class="homeMainRowColRightTable">
          <!-- ============================百度地图=================start==========================-->
          <div id="map">
          </div>
          <!-- ============================百度地图 end===========================================-->
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OrganTreeList from '@/views/system/sysbaseorgan/components/organTreeList'
import { list } from '@/api/hw/hwterminalinfo'
import BMap from 'BMap'
export default {
  name: 'SysUserList',
  components: {
    OrganTreeList
  },
  data () {
    return {
      hwterminalList: [],
      lng: 116.404,
      lat: 39.915,
      name: '北京',
      map: {},
      point: {}
    }
  },
  created () {
  },
  computed: {
  },
  mounted () {
    // this.createMap()
  },
  methods: {
    createMap () {
      // 创建Map实例
      this.map = new BMap.Map('map')
      // 初始化地图,设置中心点坐标和地图级别

      // 添加地图类型控件
      // map.addControl(new BMap.MapTypeControl({
      //   mapTypes:[BMAP_NORMAL_MAP, BMAP_HYBRID_MAP, NavigationControl]
      // }))
      this.map.addControl(new BMap.NavigationControl())
      this.map.addControl(new BMap.ScaleControl())
      this.map.addControl(new BMap.OverviewMapControl())
      /* eslint-disable */
      this.map.addControl(new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
      }))
      /* eslint-enable */
      // 开启鼠标滚轮缩放
      this.map.enableScrollWheelZoom(true)
      this.point = new BMap.Point(this.lng, this.lat)
      this.map.centerAndZoom(this.point, 15)
      // 设置地图显示的城市 此项是必须设置的
      this.map.setCurrentCity(this.name)
      var marker = new BMap.Marker(this.point) // 创建标注
      if (this.name !== '') {
        marker.setLabel(this.setLabelStyle(this.name))
      }
      this.map.clearOverlays()
      this.map.addOverlay(marker) // 将标注添加到地图中
      // marker.addEventListener('click', function () {
      //   alert('您点击了标注')
      // })
      // marker.enableDragging()
      // marker.addEventListener('dragend', function (e) {
      //   alert('当前位置：' + e.point.lng + ', ' + e.point.lat)
      // })
    },
    setLabelStyle (content) {
      // 左偏移  右偏移
      var offsetSize = new BMap.Size(-19, -46)
      var labelStyle = {
        color: '#fff',
        backgroundColor: '#333333',
        border: '0',
        fontSize: '14px',
        width: '150px',
        textAlign: 'center',
        opacity: '0.6',
        verticalAlign: 'center',
        borderRadius: '3px',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        padding: '7px'
      }
      // 用于设置样式
      var spanA = "<span class='angle'><span>"
      var label = new BMap.Label(content + spanA, {
        offset: offsetSize
      })
      label.setStyle(labelStyle)
      return label
    },
    getOrganno (organno) {
      this.getList(organno)
    },
    getList (organo) {
      list({ organno: organo }).then(res => {
        if (res.errcode === 0) {
          this.hwterminalList = res.data.tableData
          if (this.hwterminalList.length > 0) {
            const info = this.hwterminalList[0]
            this.name = info.tername
            this.lng = info.longitude
            this.lat = info.latitude
            this.createMap()
            var points = [] // 添加海量点数据
            this.hwterminalList.forEach(e => {
              var point = new BMap.Point(e.longitude, e.latitude)
              point.name = e.tername
              points.push(point)
            })
            this.setPoint(points, 14)
          }
        }
      })
    },
    setPoint (points, level) {
      this.map.enableScrollWheelZoom()
      this.map.centerAndZoom(new BMap.Point(points[0].lng, points[0].lat), level)
      this.map.clearOverlays()
      /* eslint-disable */
      var options = {
        size: BMAP_POINT_SIZE_BIGGER,    // BMAP_POINT_SIZE_SMALL
        shape: BMAP_POINT_SHAPE_STAR,
        color: '#D84C29'
      }
      /* eslint-enable */
      var pointCollection = new BMap.PointCollection(points, options) // 初始化PointCollection
      pointCollection.addEventListener('mouseover', function (e) { // 监听点击事件
        var p = e.point
        var point = new BMap.Point(e.point.lng, e.point.lat)
        var opts = {
          width: 100, // 信息窗口宽度
          height: 20, // 信息窗口高度
          enableMessage: false// 设置允许信息窗发送短息
        }
        var infowindow = new BMap.InfoWindow(p.name, opts)
        this.map.openInfoWindow(infowindow, point)
      })
      this.map.addOverlay(pointCollection) // 添加Overlay
    },
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    rowClick (row, column, event) {
      this.name = row.tername
      this.lng = row.longitude
      this.lat = row.latitude
      this.createMap()
    }

  }
}
</script>
<style>
  #map {
    min-height: 100%;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .angle{
    display: inline-block;
    width: 0px;
    height: 0px;
    position: absolute;
    bottom:-60px;
    border: 14px solid;
    left: 15px;
    bottom: -25px;
    opacity: 0.8;
    border-color: #333333 transparent transparent transparent;
  }
</style>
