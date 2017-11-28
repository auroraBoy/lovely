<template>
  <div class="product">
    <ul>
      <li>
        <img src="../../../../assets/erji/banner/images/BANNER_21.png">
        <p>爽肤水</p>
        <p>最火</p>
      </li>
      <li>
        <img src="../../../../assets/erji/banner/images/BANNER_21.png">
        <p>润肤乳</p>
        <p>最火</p>
      </li>
    </ul>
  </div>
</template>

<script>



export default {
  name: 'product',
  data () {
    return {
      
    }
  },
    methods: {
      
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

// 25px   1rem = 50px;  0.5rem  
// 18px

// rem适合固定布局的形式
// 百分比 、 css3弹性盒子模型

.product{
  ul{
    li{
      height: 1.4rem;
      img{
        height: 42/50rem;
        width: 42/50rem;
        margin:0 15/50rem 0 42/50rem;
        float: left;
        }
        p{
          float: left;
          width: 4rem;
        }
        p:nth-child(2){
          font-size: 14/50rem;
          height: 30/50rem;
        }
        p:nth-child(3){
          font-size: 12/50rem;
        }
      }


    }
  } 


</style>

