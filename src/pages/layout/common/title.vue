<template>
  <div class="title">
        <p>
          <span>9天前</span>
          <span>3120</span>
        </p>
        <p>
          <span>30</span>
          <img v-on:click="addCount" v-if="likeStatus" src="http://mraur.oss-cn-beijing.aliyuncs.com/img/BANNER_04.png">
          <img v-on:click="addCount" v-else src="http://mraur.oss-cn-beijing.aliyuncs.com/img/BANNER_12.png"><span v-on:click="addCount">{{likeCount}}</span>
        </p>
  </div>
</template>
<script>
  export default{
    name:'title',
    data(){
      return{
          
          likeCount:500,
          likeStatus:false
      }
    },
    methods:{
        addCount:function(){
             this.likeStatus= !this.likeStatus;
             if(this.likeStatus){
              this.likeCount++
             }else{
              this.likeCount--
             }
        }
    }
  }
</script>
<style scoped lang='less'>
  .title{
      height:40/50rem;
      line-height:50/50rem;
      overflow:hidden;
      padding:5/50rem;
      p:nth-child(1){
        float:left;
        span{
          display:inline-block;
          padding-left:20/50rem;
          margin-right:0.2rem;
          font-size:14/50rem;
        }
        span:nth-child(1){
          background:url("http://mraur.oss-cn-beijing.aliyuncs.com/img/BANNER_10.png") no-repeat;
          background-position:0 16/50rem;
          background-size:16/50rem 16/50rem;
        }
        span:nth-child(2){
          background:url("http://mraur.oss-cn-beijing.aliyuncs.com/img/BANNER_11.png") no-repeat;
          background-position:0 16/50rem;
          background-size:16/50rem 12/50rem;
        }

      }
      p:nth-child(2){
        float:right;
        position: relative;
        &>img{
          width: 18px;
          height:16px;
          position: absolute;
          right: 27px;
          top:17px;
        }
        span{
          display:inline-block;
          padding-left:20/50rem;
          margin-left:0.2rem;
          font-size:14/50rem;
        }
        span:nth-child(1){
          background:url("../../../assets/erji/banner/images/BANNER_15.png") no-repeat;
          background-position:0 16/50rem;
          background-size:16/50rem 16/50rem;
        }
      }

    }
</style>