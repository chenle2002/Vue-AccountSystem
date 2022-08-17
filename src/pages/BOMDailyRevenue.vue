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
              worksheet="BOM营收日报表 - 现金系统运营统计表"
          >
            <el-button icon="el-icon-download">导出为Excel</el-button>
          </download-excel>
        </div>


        <br>

        <template align="center">
          <el-table
              :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)" style="width: 100%">
            }

            <el-table-column align="center" label="BOM营收日报表 - 现金系统运营统计表" width="250">

              <el-table-column
                  align="center"
                  prop="xuhao"
                  label="序号"
                  width="70"
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
                  prop="shebeibianhao"
                  label="设备编号"
                  width="120"
              >
              </el-table-column>

              <el-table-column
                  align="center"
                  prop="heji"
                  label="合计"
                  width="120"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  label="储值卡"
                  width="120"
              >
                <el-table-column
                    align="center"
                    prop="cfashoushu"
                    label="售卡张数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="cyajin"
                    label="售卡押金"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="cchongzhicishu"
                    label="充值次数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="cchongzhijine"
                    label="充值金额"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="ctuikashu"
                    label="退卡张数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="ctuikuanyajin"
                    label="退款金额"
                    width="120"
                >
                </el-table-column>
              </el-table-column>


              <el-table-column
                  align="center"
                  label="普通卡"
                  width="120"
              >
                <el-table-column
                    align="center"
                    prop="pfashoushu"
                    label="售卡张数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="pyajin"
                    label="售卡押金"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="pchongzhicishu"
                    label="充值次数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="pchongzhijine"
                    label="充值金额"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="ptuikashu"
                    label="退卡张数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="ptuikuanyajin"
                    label="退款金额"
                    width="120"
                >
                </el-table-column>
              </el-table-column>


              <el-table-column
                  align="center"
                  label="学生卡"
                  width="315"
              >
                <el-table-column
                    align="center"
                    prop="xfashoushu"
                    label="售卡张数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="xyajin"
                    label="售卡押金"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="xchongzhicishu"
                    label="充值次数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="xchongzhijine"
                    label="充值金额"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="xtuikashu"
                    label="退卡张数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="xtuikuanyajin"
                    label="退款金额"
                    width="120"
                >
                </el-table-column>
              </el-table-column>


              <el-table-column
                  align="center"
                  label="关爱卡"
                  width="120"
              >
                <el-table-column
                    align="center"
                    prop="afashoushu"
                    label="售卡张数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="ayajin"
                    label="售卡押金"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="achongzhicishu"
                    label="充值次数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="achongzhijine"
                    label="充值金额"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="atuikashu"
                    label="退卡张数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="atuikuanyajin"
                    label="退款金额"
                    width="120"
                >
                </el-table-column>
              </el-table-column>


              <el-table-column
                  align="center"
                  label="计次卡"
                  width="120"
              >
                <el-table-column
                    align="center"
                    prop="jfashoushu"
                    label="售卡张数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="jyajin"
                    label="售卡押金"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="jchongzhicishu"
                    label="充值次数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="jchongzhijine"
                    label="充值金额"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="jtuikashu"
                    label="退卡张数"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="jtuikuanyajin"
                    label="退款金额"
                    width="120"
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
  name: 'BOMDailyRevenue',
  data() {
    return {
      // 默认显示第几页
      currentPage: 1,
      // 总条数，根据接口获取数据长度(注意：这里不能为空)
      totalCount: 10,
      // 个数选择器（可修改）
      pageSizes: [5, 6, 7, 8, 9, 10],
      // 默认每页显示的条数（可修改）
      PageSize: 5,
      tableData: [],
      params: {
        startTime: '2000-1-1',
        endTime: '2022-6-11',
        date: ''
      },
      exportDataStandard: {
        "序号": "xuhao",
        "充值点": "chongzhidian",
        "设备编号": "shebeibianhao",
        "合计": "heji",
        "储值卡-售卡张数": "cfashoushu",
        "储值卡-售卡押金": "cyajin",
        "储值卡-充值次数": "cchongzhicishu",
        "储值卡-充值金额": "cchongzhijine",
        "储值卡-退卡张数": "ctuikashu",
        "储值卡-退款金额": "ctuikuanyajin",

        "普通卡-售卡张数": "pfashoushu",
        "普通卡-售卡押金": "pyajin",
        "普通卡-充值次数": "pchongzhicishu",
        "普通卡-充值金额": "pchongzhijine",
        "普通卡-退卡张数": "ptuikashu",
        "普通卡-退款金额": "ptuikuanyajin",

        "学生卡-售卡张数": "xfashoushu",
        "学生卡-售卡押金": "xyajin",
        "学生卡-充值次数": "xchongzhicishu",
        "学生卡-充值金额": "xchongzhijine",
        "学生卡-退卡张数": "xtuikashu",
        "学生卡-退款金额": "xtuikuanyajin",

        "关爱卡-售卡张数": "afashoushu",
        "关爱卡-售卡押金": "ayajin",
        "关爱卡-充值次数": "achongzhicishu",
        "关爱卡-充值金额": "achongzhijine",
        "关爱卡-退卡张数": "atuikashu",
        "关爱卡-退款金额": "atuikuanyajin",

        "计次卡-售卡张数": "jfashoushu",
        "计次卡-售卡押金": "jyajin",
        "计次卡-充值次数": "jchongzhicishu",
        "计次卡-充值金额": "jchongzhijine",
        "计次卡-退卡张数": "jtuikashu",
        "计次卡-退款金额": "jtuikuanyajin",
      },
      exportName: "BOM营收日报表 - 现金系统运营统计表",
      exportHeader: ["BOM营收日报表 - 现金系统运营统计表"],
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
      this.axios.get('/BOMDailyRevenue/list', {
        params: {
          start: this.params.startTime,
          end: this.params.endTime
        }
      }).then((response) => {
        this.tableData = response.data.data
        this.totalCount = response.data.data.length
      })
          .catch()
    },
    handleSizeChange(val) {
      // 改变每页显示的条数
      this.PageSize = val
      // 注意：在改变每页显示的条数时，要将页码显示到第一页
      this.currentPage = 1
    },
    // 显示第几页
    handleCurrentChange(val) {
      // 改变默认的页数
      this.currentPage = val
    },
  },

  mounted() {
    this.axios.get('/BOMDailyRevenue/list', {
      params: {
        start: this.params.startTime,
        end: this.params.endTime
      }
    })
        .then((res) => {
          this.tableData = res.data.data
          this.totalCount = res.data.data.length
        })
        .catch()
  },

}
</script>


