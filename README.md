1.lessloader的添加 注意lang="less"

2.rem的处理

3.iconfont的引入

4.路由搭建

5.移动端布局
	小心使用padding和margin


6.项目文件夹结构：
----build
----config
----node_modules
----src
--------assets
--------components(公用组件)
-------------index初始页面
-------------footer组件
--------router
--------mian.js
--------App.vue (初始化页面和样式)
--------pages(页面组件)
-------------classify分类页面
-------------find发现页面
-------------home首页
-------------mine我的
------------------detailspages
----static
----.babelrc

*******移动端布局
      用的时候在style标签里加上lang=”less”里面就可以写less的代码了(style标签里加上 scoped 为只在此作用域 有效)


element - 饿了么出品的Vue2的web UI工具套件
Vux - 基于Vue和WeUI的组件库
mint-ui - Vue 2的移动UI元素
iview - 基于 Vuejs 的开源 UI 组件库
Keen-UI - 轻量级的基本UI组件合集
vue-material - 通过Vue Material和Vue 2建立精美的app应用
muse-ui - 三端样式一致的响应式 UI 库
vuetify - 为移动而生的Vue JS 2组件框架
vonic - 快速构建移动端单页应用
eme - 优雅的Markdown编辑器
vue-multiselect - Vue.js选择框解决方案
vue-table - 简化数据表格
VueCircleMenu - 漂亮的vue圆环菜单
vue-chat - vuejs和vuex及webpack的聊天示例
vue-waterfall - Vue.js的瀑布布局组件
vue-beauty - 由vue和ant design创建的优美UI组件
vue-infinite-scroll - VueJS的无限滚动指令
Vue.Draggable - 实现拖放和视图模型数组同步
vue-awesome-swiper - vue.js触摸滑动组件
vue-calendar - 日期选择插件
vue-amap - 基于Vue 2和高德地图的地图组件
vue-chartjs - vue中的Chartjs的封装
vue-datepicker - 日历和日期选择组件
vue-progressbar - vue轻量级进度条
vue-picture-input - 移动友好的图片文件输入组件
vue-infinite-loading - VueJS的无限滚动插件
vue-upload-component - Vuejs文件上传组件
vue-datetime-picker - 日期时间选择控件
vue-scroller - Vonic UI的功能性组件
vue-video-player - VueJS视频及直播播放器
vue-fullcalendar - 基于vue.js的全日历组件
VueStar - 带星星动画的vue点赞按钮
vue-mugen-scroll - 无限滚动组件
vue-msgbox - vuejs的消息框
vue-core-image-upload - 轻量级的vue上传插件
vue-lazyload-img - 移动优化的vue图片懒加载插件
vue-dropzone - 用于文件上传的Vue组件
vue-charts - 轻松渲染一个图表
vue-swiper - 易于使用的滑块组件
vue-images - 显示一组图片的lightbox组件
vue-carousel-3d - VueJS的3D轮播组件
vue-region-picker - 选择中国的省份市和地区
vue-typer - 模拟用户输入选择和删除文本的Vue组件
vue-impression - 移动Vuejs2 UI元素
vue-datatable - 使用Vuejs创建的DataTableView
vue-instant - 轻松创建自动提示的自定义搜索控件
vue-dragging - 使元素可以拖拽
vue-slider-component - 在vue1和vue2中使用滑块
vue2-loading-bar - 最简单的仿Youtube加载条视图
vue-datepicker - 漂亮的Vue日期选择器组件
vue-video - Vue.js的HTML5视频播放器
vue-toast-mobile - VueJS的toast插件
vue-image-crop-upload - vue图片剪裁上传组件
vue-tooltip - 带绑定信息提示的提示工具
vue-highcharts - HighCharts组件
vue-touch-ripple - vuejs的触摸ripple组件
coffeebreak - 实时编辑CSS组件工具
vue-datasource - 创建VueJS动态表格
vue2-timepicker - 下拉时间选择器
vue-date-picker - VueJS日期选择器组件
vue-scrollbar - 最简单的滚动区域组件
vue-quill - vue组件构建quill编辑器
vue-google-signin-button - 导入谷歌登录按钮
vue-svgicon - 创建svg图标组件的工具
vue-float-label - VueJS浮动标签模式
vue-baidu-map - 基于 Vue 2的百度地图组件库
vue-social-sharing - 社交分享组件
vue2-editor - HTML编辑器
vue-tagsinput - 基于VueJS的标签组件
vue-easy-slider - Vue 2.x的滑块组件
datepicker - 基于flatpickr的时间选择组件
vue-chart - 强大的高速的vue图表解析
vue-music-master - vue手机端网页音乐播放器
handsontable - 网页表格组件
vue-simplemde - VueJS的Markdown编辑器组件
vue-popup-mixin - 用于管理弹出框的遮盖层
cubeex - 包含一套完整的移动UI
vue-fullcalendar - vue FullCalendar封装
vue-material-design - Vue MD风格组件
vue-morris - Vuejs组件封装Morrisjs库
we-vue - Vue2及weui1开发的组件
vue-image-clip - 基于vue的图像剪辑组件
vue-bootstrap-table - 可排序可检索的表格
vue-radial-progress - Vue.js放射性进度条组件
vue-slick - 实现流畅轮播框的vue组件
vue-pull-to-refresh - Vue2的上拉下拉
vue-form-2 - 全面的HTML表单管理的解决方案
vue-side-nav - 响应式的侧边导航
mint-indicator - VueJS移动加载指示器插件
chartjs - Vue Bulma的chartjs组件
vue-scroll - vue滚动
vue-ripple - 制作谷歌MD风格涟漪效果的Vue组件
vue-touch-keyboard - VueJS虚拟键盘组件
vue-chartkick - VueJS一行代码实现优美图表
vue-ztree - 用 vue 写的树层级组件
vue-m-carousel - vue 移动端轮播组件
vue-datepicker-simple - 基于vue的日期选择器
vue-tabs - 多tab页轻型框架
vue-verify-pop - 带气泡提示的vue校验插件
vue-parallax - 整洁的视觉效果
vue-img-loader - 图片加载UI组件
vue-typewriter - vue组件类型
vue-smoothscroll - smoothscroll的VueJS版本
vue-city - 城市选择器
vue-tree - vue树视图组件
vue-ios-alertview - iOS7+ 风格的alertview服务
dd-vue-component - 订单来了的公共组件库
paco-ui-vue - PACOUI的vue组件
vue-cmap - Vue China map可视化组件
vue-button - Vue按钮组件