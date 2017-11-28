<template>
  <div class="news-body">
    <div class="new-body" v-for="(item,key) in newsList">

        <img :src="item.img" alt="">
        <p>{{item.title}}</p>
        <p>{{item.txt}}</p>
        <p>{{item.time}}</p>
    </div>

  </div>
</template>
<script>
  export default{
    name:'news',
    data(){
      return{
       newsList:{}
      }
    },
      created(event){
        this.$axios.get(this.HOST+"lovelinessData/three.json")
       .then(res => {
       this.newsList=res.data.word
       })
      .catch(error => {
        console.log(error)
      })
   }
  }
</script>
<style scoped lang="less">
  .news-body{
    width: 100%;
    color: #AAAAAA;
    font-size: 13/50rem;
    // font-family:'仿宋';
    
    .new-body{
      width: 100%;
      height: 66/50rem;
      background: #fff;
      box-shadow:0px 0px 20px 1px #ccc;
      margin-top: 12/50rem;

      img{
        width: 48/50rem;
        margin-top: 8/50rem;
        margin-left: 25/50rem;
      }
      p{

        margin-left: 85/50rem;
        margin-top:-46/50rem;
        &:nth-child(3){
              margin-top: 12/50rem;
          }
          &:nth-child(4){
              float: right;
              font-size: 10/50rem;
              margin-right: 25/50rem;
          }
      }
    }
  }
</style>