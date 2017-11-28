<template>
  <div class="remark">
       <div class="evaluation">
           <div class="comment">
            <div class="heart-num">
              <div>
                <el-rate v-model="value5" disabled show-score text-color="#ff406f" color="#ff406f">

                </el-rate>
              </div>
            </div>
            <div class="heart-desc">
              <p><el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="exception"></el-progress></p>
              <p><el-progress :text-inside="true" :stroke-width="15" :percentage="80" status="exception"></el-progress></p>
             <p><el-progress :text-inside="true" :stroke-width="15" :percentage="40" status="exception"></el-progress></p>
             <p><el-progress :text-inside="true" :stroke-width="15" :percentage="14" status="exception"></el-progress></p>
             <p><el-progress :text-inside="true" :stroke-width="15" :percentage="7" status="exception"></el-progress></p>
            </div>
            <div class="heart-foot">
              <img src="../../../../assets/word/4.png" alt="">
              <p>徐娇</p>
              <img src="../../../../assets/word/5.png" alt="">
              <p>众所周知，眼部肌肤往往是脆弱，容易衰老，容易暴露您的年龄的。雅诗兰黛(Estee Lauder)青春抗皱滋润眼霜5ml，采用了三项针对眼部不同问题的最新技术 。</p>
            </div>
         </div>
       </div>
  </div>
</template>
<script>
  export default{
    name:'remark',
    data(){
    return{
          value5:4.5
    }
    }
  }
</script>
<style scoped lang='less'>
    .evaluation{

      margin-top: 1rem;
      &>ul{
        width:285/50rem;
        display:flex;
        overflow: hidden;
        margin: 0 auto;
        &>li{
           float: left;
           flex-grow:1;
        }

      }
       .comment{
      // width: 355/50rem;
      // height:600/50rem;
      background-color: #fff;
      padding: 0.2rem 15/50rem 0.2rem 15/50rem;
      box-sizing: border-box;
      box-shadow:0px 0px 20px 1px #ccc;
      .heart-num{
        display: inline-block;
        width: 130/50rem;
        padding-top: 10/50rem;
        &>p{
          text-align: center;
          color: #A7A7A7;
          font-size: 10/50rem;
        }
        &>div{
          margin-top: 10/50rem;
          &>img{
            width: 13/50rem;
            height:0.2rem;
          }
        }
      }
      .heart-desc{
        float: right;
         width: 50%;
       &>p{
         padding:0 18/50rem 10/50rem;
        font-size: 9/50rem;
        color:#B3B3B3;
       }
      }
      .heart-foot{
         clear:both;
         img{
          display: block;
          &:nth-child(1){
              width: 12/50rem;
              height: 12/50rem;
          }
          &:nth-child(3){
            margin-top: 5/50rem;
            clear:both;
            width: 42/50rem;
            height: 42/50rem;
          }
        }
        p{
          font-size: 10/50rem;
          line-height: 15/50rem;
          &:nth-child(2){
            margin-top: -12/50rem;
            position: relative;
            left: 17/50rem;
          }
          &:nth-child(4){
            margin-top: -42/50rem;
            // position: relative;
            margin-left: 57/50rem;
          }
          
        }
      }
    }
   }
</style>
