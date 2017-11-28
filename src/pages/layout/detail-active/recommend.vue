<template>
	 <div class="recommend">
     <Heads/> 
      <router-link v-for="(item,idx) in newsList" tag='div' :to="{name:'articles',query:{title:'文章'}}" class="img_warp" key="idx">
        <img :src="item.img">
    </router-link>
   </div> 
</template>
<script>
import Heads from '../common/heads'
	export default{
	name:'recommend',
	data(){
      return{
        newsList:{}
      }

	},
   created(){
      this.$axios.get(this.HOST+"lovelinessData/index.json")
     .then(res => {
     this.newsList=res.data.siftarticle
     })
    .catch(error => {
      console.log(error)
    })
   },
  components:{
    Heads
  }
	}
</script>
<style scoped lang='less'>
  .recommend{
  	  width:100%;
  	  height:665/50rem;
  	  background-color:#fff;
	 .img_warp{
      width:90%;
      height:200/50rem;
      background-color:#fff;
      border-radius:0.1rem;
      z-index:2;
      padding:10/50rem;
      margin:-85/50rem auto 100/50rem;
      box-shadow:0 0 0.3rem #ccc;
      &>img{
      	width:100%;
      	height:100%;
      }
    }
   }
</style>