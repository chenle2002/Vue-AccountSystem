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
              worksheet="对账异常表"
          >
            <el-button icon="el-icon-download">导出为Excel</el-button>
          </download-excel>
        </div>
        <br />

        <template align="center">
          <el-table
              :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)" style="width: 100%">
            }

            <el-table-column align="center" label="对账表" width="250">
              <el-table-column
                  align="center"
                  prop="xuhao"
                  label="序号"
                  width="60"
              >
              </el-table-column>
              <el-table-column
                  align="center"
                  prop="shuanghudingdanhao"
                  label="商户订单号"
                  width="180"
              >
              </el-table-column>

              <el-table-column
                  align="center"
                  sortable
                  prop="jiaoyishijian"
                  label="交易时间"
                  width="180"
              >
              </el-table-column>


              <el-table-column
                  align="center"
                  label="邮储支付明细"
                  width="120"
              >
                <el-table-column
                    align="center"
                    prop="yzhifufangshiString"
                    label="支付方式"
                    width="100"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="yzhifuzhuangtaitring"
                    label="支付状态"
                    width="100"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="yzhongjine"
                    label="总金额"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="ytuikuanshangjiadindanhao"
                    label="退款商户订单号"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="ytuikuanzhuantaiString"
                    label="退款状态"
                    width="100"
                >
                </el-table-column>
              </el-table-column>


              <el-table-column
                  align="center"
                  label="系统支付明细"
                  width="120"
              >
                <el-table-column
                    align="center"
                    prop="xzhifufangshiString"
                    label="支付方式"
                    width="100"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="xzhifuzhuangtaitring"
                    label="支付状态"
                    width="100"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="xzhongjine"
                    label="总金额"
                    width="120"
                >
                </el-table-column>
              </el-table-column>


              <el-table-column
                  align="center"
                  label="交易明细"
                  width="120"
              >
                <el-table-column
                    align="center"
                    prop="jiaoyijie"
                    label="交易金额"
                    width="120"
                >
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="jiaoyiliushuihao"
                    label="交易流水号"
                    width="119"
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
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Reconciliation',
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
        "序号":"xuhao",
        "商户订单号": "shuanghudingdanhao",
        "交易时间": "jiaoyishijian",
        "邮储支付明细-支付方式":  "yzhifufangshiString",
        "邮储支付明细-支付状态":  "yzhifuzhuangtaitring",
        "邮储支付明细-总金额": "yzhongjine",
        "邮储支付明细-退款商户订单号": "ytuikuanshangjiadindanhao",
        "邮储支付明细-退款状态":  "ytuikuanzhuantaiString",

        "系统支付明细-支付方式":  "xzhifufangshiString",
        "系统支付明细-支付状态": "xzhifuzhuangtaitring",
        "系统支付明细-总金额": "xzhongjine",

        "交易明细-交易金额":  "jiaoyijie",
        "交易明细-交易流水号":  "jiaoyiliushuihao",
      },
      exportName: "对账异常表",
      exportHeader: ["对账异常表"]
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
      this.axios.get('/Reconciliation/list',{
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
    this.axios.get('/Reconciliation/list',{
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


