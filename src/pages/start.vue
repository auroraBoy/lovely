<template>
  <div class="start">
   <router-link :to="{path:'/swipes'}">
  <div class="start">
       <img :src="start">
       <h2>美丽由你开始</h2>
  </div>
  </router-link>  
</div>
</template>

<script>

export default {
  name: 'start',
  data () {
    return { 
    start:{}  	
    }
  },
created(){
      this.$axios.get(this.HOST+"lovelinessData/index.json")
     .then(res => {
     this.start=res.data.index.start
     
     })
    .catch(error => {
      console.log(error)
    })
   },
}
</script>


<!-- // 25px   1rem = 50px;  0.5rem  
// 18px

// rem适合固定布局的形式
// 百分比 、 css3弹性盒子模型 -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// 25px   1rem = 50px;  0.5rem  
// 18px

// rem适合固定布局的形式
// 百分比 、 css3弹性盒子模型
.start{
  width: 100%;
  position: relative;
  background:#ff3f6c;
  height:667/50rem;
  overflow: hidden;
  h2{
    font-size: 18 / 50rem;
  }
  &>img{
    display:block;
    margin:180/50rem auto 0;
    width:115/50rem;
  }
  &>h2{
    position: absolute;
    bottom: 0;
    left:0;
    width:100%;
    height:60/50rem;
    line-height:60/50rem;
    text-align:center;
    font-size:14/50rem;
    color:#959595;
    background:#fff;
  }
 }

</style>
