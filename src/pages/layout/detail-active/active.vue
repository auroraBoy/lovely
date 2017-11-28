<template>
  <div>
  <router-link v-for="(item,idx) in newsList" :to="{name:'articles',query:{title:'文章'}}">
  <div class="container">
  <div class="con">
     <img :src="item.headimg">
    <span>悦小舞</span>
    <a href="javascript:;" @click="showHide">关注ta</a>
  </div>
  <img :src="item.img">
  </div>
  </router-link>
  </div>
</template>
<script>
	export default{
		name:'active',
		data(){
			return{
          newsList:{},
          flag:false
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
  methods:{
    showHide(event){
      // 值的改变会引起视图重新渲染
      // data中的值一旦发生改变，则会引起视图重新渲染
      this.flag = !this.flag;
      var flag= this.flag;
      if(flag){
           event.target.innerHTML="已关注";
           event.target.style.color="#ff406f";
           event.target.style.border="1px solid #ff406f"
      }else{
        event.target.innerHTML="关注ta";
        event.target.style.color="#C0C0C0";
       event.target.style.border="1px solid #C0C0C0"
      }
    }
  }
	}
</script>
<style scoped lang="less">
	    .container{
          border-radius:8/50rem;
          height:5rem;
          width:355/50rem;
          background:#fff;
          margin:0 auto 0.5rem ;
          box-shadow:0 0 10/50rem 5/50rem rgba(0,0,0,.1);
          .con{
            &>img{
              height:0.8rem;
              margin:-0.2rem 0.2rem 0 ;
            }
            a{
              display:inline-block;
              line-height:0.2rem;
              border-radius:0.2rem;
              border:1px solid #8c8c8c;
              padding:0.15rem;
              float:right;
              margin:0.2rem 0.2rem 0 0;
            }
          }
          &>img{
            width:335/50rem;
            margin:0.2rem 0 0 0.2rem;
          }
        }
</style>