<template>
  <main>
    <div class="dashboard-container" id="member-app">
      <div class="container">

        <el-table :data="tableData" stripe class="tableBox">
          <el-table-column prop="name" label="员工姓名"></el-table-column>
          <el-table-column prop="username" label="账号"></el-table-column>
          <el-table-column prop="phone" label="手机号"></el-table-column>
          <el-table-column prop="status" label="账号状态">
            <template slot-scope="scope">
              <el-switch v-model="scope.row.status"
                         active-color="#13ce66"
                         inactive-color="#ff4949" @change="userStateChange(scope.row)">
              </el-switch>
            </template>
          </el-table-column>

        </el-table>
        <el-pagination
            class="pageList"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="counts"
            :current-page.sync="page"
        ></el-pagination>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Administor',
  data() {
    return {
      input: "",
      counts: 0,
      page: 1,
      pageSize: 10,
      tableData: [],
      id: "",
      status: "",
      value: true
    };
  },
  methods: {
    //监听switch开关状态的改变
    userStateChange(userinfo) {
      console.log(userinfo);
      console.log(userinfo.status);
      this.axios.get('/employee/changestatus', {
            params: {
              username: userinfo.username,
              status: userinfo.status
            }
          }
      ).then(res => {
        if (res.data.data.status != 1) {
          userinfo.mg_state = !userinfo.mg_state;//操作失败状态恢复
          return this.$message.error('更新用户状态失败！');
        }
      }).catch(() => {
        this.$message.success('更新用户状态成功！');
      })

    }
  },
  mounted() {
    axios.get("/employee/page")
        .then((res) => {
          const table = res.data.data
          table.forEach((item) => {
            if (item.status === 1) {
              item.status = true
            } else {
              item.status = false

            }
          })
          this.tableData = table;
          this.counts = res.data.data.total;
        })
        .catch();
  }
};
</script>

<style>
.dashboard-container {
  padding: 20px;
}

.dashboard-container .container {
  background: #fff;
  position: relative;
  z-index: 1;
  padding: 30px 28px;
  border-radius: 4px;
}

.dashboard-container .container .tableBar {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
}

.dashboard-container .container .tableBox {
  width: 100%;
  border: solid 2px #f3f4f7;
  border-radius: 2px;
}

.dashboard-container .container .tableBox .el-image img {
  width: 40px;
  border-radius: 5px;
}

.dashboard-container .container .pageList {
  text-align: center;
  margin-top: 30px;
}

.dashboard-container .container .tableLab .span-btn {
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  padding: 0 20px;
  color: #818693;
  border-right: solid 1px #d8dde3;
}

.dashboard-container .container .tableLab .el-button {
  margin-left: 10px;
}

.el-table-column--selection .cell {
  padding-left: 10px;
}

/* 添加 */
.addBrand-container .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.addBrand-container .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.addBrand-container .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 200px;
  height: 160px;
  line-height: 160px;
  text-align: center;
}

.addBrand-container .avatar {
  width: 160px;
  height: 160px;
  display: block;
}

.addBrand-container .el-form--inline .el-form-item__content {
  width: 293px;
}

.addBrand-container .el-input {
  width: 293px;
}

.addBrand-container {
  margin: 30px;
}

.addBrand-container .container {
  position: relative;
  z-index: 1;
  background: #fff;
  padding: 30px;
  border-radius: 4px;
  min-height: 500px;
}

.addBrand-container .container .subBox {
  padding-top: 30px;
  text-align: center;
  border-top: solid 1px #f3f4f7;
}

.flavorBox {
  width: 777px;
}

.flavorBox .addBut {
  background: #ffc200;
  display: inline-block;
  padding: 0px 20px;
  border-radius: 3px;
  line-height: 40px;
  cursor: pointer;
  border-radius: 4px;
  color: #333333;
  font-weight: 500;
}

.flavorBox .flavor {
  border: solid 1px #dfe2e8;
  border-radius: 3px;
  padding: 15px;
  background: #fafafb;
}

.flavorBox .flavor .title {
  color: #606168;
}

.flavorBox .flavor .cont .items {
  display: flex;
  margin: 10px 0;
}

.flavorBox .flavor .cont .items .itTit {
  width: 150px;
  margin-right: 15px;
}

.flavorBox .flavor .cont .items .itTit input {
  width: 100%;
  line-height: 40px;
  border-radius: 3px;
  padding: 0 10px;
}

.flavorBox .flavor .cont .items .labItems {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  border-radius: 3px;
  min-height: 39px;
  border: solid 1px #d8dde3;
  background: #fff;
  padding: 0 5px;
}

.flavorBox .flavor .cont .items .labItems span {
  display: inline-block;
  color: #f19c59;
  margin: 5px;
  line-height: 26px;
  height: 26px;
  padding: 0 10px;
  background: #fdf4eb;
  border-radius: 3px;
  border: solid 1px #fae2cd;
}

.flavorBox .flavor .cont .items .labItems span i {
  cursor: pointer;
  font-style: normal;
}

.flavorBox .flavor .cont .items .labItems .inputBox {
  display: inline-block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  overflow: hidden;
}

.flavorBox .flavor .cont .items .delFlavor {
  display: inline-block;
  padding: 0 10px;
  color: #f19c59;
  cursor: pointer;
}

.addBrand-container .address .el-form-item__content {
  width: 777px !important;
}

.el-button--text {
  font-weight: 400 !important;
  font-size: 13px !important;
}

.el-table td {
  font-size: 13px !important;
}

.el-table .cell,
.el-table th div,
.el-table--border td:first-child .cell,
.el-table--border th:first-child .cell {
  padding-left: 12px;
}
</style>
