<template>
  <div class="index">
    <div class="boxup"></div>  
    <div class="box-con">
      <template>
        <router-link tag="div" :to="{name:'search2',query:{root:'index'}}" class="seach">
          <img :src="sousuo">
        </router-link>
        <div class="onesweep">
          <img :src="sao">
          <input type="file" accept="image/*" capture="camera" class="xiangji" id="xiangji">
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="美丽推荐" name="first">
            <div class="outer">
              <div class="box">
                <swiper :options="swiperOption">
                  <swiper-slide v-for="(img,idxs) in newsList" key="idxs">
                    <img :src="img" alt="">
                  </swiper-slide>
                  <!-- Optional controls -->
                  <div class="swiper-pagination"  slot="pagination"></div>

                </swiper>
                <p>
                  <router-link  :to="{name:'article',query:{title:'精选文章'}}">精选文章</router-link>
                  <router-link :to="{name:'recommend',query:{title:'活动推荐'}}">活动推荐</router-link>
                  <router-link :to="{name:'sign',query:{title:'每日一签'}}">每日一签</router-link>
                </p>
                <h2><i></i>活动专题&nbsp;&nbsp;&nbsp;<i></i></h2>
                 <Active/>
                       
              </div>
              
            </div>
          </el-tab-pane>
          <el-tab-pane label="学变美" name="second">
            <div class="adonize">
              <template>
                <el-tabs v-model="activeClass" @tab-click="handleClick">
                  <el-tab-pane label="美丽视频" name="movie">
                    
                    <div class="note-outer">
                      <router-link tag='div' :to="{name:'video',query:{title:'视频'}}" v-for="(item,idx) in beautifylist" class="note-box" key="idx">
                        <div class="bofanjian">
                            <img :src="bofanjian">
                        </div>
                        <img :src="item.beautifyimg">
                          <p>今日推荐 | <span>{{item.title}}</span></p>
                      </router-link>                
                      </div>
                  </el-tab-pane>
                  <el-tab-pane label="女神日记" name="note">
                    <div class="note-outer">
                      <router-link tag='div' :to="{name:'articles',query:{title:'文章'}}" v-for="(item,idx) in diarylist" class="note-box" key="idx">
                        <img :src="item.diaryimg">
                          <p>今日推荐 | <span>{{item.title}}</span></p>
                      </router-link>   
                      </div>

                  </el-tab-pane>
                </el-tabs>
              </template>
              
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
    <Foots/>
  </div>
</template>

<script>
import Foots from './common/foots'
import Active from './detail-active/active'
export default {
  name: 'Index',
  data () {
    return {
      newsList:{},
      beautifylist:{},
      diarylist:{},
      sousuo:{},
      bofanjian:{},
      sao:{},
      activeName: 'first',
      activeClass:'movie',

       swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          observeParents: true,
          loop:true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
          }
          // more Swiper configs and callbacks...
          // ...
        }
    }
  },
   methods:{
      handleClick(tab, event) {
      
      }
    },
    created(){
      this.$axios.get(this.HOST+"lovelinessData/index.json")
     .then(res => {
     this.newsList=res.data.swipeimg
     this.sousuo=res.data.index.sousuo
     this.sao=res.data.index.sao
     this.bofanjian=res.data.index.bofanqiimg
     this.beautifylist=res.data.beautify
     this.diarylist=res.data.diary
     })
    .catch(error => {
      console.log(error)
    })
   },
  components:{
    Foots,
    Active
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// 25px   1rem = 50px;  0.5rem  
// 18px

// rem适合固定布局的形式
// 百分比 、 css3弹性盒子模型

.swiper-pagination-bullet-active{
  background:#fff;
}
.seach{
 position:absolute;
 z-index: 6;
 top:8/50rem;
 left:5/50rem;
 width:25/50rem;
 margin:15/50rem;
 height:25/50rem;
 &>img{
  width:100%;
  height: 100%;
 }
}
.onesweep{
  position:absolute;
  width:27/50rem;
  height:27/50rem;
  margin:15/50rem;
  top:10/50rem;
  right:3/50rem;
  z-index: 1;
  &>img{
    width:27/50rem;
    height: 27/50rem;
  }
   .xiangji{
    width:27/50rem;
    height: 27/50rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    opacity: 0;
  }
}

.index{
  .boxup{
    height:155/50rem;
    width:100%;
    background:#ff406f;
  }
  .box-con{  
    margin-top:-2.8rem;
    span{
      display:inline-block;
      width:80/50rem;
      height:0.6rem;
      text-align:center;
      line-height:0.6rem;
      color:#fff;
      margin-left:1.3rem;
      font-size:16/50rem;
      border-bottom:2px solid #fff;
    }
    .adonize{
      box-shadow:0 0 0.3rem #ccc;
      width:95%;
      margin:0.2rem auto 1.4rem;
      padding-top:0.4rem;
      background:#fff;
      border-radius:0.1rem;
      .note-outer{
        width:95%;
        margin:0 auto 0.2rem;
        .note-box{
          .bofanjian{
            width: 70/50rem;
            height: 70/50rem;
            position: absolute;
            margin:70/50rem-20/50rem 2.7rem 0;
            &>img{
              width: 100%;
              height: 100%;
            }
          }
          img{
             width: 100%;
            height:160/50rem;
          }
          p{
            font-size:14/50rem;
            span{
              color:#000;
              font-size:14/50rem;
              width:3rem;
              text-align:left;
              margin:0;
            }

          }
          
          
        }

      }
      
    }
    .outer{

      margin:0.2rem auto 1.4rem;
      .box{
        width:100%;
        .swiper-container{
          width:95%;
          border-radius:0.2rem; 
        }
        .swiper-slide{
          width:100%;
          height:150/50rem;
          &>img{
            width:100%;
            height:150/50rem;
          }
        }
        p{
          width:355/50rem;
          margin:15/50rem auto;
          background:#fff;
          border-radius:0.15rem;
          display:flex;
          a{
            width:115.5/50rem;
            display:inline-block;
            text-align:center;
            font-size:16/50rem;
            line-height:1.2rem;

          }
        }
        h2{
          width:100%;
          text-align:center;
          line-height:1rem;
          font-size:16/50rem;
          i{
            display:inline-block;
            height:0.2rem;
            width:0.5rem;
            background:url("../../assets/main/index/images/index-heart.png") no-repeat;
          }
        }
      }
    }
    }
  }  
</style>