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
              type="xls"
              :name="exportName"
              :header="exportHeader"
              :fetch="createExportData"
              :before-generate="startDownload"
              :before-finish="finishDownload"
              worksheet="操作员统计表"
          >
            <el-button icon="el-icon-download">导出为Excel</el-button>
          </download-excel>
        </div>
        <br />

        <template align="center">
          <el-table
              :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)" style="width: 100%">
            }

            <el-table-column align="center" label="操作员统计表" width="250">
              <el-table-column
                  align="center"
                  prop="xuhao"
                  label="序号"
                  width="78"
              >
              </el-table-column>

              <el-table-column
                  align="center"
                  prop="date"
                  label="时间"
                  width="240"
              >
              </el-table-column>

              <el-table-column
                  align="center"
                  prop="chongzhidian"
                  label="充值点"
                  width="120"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="caozuoyuan"
                  label="操作员"
                  width="120"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  label="总计"
                  width="120"
              >
                <el-table-column
                    align="center"
                    prop="zcishu"
                    label="次数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="zjine"
                    label="金额"
                    width="120"
                >
                </el-table-column>
              </el-table-column>


              <el-table-column
                  align="center"
                  label="售卡"
                  width="120"
              >
                <el-table-column
                    align="center"
                    prop="scishu"
                    label="次数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="sjine"
                    label="金额"
                    width="120"
                >
                </el-table-column>
              </el-table-column>



              <el-table-column
                  align="center"
                  label="充值"
                  width="120"
              >
                <el-table-column
                    align="center"
                    prop="ccishu"
                    label="次数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="cjine"
                    label="金额"
                    width="120"
                >
                </el-table-column>
              </el-table-column>



              <el-table-column
                  align="center"
                  label="退卡"
                  width="120"
              >
                <el-table-column
                    align="center"
                    prop="tcishu"
                    label="次数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="tjine"
                    label="金额"
                    width="121"
                >
                </el-table-column>
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
  name:'OperatorStatistics',
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
        "时间": "date",
        "充值点":  "chongzhidian",
        "操作员":  "caozuoyuan",

        "总计-次数": "zcishu",
        "总计-金额": "zjine",
        "售卡-次数": "scishu",
        "售卡-金额": "sjine",

        "充值-次数": "ccishu",
        "充值-金额": "cjine",
        "退卡-次数": "tcishu",
        "退卡-金额": "tjine",
      },
      exportName: "操作员统计表",
      exportHeader: ["操作员统计表"]
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
      this.axios.get('/OperatorStatistics/list',{
        params :{
          start : this.params.startTime,
          end : this.params.endTime
        }
      }).then((response)=>{
        this.tableData = response.data.data
      })
          .catch()
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
  created () {
    this.axios.get('/OperatorStatistics/list',{
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
  },
}
</script>


