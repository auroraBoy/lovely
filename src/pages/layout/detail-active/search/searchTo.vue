<template>
  <div class="search-to">
    <div class="box-up">
      <p>{{judge()}}</p>
      <input type="submit" name="" value="取消" class="submit" @click="cancel">
      <input type="text" name="" v-model="sear" class="search" ref="search"  @keyup.enter="research">
      <input type="submit" name="" value="搜索" class="submit" @click="research">
    </div>
    <div class="index_bottom" >
      <div class="index_bottom_box" v-for="item in this.result">
        <img :src="item.imgurl" class="pro-img">
        <p class="pro-name">{{item.name}}</p>
        <p class="pro-price">￥  <span>{{item.price}}</span></p>
      </div>
      
    </div>
  </div>
</template>

<script>

import qs from 'qs'

export default {
  name: 'searchTo',
  data () {
    return {
      sear:'',
      id:"",
      tag:true,
      result:""
       
    }
  },
  methods: {
    judge:function(){
      //判断是否是第一次进入
      if (this.tag) {
        this.change();
        this.show();
        this.tag = false;
      }

    },
    research:function(){
      this.sear = this.$refs.search.value;
      console.log(this.sear)
      this.show()
    },
    change:function (event) {
       this.sear=this.$route.query.input1;

    },
    cancel:function(event){
        this.$router.push({
            path:"/index"
        })
     },
    show:function(){
        var name = this.sear;
        console.log(name)
        this.$axios.post('http://localhost:3000/show',qs.stringify({
          name:name
         })).then(response => {
           
          this.result = response.data;
          console.log(this.result);
          // get body data
          // this.someData = response.body;

          }, response => {
            console.log("error");
        });

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
.search-to{
  background: #fff;
  height: 667/50rem;
  .box-up{
      height:40/50rem;
      background:#ff406f;
      padding-top:30/50rem;
      padding-left:10/50rem;
      position:relative;
      .search{
        width:230/50rem;
        height:24/50rem;
        border:none;
        border-radius:0.05rem;
        padding-left:10/50rem;
        font-size:14/50rem;
      } 
      .submit{
        color:#ff406f;
        background:#fff;
        border:none; 
        height:24/50rem; 
        width:50/50rem;
        border-radius:0.05rem;
        font-size:14/50rem;
        line-height:0.5rem;

      }

    } 
    .index_bottom{
      width: 95%;
      margin: 0 auto;
      .index_bottom_box{
        border-top: 1px solid #ccc;
        margin-top: 0.2rem;
        width: 100%;
        overflow: hidden;
        .pro-img{
          width: 2rem;

        }
        p{
          font-size: 16/50rem;
        }
        .pro-name{
          float: right;
          width: 70%;
          height: 1rem;
          margin-top: 0.2rem;
        }
        .pro-price{
          float: right;
          width: 70%;
          height: 0.5rem; 
          margin-top: -0.5rem;
          span{
            font-size: 24/50rem;
            color: #ff406f;
          }
        }


      }

    }
}

</style>
