<template>
  <div class="search">
    <div class="box-up">

      <img src="../../../../assets/erji/banner/images/search_03.png">
      <form action='' onsubmit="return false;" class="form-box">
        <!-- 移动端回车键事件监听 vue中按键修饰符可以 看到 -->
        <input type="text" name="" placeholder="请输入要搜索的内容" class="search" ref="input1"  @keyup.enter="send2">
      </form>
      <input type="submit" name="" value="取消" class="submit" @click="cancel">
    </div>
    <div class="box-mid">
      <div class="box-mid-con-index">
        <p>大家爱搜</p>
        <p class="list">
          <button v-for="item in productList" @click="send" :value="item.type">{{item.type}}</button>
        </p>
      </div>

      <div class="box-mid-con">
        <span><router-link exact :to="{path:topicPath}">话题</router-link></span>
        <span><router-link :to="{path:productPath}">产品</router-link></span>
        <span><router-link :to="{path:usersPath}">用户</router-link></span>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'Search2',
  data () {
    return {
      searchToPath:"/searchTo",
      topicPath:"/search2/topics",
      productPath:"/search2/product",
      usersPath:"/search2/users",
      flag:true,
      input1:"",
      roots:"",
      id:"223333333",
      productList:[
      {
        type:"身体乳",
        id:"emulsion"
      },
      {
        type:"口红",
        id:"lipstick"
      },
      {
        type:"控油",
        id:"control"
      },
      {
        type:"粉饼",
        id:"powder"
      },
      {
        type:"精华",
        id:"essence"
      }],
      tag:""
    }
  },
    methods: {
      cancel:function(event){
        this.roots = this.$route.query.root;
        console.log(this.$route.query.root)
        console.log(this.roots)
          this.$router.push({
           name:this.roots
          })
      },
      send:function(event){
        //获取当前标签
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
    height:40/50rem;
    background:#ff406f;
    padding-top:30/50rem;
    padding-left:10/50rem;
    position:relative;
    img{
      position:absolute;
      top:32/50rem;
      left:12/50rem;
      height:22/50rem;
      width:22/50rem;

    }
    .form-box{
      width: 250/50rem;
      display: inline-block;
    }

    .search{
      width:250/50rem;
      height:24/50rem;
      border:none;
      border-radius:0.05rem;
      padding-left:33/50rem;
      font-size:14/50rem;

    } 
    .submit{
      color:#ff406f;
      background:#fff;
      border:none; 
      height:24/50rem; 
      width:53/50rem;
      font-size:14/50rem;
      line-height:0.5rem;
      margin-left:40/50rem;
      text-align: center;
    }

  } 
  .box-mid{
    height:595/50rem;
    overflow: scroll;
    width:90%;
    margin:0 auto;
    .box-mid-con-index{
      height:1.5rem;
      width:95%;
      margin:0 auto;
      p{
        font-size:0.3rem;
        line-height:0.6rem;
      }
      .list{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        button{
          // display: inline-block;
          float: left;
          font-size:12/50rem;
          width:50/50rem;
          display:inline-block;
          text-align:center;
          border:1px solid #ff406f;
          border-radius:0.05rem;
          height:0.5rem;
          line-height:0.4rem;
          background: #fff;
        }
      }

    } 
    .box-mid-con{
      border: 1px solid #ddd;
      box-shadow: 0 0 0.3rem #ddd;
      margin-bottom: 0.4rem;
      .active{
        color: red;
        font-size: 16/50rem;
      }


      span{
        display: inline-block;
        width: 32%;
        height: 1rem;
        line-height: 0.4rem;
        font-size: 14/50rem;
        text-align: center;
        a{
          border-right: 1px solid #000;
          width: 100%;
          height: 0.4rem;
          margin-top: 15/50rem;
          display: inline-block;
        }
      }
      span:nth-child(3){
        a{
          border-right: none;
        }
      }
    }
    
    

  } 
}

 

</style>

