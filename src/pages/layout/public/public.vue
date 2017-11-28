<template>
  <div class="search">
    <div class="box-up">
      <router-link :to="{path:'/index'}">
      <input type="submit" name="" value="取消" class="submit " @click="cancel">
      </router-link>
      <div>
      <router-link exact :to="{path:launchPath}"><span>我发起的</span></router-link>
      <router-link :to="{path:joinPath}"><span>我参与的</span></router-link>
      </div>
      <router-view></router-view>
      <router-link :to="{path:'/build'}">
      <input type="submit" name="" value="+" class="submit build" @click="build">
      </router-link>
    </div>
    <div class="box-mid">
    </div>
  </div>
</template>
<script>
export default {
  name: 'public',
  data () {
    return {
      buildPath:"/public/build",
      joinPath:"/public/join",
      launchPath:"/public/launch",
      flag:true,
      input1:"",
      tag:""
    }
  },
    methods: {
      build:function(event){
          this.$router.push({
            name:"Build",
            query:{
              // input1:this.input1
            }
          })
      },
      cancel:function(event){
       
          console.log(this.input1);
          this.$router.push({
            name:"Index",
            query:{
              // input1:this.input1
            }
          })
      },
      send:function(event){
        //获取当前标签
        // console.log(event.currentTarget)
        this.tag = event.currentTarget.value;
        this.$router.push({
            name:"SearchTo",
            query:{
              input1:this.tag
            }
          })

      },
      send2:function(event){
        //获取当前标签
        // console.log(event.currentTarget)
        this.tag = event.currentTarget.value;
        console.log(this.tag)
        this.$router.push({
            name:"SearchTo",
            query:{
              input1:this.tag
            }
          })

      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// 25px   1rem = 50px;  0.5rem  
// 18px

// rem适合固定布局的形式
// 百分比 、 css3弹性盒子模型

.search{
  background:#fff;
  .box-up{
    height:155/50rem;
    background:#ff406f;
    position:relative;
    div{   
        text-align: center;
      span{
        width: 85/50rem;
        height: 0.4rem;
        display: inline-block;
        text-align: center;
        line-height: 0.4rem;
        margin:8/50rem 0.35rem 0 0.35rem;
        font-size: 18/50rem;
        color: #fff;
        text-align: center;
         
      }
    }
    .submit{
      color:#ff406f;
      background:#fff;
      border:none; 
      height:24/50rem; 
      width:53/50rem;
      font-size:14/50rem;
      line-height:0.5rem;
      margin-left:10/50rem;
      position:relative;
      top: 0.6rem;
    }
    .build{

      float: right;
      color:#ff406f;
      background:#fff;
      border:none; 
      height:24/50rem; 
      width:53/50rem;
      font-size:24/50rem;
      line-height:0.5rem;; 
      text-align: center;
      position:absolute;
      top: 0.6rem;
      right: 0.2rem;
    }

  } 
  .box-mid{
    height:595/50rem;
    overflow: scroll;
    width:90%;
    margin:0 auto;
  }

}

.active{
  span{
    border-bottom: 2px solid #fff; 
  }
}

 

</style>
