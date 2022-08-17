<template>
  <main>
    <div class="dashboard-container" id="food-app">
      <div class="container">
        <div style="width: 20%">
          <div class="block">
            <el-date-picker
                v-model="params.date"
                type="daterange"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="dateFormat"
            >
            </el-date-picker>
          </div>
        </div>

        <br>

        <div style="width: 1%">
          <download-excel
              :fields="exportDataStandard"
              :data="tableData"
              type="xls"
              :name="exportName"
              :header="exportHeader"
              :fetch="createExportData"
              :before-generate="startDownload"
              :before-finish="finishDownload"
              worksheet="充值明细表"
          >
            <el-button icon="el-icon-download">导出为Excel</el-button>
          </download-excel>
        </div>
        <br />

        <template align="center">
          <el-table
              :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)" style="width: 100%">
            }

            <el-table-column align="center" label="充值明细表" width="250">
              <el-table-column
                  align="center"
                  prop="xuhao"
                  label="序号"
                  width="60"
              >
              </el-table-column>

              <el-table-column
                  align="center"
                  prop="jiaoyiliushuihao"
                  label="交易流水号"
                  width="180"
              >
              </el-table-column>

              <el-table-column
                  align="center"
                  prop="jiaoyileixingString"
                  label="交易类型"
                  width="80"
              >
              </el-table-column>

              <el-table-column
                  align="center"
                  prop="kahao"
                  label="卡号"
                  width="120"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="fakajigou"
                  label="发卡机构"
                  width="180"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="piaokaleixingString"
                  label="票卡类型"
                  width="80"
              >
              </el-table-column>

              <el-table-column
                  align="center"
                  prop="chongzhishijian"
                  label="充值时间"
                  width="200"
              >
              </el-table-column>

              <el-table-column
                  align="center"
                  prop="chongzhiqianyue"
                  label="充值前余额"
                  width="120"
              >
              </el-table-column>

              <el-table-column
                  align="center"
                  prop="chongzhijine"
                  label="充值金额"
                  width="120"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="youhuijine"
                  label="优惠金额"
                  width="120"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="chongzhidian"
                  label="充值点"
                  width="80"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="caozuoyuna"
                  label="微信未退款总金额"
                  width="179"
              >
              </el-table-column>




            </el-table-column>
          </el-table>
          <div class="tabListPage">
            <el-pagination @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage"
                           :page-sizes="pageSizes"
                           :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper"
                           :total="totalCount">
            </el-pagination>
          </div>


        </template>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name:'RechargeDetails',
  data() {
    return {
      // 默认显示第几页
      currentPage:1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount:10,
      // 个数选择器（可修改）
      pageSizes:[5,6,7,8,9,10],
      // 默认每页显示的条数（可修改）
      PageSize:5,
      tableData:[],
      params: {
        startTime: '2000-1-1',
        endTime: '2022-6-11',
        date: ''
      },
      exportDataStandard: {
        "序号": "xuhao",
        "交易流水号": "jiaoyiliushuihao",
        "交易类型":  "jiaoyileixingString",
        "卡号":  "kahao",

        "发卡机构": "fakajigou",
        "票卡类型": "piaokaleixingString",
        "充值时间":  "chongzhishijian",
        "充值前余额":  "chongzhiqianyue",

        "充值金额": "chongzhijine",
        "优惠金额": "youhuijine",
        "充值点":  "chongzhidian",
        "操作员":  "caozuoyuna",
      },
      exportName: "充值明细表",
      exportHeader: ["充值明细表"]
    };
  },
  methods: {
    createExportData() {
      return this.tableData
    },
    startDownload() {
      console.log("数据开始")
    },
    finishDownload() {
      console.log("数据下载完成")
    },
    dateFormat(picker) {
      this.params.startTime = picker[0].toString()
      this.params.endTime = picker[1].toString()
      this.axios.get('/RechargeDetails/list',{
        params :{
          start : this.params.startTime,
          end : this.params.endTime
        }
      }).then((response)=>{
        this.tableData = response.data.data
        this.totalCount=response.data.data.length
      }).catch()
    },
    handleSizeChange(val) {
      // 改变每页显示的条数
      this.PageSize=val
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage=1
    },
    // 显示第几页
    handleCurrentChange(val) {
      // 改变默认的页数
      this.currentPage=val
    },
  },
  created() {
    this.axios.get('/RechargeDetails/list',{
      params :{
        start : this.params.startTime,
        end : this.params.endTime
      }

    })
        .then((res)=>{
          this.tableData = res.data.data
          this.totalCount=res.data.data.length
        })
        .catch()
  }
}
</script>


