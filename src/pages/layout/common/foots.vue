<template>
	 <div class="footer">
	 <router-link tag='div' class="footer-warp" :to="{path:'/index'}">
      <i class="iconfont icon-icon myicon"></i>
      <p class="font">首页</p>
   </router-link>
	 <router-link tag='div' class="footer-warp" :to="{path:'/finds'}">
      <i class="iconfont icon-discover myicon"></i> 
      <p class="font">发现</p>
   </router-link>
	 <router-link tag='div' class="footer-warp" :to="{path:'/classfiy'}">
       <i class="iconfont icon-category myicon"></i>
       <p class="font">分类</p>
    </router-link>
	 <router-link tag='div' class="footer-warp" :to="{path:'/mine'}">
       <i class="iconfont icon-wode4 myicon"></i> 
       <p class="font">我的</p>
   </router-link>
</div>
</template>
<script>
  import "../../../assets/css/font/iconfont.css"
  export default{
  	name:'foots',
  	data(){
  		return{
         
  		}
  	}
  }
</script>
<style scoped lang="less">
	//footer样式
  
.footer{
  box-shadow: 10px 0 5px 3px rgba(0,0,0,.1);
  display:flex;
  background-color:#fff;
  width:100%;
  height:60/50rem;
  position:fixed;
  bottom:0;
  left:0;
  &>div{
      margin:4/50rem 0 4/50rem;
      text-align:center;
      flex-grow:1;
    &>.myicon{
    font-style:'苹方中等';
    font-size:30/50rem;
   &>.font{
    font-size:2/50rem;
   }
  }
  }
}
</style>