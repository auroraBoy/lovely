<template>
  <div class="topic">
     <div class="box-mid">
      <img src="../../../../assets/main/index/images/index2.png">
      <p>春季护肤应该注意哪几点?</p>
    </div>
    <div class="box-mid">
      <img src="../../../../assets/main/index/images/index2.png">
      <p>春季护肤应该注意哪几点?</p>
    </div>
  </div>
</template>

<script>



export default {
  name: 'topic',
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

.topic{
  background:#fff;
  .box-mid{
    margin-bottom: 0.4rem;

 
      
    &>img{
      width:94%;
      margin:0.2rem 0 0 0.2rem;
    }
    &>p{
      width:94%;
      margin:0.2rem auto;
    }

   

  } 
}

 

</style>

