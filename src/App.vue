<template>
  <div class="app" ref="box">
    <router-view/>
    <div class="star">
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  created() {
    document.onkeydown = function () {
      var e = window.event || arguments[0];
      if (e.keyCode == 123) {
        alert('F12被我禁用了哦,但你可以去浏览器工具中打开！');
        return false;
      }
    },

        document.oncontextmenu = function () {
          alert('右键被禁用');
          return false;
        },
        window.L2Dwidget
            //此处是对点击人物时触发事件的监听
            .on('*', (name) => {

              console.log('%c 你点击了 ' + '%c -> ' + name, 'background: #222; color: yellow',
                  'background: #fff; color: #000')
            })
            //对人物的属性配置
            .init({
              pluginRootPath: '../live2dw/', //人物文件夹的位置
              pluginJsPath: 'lib/',
              pluginModelPath: 'live2d-widget-model-shizuku/assets/',
              model: {
                jsonPath: '../live2dw/live2d-widget-model-shizuku/assets/shizuku.model.json'
              },
              dialog: {
                enable: true, //是否开启对话框
                script: {
                  //每20s，显示一言（调用一言Api返回的句子）
                  'every idle 20s': '$hitokoto$',
                  //触摸到class='star'对象,将会展示的文字
                  'hover .star': '星星在天上而你在我心里 (*/ω＼*)',
                  //触摸到身体
                  'tap body': '害羞⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄)⁄',
                  //触摸到头部
                  'tap face': '~~'
                }
              },
              display: { //人物的属性配置
                position: 'right',
                width: 150,
                height: 300,
                hOffset: 50, // 横向偏移
                vOffset: 50 // 纵向偏移
              },
              mobile: {
                show: true, //是否在移动端展示
                scale: 0.5 //t透明度
              }

            });
  },
  beforeDestroy() {
    //移除动画人物
    document.querySelector('#live2d-widget').remove();
  }

}

</script>

<style>
/*.app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*}*/
</style>
