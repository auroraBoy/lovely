<!-- <template>
  <div class="search">
    <div class="box-up">

      <!-- <div class="search-box"> -->
        <!-- <img src="../assets/erji/banner/images/search_03.png"> -->
      <!-- </div> -->
      

      <div class="box-mid-con">
        <span><router-link exact :to="{path:search2Path}">搜索</router-link></span>
   <!--      <span><router-link :to="{path:productPath}">产品</router-link></span>
        <span><router-link :to="{path:usersPath}">用户</router-link></span> -->
        <router-view></router-view>
        
      </div>
      
    </div>
    <div class="box-middle">
      <p>产品名称:<input type="" name=""></p>
      <p>产品类型:<input type="" name=""></p>
      <p>产品价格:<input type="" name=""></p>
      <p>产品编号:<input type="" name=""></p>
      <p>产品图片:<input type="" name=""></p>
    </div>
  </div>
</template>

<script>



export default {
  name: 'index',
  data () {
    return {
      search2Path:"/search2",
      searchToPath:"/searchTo",
      topicPath:"/topic",
      productPath:"/product",
      usersPath:"/users",
      flag:true,
      input1:"",
      tag:""
    }
  },
    methods: {
      // change:function(event){
       
      //     console.log(this.input1);
      //     this.$router.push({
      //       name:"index",
      //       query:{
      //         // input1:this.input1
      //       }
      //     })
      // },
      // send:function(event){
      //   //获取当前标签
      //   // console.log(event.currentTarget)
      //   this.tag = event.currentTarget.value;
      //   this.$router.push({
      //       name:"SearchTo",
      //       query:{
      //         input1:this.tag
      //       }
      //     })

      // }
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
    .search-box{
      width: 0.6rem;
      height: 0.6rem;
      background: #fff;
      display: inline-block;
      img{
        position:absolute;
        top:32/50rem;
        left:12/50rem;
        height:22/50rem;
        width:22/50rem;

      }

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
      border:none; 
      height:24/50rem; 
      width:53/50rem;
      // border-radius:0.05rem;
      font-size:14/50rem;
      line-height:0.5rem;
      margin-left:15/50rem;
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

 -->