<template>
	<div class="comment">
	      <div class="box-arg-container" v-for="(item,idx) in newsList" key="idx">
          <img :src="item.headimg">
          <p class="con-p"><span>{{item.name}}</span><span>{{item.time}}</span></p>
          <p>{{item.txt}}</p>
        </div>
	</div>
</template>
<script>
	export default{
		name:'comment',
		data(){
			return{
       newsList:{},
			}
		},
    created(){
    this.$axios.get(this.HOST+"lovelinessData/index.json")
     .then(res => {
     this.newsList=res.data.comment
     })
    .catch(error => {
      console.log(error)
    })
   }

	}
</script>
<style scoped lang='less'>
    .comment{
    width:95%;
    margin:0 auto;
    .box-arg-container{
      overflow:hidden;
      margin-bottom:0.4rem;
      img{
        float:left;
        height:42/50rem;
      }
      p{
        display:inline-block;
        width:5.5rem;
        position: absolute;
        font-size:14/50rem;
        overflow:hidden;
        span:nth-child(1){
          font-size:18/50rem;
        }
        span:nth-child(2){
          color:#aaa;
          float:right;
          font-size:14/50rem;
        }
       
      }
      p:nth-child(2){
        margin-left: 10/50rem;
        height:25/50rem;
        line-height:0.5rem;
      }
      p:nth-child(3){
        height:0.4rem;
        line-height:0.4rem;
        margin-top: 22/50rem;
        margin-left: 10/50rem;
      }
    }

  }
</style>