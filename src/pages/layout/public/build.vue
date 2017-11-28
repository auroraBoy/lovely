<template>
  <div class="build">
    <div class="box-up">

      <!-- <img src="../../assets/erji/banner/images/search_03.png"> -->
      <!-- <form action='' onsubmit="return false;" class="form-box"> -->

        <!-- <input type="text" name="" placeholder="请输入要搜索的内容" class="search" ref="input1"  @keyup.enter="send2"> -->
      <!-- </form> -->
      <router-link :to="{path:'/public'}">
      <input type="submit" name="" value="取消" class="submit " @click="cancel">
      </router-link>
      <input type="submit" name="" value="发送" class="submit build" @click="cancel">

    </div>
    <div class="box-mid">

      <div class="box-mid-con">
        <textarea placeholder="这一刻的想法..." autofocus>
          
        </textarea>
                  
                 <!-- action="https://jsonplaceholder.typicode.com/posts/"    -->
                 <!-- :auto-upload="false" -->
      <div>
         <el-upload
          action="https://localhost:8080/src/assets/upload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          
          :multiple="false"
          >
          <i class="el-icon-plus"></i>
        </el-upload>
        </div>
      </div>



        <!-- <span><router-link exact :to="{path:topicPath}">话题</router-link></span>
        <span><router-link :to="{path:productPath}">产品</router-link></span>
        <span><router-link :to="{path:usersPath}">用户</router-link></span>
        <router-view></router-view> -->
        
      </div>
      
    </div>
  </div>
</template>

<script>



export default {
  name: 'build',
  data () {
    return {
      joinPath:"/public/join",
      launchPath:"/public/launch",
      flag:true,
      input1:"",
      tag:""
    }
  },
    methods: {
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
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
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

.build{
    background:#fff;
    .box-up{
      height:60/50rem;
      background:#ff406f;
      padding-top:30/50rem;
      // padding-left:10/50rem;
      position:relative;
      
      .submit{
          color:#ff406f;
          background:#fff;
          border:none; 
          height:24/50rem; 
          width:53/50rem;
          font-size:14/50rem;
          line-height:0.5rem;
          margin-left:10/50rem;
          text-align: center;
      }
      .build{
          color:#ff406f;
          background:#fff;
          border:none; 
          height:24/50rem; 
          width:53/50rem;
          font-size:14/50rem;
          line-height:0.5rem;
          // margin-left:40/50rem;
          text-align: center;
          position:absolute;
          top: 0.6rem;
          right: 0.2rem;
      }

    } 
    .box-mid{
      height:595/50rem;
      overflow: scroll;
      width:100%;
      margin:0 auto;
      .box-mid-con{
        height: 5rem;
        width:100%;
        margin-top: 0.2rem;
        box-shadow: 0 0 0.2rem #ccc;
        padding: 0 0.2rem;
        box-sizing: border-box;
        textarea{
          border: none;
          outline: none;
          height: 70/50rem;
          width: 100%;
          font-size: 18/50rem;
          resize: none;
        }
      }
  }

}


 

</style>