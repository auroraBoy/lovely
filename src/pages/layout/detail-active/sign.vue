<template>
  <div class="sign">
     <Heads/>
      <Calendar v-on:chose_day="clickday"
           v-on:is_today="clicktoday"
           v-on:change_month="change_date"
           :mark_array = "signArr"
           :is_hide_otherday = true
           ></Calendar>
     <div class="sign-in-line">
      <a v-on:click="signIn" href="javascript:;">
        <img src="../../../assets/mine-images/mine-add.png">
      </a>
     </div>
     <div class="sign-in-integral">
      <div class="grow-value">
        <p>成长值 <span>{{grow}}</span></p>
      </div>
      <div class="sign-in-line line"></div>
      <div class="grow-value">
        <p>积&nbsp;&nbsp;&nbsp;分 <span>{{grow*20}}</span></p>
      </div>
    </div>
    <div class="sign-in-integral intergral-conversion">
      <h2>积分兑豪礼</h2>
        <p>登录签到可获得成长值,累计成长值可兑换积分</p>
        <p>积分可用于优惠专区购买限时产品，也可参加秒杀活动</p>
        <p>不定期还可以参加抽奖活动哦</p>
    </div>
 </div> 
</template>
<script>
import Heads from '../common/heads'
  export default{
  name:'sign',
  data(){
    return{
     signArr:[],
     grow:0
    }
  },
  components:{
    Heads
  },
  created(){
    var signData=JSON.parse(localStorage.getItem("signData"));
    
    if(signData){
      this.grow=signData.length;
      this.signArr=signData;
    }else{
      this.signArr=[];
    }
  },
   methods:{
    clickday:function(data){
        console.log(data) //选中某天
      },
      change_date:function(data){
        console.log(data)  //左右点击切换月份
      },
      clicktoday:function(data){
        console.log(data)  //切换月份的时候，如果切到当前月份,调用这个方法
      },
      signIn:function(){
        var myDate= new Date()
        var tdNum = myDate.getDate();
        var signData=JSON.parse(localStorage.getItem("signData"));
         
        if(signData){
          var flag = 1;//1表示没有可以存储 0表示有不能存储
          for(var i = 0; i<signData.length;i++){
          if(signData[i]==tdNum){
            flag = 0;
            return
          }else{
            flag = 1;
          }
        }
           if(flag==1){
             signData.push(tdNum);
            localStorage.setItem("signData",JSON.stringify(signData))
            // window.location.href("#");
          }else{
            return
          }
        }else{
          console.log(tdNum)
           var arr=[tdNum];
           localStorage.setItem("signData",JSON.stringify(arr))
        }
        this.signArr.push(tdNum);

      }
   }
  }
</script>
<style scoped lang='less'>
.sign{
    width:100%;
    height:667/50rem;
    background-color: #fff;
   .head{
    height:60/50rem !important;
   }
  .sign-in-line{
    width:100%;
    height:1px;
    border:1px solid #ccc;
    box-sizing:border-box;
    position:relative;
    &>a{
      position:absolute;
      right:30/50rem;
      top:-25/50rem;
      &>img{
        width:52/50rem;
        height:52/50rem;
      }
    }
   }
   .sign-in-integral{
      width: 355/50rem;
      height: 90/50rem;
      background: #fff;
      border-radius: 5px;
      box-sizing:border-box;
      margin:35/50rem auto 10/50rem;
      padding:15/50rem 20/50rem 10/50rem 20/50rem;
      box-shadow:0px 0px 20px 1px #ccc;
      .grow-value{
        &>p{
          font-size:15/50rem;
          &>span{
            margin-left:195/50rem;
          }
        }
      }
      .line{
        margin:15/50rem 0 ;
      }
   }
   .intergral-conversion{
    height:140/50rem;
    line-height:20/50rem;
      &>h2{
        font-size:15/50rem;
        margin-bottom:10/50rem;
        letter-spacing:2/50rem;
      }
      &>p{
        font-size:13/50rem;

      }
    
   }
   }
</style>
