<template>
  <div>
    <Fans/>
   </div>
</template>

<script>
import Fans from "./fans"
  export default {
    name: 'attention',
    data () {
      return {
        flag:false
      }
    },
    components:{
     Fans
    }
  }
</script>

<style scoped lang="less">


</style>