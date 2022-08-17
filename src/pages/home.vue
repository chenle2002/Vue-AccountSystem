<template>
  <div class="chenle">
    <HeaderTop></HeaderTop>
    <AsideLeft :listmenu="listmenu"></AsideLeft>
    <div class="routerview">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import HeaderTop from "@/components/HeaderTop";
import AsideLeft from "@/components/AsideLeft";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  components: {HeaderTop, AsideLeft},
  data() {
    return {
      activeNames: ['1'],
      listmenu: [
        {
          title: '账号管理',
          children: [
            {index: 'Administor', title: '账号管理'},
          ]
        },
        {
          title: '明细表',
          children: [
            {index: 'RechargeDetails', title: '充值明细表'},
            {index: 'CardSalesSchedule', title: '售卡明细表'},
            {index: 'SwipeTransactionSchedule', title: '刷卡交易明细表'},
            {index: 'ReturnCardSchedule', title: '退卡明细表'}
          ]
        },
        {
          title: '日报表',
          children: [
            {index: 'RevenueSummaryDailyStatement', title: '营收汇总日报表'},
            {index: 'BOMDailyRevenue', title: 'BOM营收日报表-现金'},
          ]
        },
        {
          title: '对账表',
          children: [
            {index: 'Reconciliation', title: '对账异常表'},
            {index: 'ReconcileTotals', title: '对账总计表'},
          ]
        },
        {
          title: '操作员统计表',
          children: [
            {index: 'OperatorStatistics', title: '操作员统计表'},
          ]
        }
      ]
    }
  }
};

</script>
<style>
.chenle {
  background: url("../assets/img/back.png") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

.routerview {
  position: absolute;
  width: 73%;
  height: fit-content;
  left: 25%;
  top: 16%;
  opacity: 85%
}
</style>
