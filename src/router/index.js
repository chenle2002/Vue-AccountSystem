//该文件专门用于创建整个应用的路由器

import VueRouter from "vue-router";
import login from "@/components/login";
import home from "@/pages/home";
import Administor from "@/pages/Administor";
import BOMDailyRevenue from "@/pages/BOMDailyRevenue";
import OperatorStatistics from "@/pages/OperatorStatistics";
import RechargeDetails from "@/pages/RechargeDetails";
import ReconcileTotals from "@/pages/ReconcileTotals";
import CardSalesSchedule from "@/pages/CardSalesSchedule";
import Reconciliation from "@/pages/Reconciliation";
import ReturnCardSchedule from "@/pages/ReturnCardSchedule";
import RevenueSummaryDailyStatement from "@/pages/RevenueSummaryDailyStatement";
import SwipeTransactionSchedule from "@/pages/SwipeTransactionSchedule";
import HeaderTop from "@/components/HeaderTop";
import AsideLeft from "@/components/AsideLeft";

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


//创建并默认暴露一个路由器
const router = new VueRouter({
    routes: [
        {
            path: 'HeaderTop',
            component: HeaderTop
        },
        {
            path: 'AsideLeft',
            component: AsideLeft
        },
        {
            name: '/',
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/home',
            component: home,
            redirect: '/home/Administor',
            children: [
                {
                    name: 'Administor',
                    path: 'Administor',
                    component: Administor
                },
                {
                    name: 'BOMDailyRevenue',
                    path: 'BOMDailyRevenue',
                    component: BOMDailyRevenue,
                },
                {
                    name: 'OperatorStatistics',
                    path: 'OperatorStatistics',
                    component: OperatorStatistics,
                },

                {
                    name: 'RechargeDetails',
                    path: 'RechargeDetails',
                    component: RechargeDetails,
                },
                {
                    name: 'ReconcileTotals',
                    path: 'ReconcileTotals',
                    component: ReconcileTotals,
                },
                {
                    name: 'CardSalesSchedule',
                    path: 'CardSalesSchedule',
                    component: CardSalesSchedule,
                },
                {
                    name: 'Reconciliation',
                    path: 'Reconciliation',
                    component: Reconciliation,
                },
                {
                    name: 'ReturnCardSchedule',
                    path: 'ReturnCardSchedule',
                    component: ReturnCardSchedule,
                },
                {
                    name: 'RevenueSummaryDailyStatement',
                    path: 'RevenueSummaryDailyStatement',
                    component: RevenueSummaryDailyStatement,
                },
                {
                    name: 'SwipeTransactionSchedule',
                    path: 'SwipeTransactionSchedule',
                    component: SwipeTransactionSchedule,
                },

            ]
        },
    ]
});

export default router;
