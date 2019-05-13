import Vue from 'vue'
import Router from 'vue-router'
import index from './modules/system'
import login from './modules/system/login'
import demo from './modules/system/demo'
import sysuser from './modules/system/sysuser'
import sysrole from './modules/system/sysrole'
import sysbaseorgan from './modules/system/sysbaseorgan'
import sysdict from './modules/system/sysdict'
import sysmenu from './modules/system/sysmenu'
import sysnotice from './modules/system/sysnotice'
import tjuser from './modules/tj/tjuser'
import hwterminalinfo from './modules/hw/hwterminalinfo'
import dotlocation from './modules/hw/dotlocation'
import hwpassageinfo from './modules/hw/hwpassageinfo'
import nrgoodsinfo from './modules/nr/nrgoodsinfo'
import wyservice from './modules/wy/wyservice'
import hwrubbishdeliveryinfo from './modules/hw/hwrubbishdeliveryinfo'
import hovillage from './modules/ho/hovillage'
import hwrepairinfo from './modules/hw/hwrepairinfo'
import hwrecoverypriceinfo from './modules/hw/hwrecoverypriceinfo'
import hohouse from './modules/ho/hohouse'
import hwrfidcoderelevance from './modules/hw/hwrfidcoderelevance'
import hwadmanageterrelevance from './modules/hw/hwadmanageterrelevance'
import tjversion from './modules/tj/tjversion'
import tjusersms from './modules/tj/tjsms'
import tjuserrole from './modules/tj/tjuserrole'
import tjusertimingpush from './modules/tj/tjusertimingpush'
import nrbanner from './modules/nr/nrbanner'
import tjmessage from './modules/tj/tjmessage'
import tjannouncement from './modules/tj/tjannouncement'
import tjquestions from './modules/tj/tjquestions'
import nrbooks from './modules/nr/nrbooks'
import tjfeedback from './modules/tj/tjfeedback'
import hwrecoverywait from './modules/hw/hwrecoverywait'

Vue.use(Router)

export const constantRouterMap = [
  index,
  login,
  demo,
  sysuser,
  sysrole,
  sysbaseorgan,
  sysdict,
  sysmenu,
  sysnotice,
  tjuser,
  hwterminalinfo,
  dotlocation,
  hwpassageinfo,
  nrgoodsinfo,
  wyservice,
  hwrubbishdeliveryinfo,
  hovillage,
  hwrepairinfo,
  hwrecoverypriceinfo,
  hohouse,
  hwrfidcoderelevance,
  hwadmanageterrelevance,
  tjversion,
  tjusersms,
  tjuserrole,
  tjusertimingpush,
  nrbanner,
  tjmessage,
  tjannouncement,
  tjquestions,
  nrbooks,
  tjfeedback,
  hwrecoverywait
]

export default new Router({
  routes: constantRouterMap
})
