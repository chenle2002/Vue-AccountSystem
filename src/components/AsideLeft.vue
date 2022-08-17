<template>
  <el-menu
      class="sidebar-el-menu"
      :default-active="toIndex()"
      background-color="rgba(255, 255, 255, 0.52)"
      text-color="#7a8297"
      active-text-color="#2d8cf0"
      router
  >
    <div>
      <el-submenu :index="index + ''" v-for="(list, index) in listmenu" :key="list.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ list.title }}</span>
        </template>
        <template v-for="item in list.children" class="el-menu-item">
          <el-menu-item :index="item.index" @click="changerouter(item.index)" :key="item.id" v-if="item">
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
    </div>
  </el-menu>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'AsideLeft',
  props: ['listmenu'],
  data() {
    return {};
  },
  methods: {
    // 根据路径绑定到对应的二级菜单，防止页面刷新重新跳回第一个
    toIndex() {
      return this.$route.path.split('/')[2];
    },
    changerouter(index) {
      this.$router.push(index)
    }
  },

}
</script>

<style scoped>

.sidebar-el-menu::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu {
  position: absolute;
  bottom: 0;
  overflow-y: scroll;
  width: 20%;
  height: 73%;
  background: rgba(255, 255, 255, 0.52) !important;
  border-radius: 20px;
  font-size: 14px;
  left: 5%;
  top: 19%;
}

.sidebar > ul {
  height: 100%;
}

/* 左侧二级菜单项的样式 */
.el-menu-item {
  font-size: 14px !important;
  padding-left: 35px !important;
  color: black !important;
  background: rgba(255, 255, 255, 0.52) !important;

}


/* 左侧二级菜单选中时的样式 */
.el-menu-item.is-active {
  color: white !important;
  background: #3989fa !important;
}

.el-menu-item,
.el-submenu__title {
  height: 50px !important;
  line-height: 50px !important;
}
</style>


