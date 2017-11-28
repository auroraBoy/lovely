<template>
  <div class="shop-topic">
   <div class="topic-list">
    <router-link :to="{name:'articles',query:{title:'文章'}}">
      <div class="topic-image">
        <img src="../../../../assets/home-images/topic1.png">
      </div>
    </router-link>
      <div class="user">
        <div class="user-left">
          <img src="../../../../assets/home-images/topic-head.png">
          <p>Lucy</p>
        </div>
        <div class="user-right">
          <a href="javascript:;">11251</a>
        </div>
      </div>
   </div>
   <div class="topic-list">
    <router-link :to="{name:'articles',query:{title:'文章'}}">
      <div class="topic-image">
        <img src="../../../../assets/home-images/topic1.png">
      </div>
    </router-link>
      <div class="user">
        <div class="user-left">
          <img src="../../../../assets/home-images/topic-head.png">
          <p>Lucy</p>
        </div>
        <div class="user-right">
          <a href="javascript:;">11251</a>
        </div>
      </div>
   </div>
</div>
</template>

<script>
export default {
  name: 'topic',
  data(){
    return{
  }
  }
}

</script>

<style scoped lang="less">
.shop-topic{
  width: 100%;
  padding: 0 10/50rem;
  box-sizing: border-box;
  .topic-list{
    margin-top: 0.1rem;
    .topic-image{
      overflow: hidden;
      box-shadow:0px 0px 20px 1px #ccc;
      &>img{
        width:355/50rem;
        hieght:3rem;
        float: left;
      }
    }
    .user{
      overflow: hidden;
      margin-top: 10/50rem;
      .user-left{
              float: left;
        width: 100px;
              &>img{
                float: left;
                width:26/50rem;
                hieght:26/50rem;
                margin-right: 10/50rem;
              }
              &>p{
                 margin-top: 7/50rem;
                 color:#c1c1c1;
              }
      }
      .user-right{
        float: right;
        &>a{
          position: relative;
          display: block;
          margin-top: 8/50rem;
          &:before{
            content: "";
            width:20/50rem;
            height:20/50rem;
            background: url(../../../../assets/home-images/topic.png);
            background-size: 20/50rem 20/50rem;
            position: absolute;
            top: -0.1rem;
            left:-0.5rem;
          }
        }
      }
    }
  }
}
</style>