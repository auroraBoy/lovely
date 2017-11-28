<template>
  <div class="warp">
   <Headss/>
   <div class="warpimg">
    <div v-for="(item,idx) in newsList" class="center" key="idx">
      <div class="content">
        <img :src="item.headimg">
        <div class="name">
          <p>{{item.name}}</p>
          <p>{{item.introduce}}</p>
        </div>
        <button class="attention"  @click="showHide">
          关注ta
        </button>
        <!-- <div class="attention"  @click="showHide" v-else>
          <p >已关注</p>
        </div> -->
      </div>
    </div>
   </div>
  </div>
</template>

<script>
import Headss from "../common/Headss"
  export default {
    name: 'attention',
    data () {
      return {
        newsList:{},
        flag:false
      }
    },
  created(){
      this.$axios.get(this.HOST+"lovelinessData/index.json")
     .then(res => {
     this.newsList=res.data.fans
      console.log(this.newsList)
     })
    .catch(error => {
      console.log(error)
    })
   },
   components:{
    Headss
   },
  methods:{
    showHide(event){
      // 值的改变会引起视图重新渲染
      // data中的值一旦发生改变，则会引起视图重新渲染
      this.flag = !this.flag;
      var flag= this.flag;
      console.log(flag);
      console.log(event.target.innerHTML)
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
.warp{
  width: 100%;
  height: 665/50rem;
  background-color: #fff;
.warpimg{
  margin-top: -100/50rem;
   background-color: #fff;
.center{
  width:100%;
  height:78/50rem;
  border-top:1px solid #ddd;
  border-bottom:1px solid #ddd;
  margin-top:9/50rem;
  .content{
    width:329/50rem;
    height:48/50rem;
    margin:0 auto;
    margin-top:16/50rem;
    &>img{
      width:48/50rem;
      height:48/50rem;
      float:left;
    }
    .name{
      float:left;
      margin-left:9/50rem;
      &>p{
        line-height:23/50rem;
        font-size:13/50rem;
      }
    }
    button{
      width:55/50rem;
      height:21/50rem;
      float:right;
      border-radius:15px;
      background: #fff;
      border:1px solid #C0C0C0;
      margin-top:15/50rem;
      text-align: center;
      font-size:10/50rem;
      color:#C0C0C0;
      line-height:21/50rem;
      outline: none;     
    }
  }
}
}
}
</style>