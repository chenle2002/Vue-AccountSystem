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
              worksheet="营收汇总日报表"
          >
            <el-button icon="el-icon-download">导出为Excel</el-button>
          </download-excel>
        </div>
        <br />

        <template align="center">
          <el-table
              :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)" style="width: 100%">
            }

            <el-table-column align="center" label="营收汇总日报表" width="250">
              <el-table-column
                  align="center"
                  prop="xuhao"
                  label="序号"
                  width="70"
              >
              </el-table-column>
              <el-table-column
                  align="center"
                  prop="date"
                  label="日期"
                  width="40"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  label="公众号"
                  width="60"
              >
                <el-table-column
                    align="center"
                    prop="gshoupiao"
                    label="售票"
                    width="90"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="gxiaofei"
                    label="消费"
                    width="90"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="gdangrituikuan"
                    label="当日退款"
                    width="40"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="gdaituikuan"
                    label="待退款"
                    width="40"
                >
                </el-table-column>
              </el-table-column>


              <el-table-column
                  align="center"
                  label="自动售票机"
                  width="60"
              >
                <el-table-column
                    align="center"
                    prop="zxianjinyajin"
                    label="现金押金"
                    width="89"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="zxianjincongzhi"
                    label="现金充值"
                    width="90"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="zdianzizhifuyajin"
                    label="电子支付押金"
                    width="50"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="zdianzizhifucongzhi"
                    label="电子支付充值"
                    width="50"
                >
                </el-table-column>
              </el-table-column>


              <el-table-column
                  align="center"
                  label="人工售票系统"
                  width="150"
              >
                <el-table-column
                    align="center"
                    prop="rxianjinyajin"
                    label="现金押金"
                    width="50"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="rxianjincongzhi"
                    label="现金充值"
                    width="50"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="rdianzizhifuyajin"
                    label="电子支付押金"
                    width="50"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="rdianzizhifucongzhi"
                    label="电子支付充值"
                    width="50"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="rtuikuanyajin"
                    label="退款押金"
                    width="80"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="rtuikuanjine"
                    label="退款余额"
                    width="80"
                >
                </el-table-column>
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="shouchiyanpianjishoupiao"
                  label="手持验票机售票"
                  width="60"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="jinrongPOSji"
                  label="金融POS机"
                  width="60"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="gudingerweima"
                  label="固定二维码"
                  width="60"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="cezaiqianxiang"
                  label="车载钱箱"
                  width="60"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="xianjinshouru"
                  label="现金收入（含押金）"
                  width="90"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="feixianjinshouru"
                  label="非现金收入"
                  width="90"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  prop="zongji"
                  label="合计"
                  width="90"
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
  name:'RevenueSummaryDailyStatement',
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
        "日期": "date",

        "公众号-售票":  "gshoupiao",
        "公众号-消费":  "gxiaofei",
        "公众号-当日退款":  "gdangrituikuan",
        "公众号-待退款":  "gdaituikuan",

        "自动售票机-现金押金":  "zxianjinyajin",
        "自动售票机-现金充值":  "zxianjincongzhi",
        "自动售票机-电子支付押金":  "zdianzizhifuyajin",
        "自动售票机-电子支付充值":  "zdianzizhifucongzhi",

        "人工售票系统-现金押金":  "rxianjinyajin",
        "人工售票系统-现金充值":  "rxianjincongzhi",
        "人工售票系统-电子支付押金":  "rdianzizhifuyajin",
        "人工售票系统-电子支付充值":  "rdianzizhifucongzhi",
        "人工售票系统-退款押金":  "rtuikuanyajin",
        "人工售票系统-退款余额":  "rtuikuanjine",

        "手持验票机售票":  "shouchiyanpianjishoupiao",
        "金融POS机":  "jinrongPOSji",
        "固定二维码":  "gudingerweima",
        "车载钱箱":  "cezaiqianxiang",
        "现金收入（含押金）":  "xianjinshouru",
        "非现金收入":  "feixianjinshouru",
        "合计":  "zongji",
      },
      exportName: "营收汇总日报表",
      exportHeader: ["营收汇总日报表"]
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
      this.axios.get('/RevenueSummaryDailyStatement/list',{
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
  created(){
    this.axios.get('/RevenueSummaryDailyStatement/list',{
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


