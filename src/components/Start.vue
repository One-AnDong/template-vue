<template lang="pug">
  .xitom
    //- 头部
    .xitom__head {{ title }}
    //- 主体
    .xitom__main
      img(:src="img")
    //- 底部
    .xitom__foot {{ github }}

</template>
<script>
export default {
  name: 'Start',
  data: () => {
    return {
      title: 'vue模版(基于webpack开发构建)',
      img: require('img/logo.png'),
      github: 'https://github.com/One-AnDong'
    }
  }
}
</script>
<style lang="stylus" scoped >
.xitom
  height 100vh
  border 1px solid #000
  font-size 5vw
  text-align center
.xitom__head
  height 20vh
  line-height 20vh
.xitom__main
  height 60vh
  border-top 1px solid #000
  border-bottom 1px solid #000
  line-height 60vh
.xitom__foot
  height 20vh
  line-height 20vh
</style>
