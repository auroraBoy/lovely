<template>
  <div class="article">
      <Heads/>
      <div class="active-warp">
       <Active/>
       </div>
  </div>
    
</template>

<script>
import Active from './active'
import Heads from '../common/heads'
export default {
  name: 'article',
  data(){
    return{
     
      }
  },
  components:{
    Heads,
  	Active
  },
  methods:{
   
  }
}

</script>

<style scoped lang="less">
  .article{
    width: 100%;
    height: 14rem;
    background: #fff;
  &>.active-warp{
   margin-top:-80/50rem;
  }
  }
</style>