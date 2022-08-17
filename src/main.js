import Vue from 'vue'
import App from './App.vue'


//使用axios
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
//设置全局访问路径
axios.defaults.baseURL = 'http://1.12.44.228:8433/api'

Vue.config.productionTip = false

//引入vue-router
import VueRouter from "vue-router";
import router from './router';
//应用vue-router插件
Vue.use(VueRouter);

//导入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)

//关闭Vue的生产提示
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render: h => h(App),
    router,

});
