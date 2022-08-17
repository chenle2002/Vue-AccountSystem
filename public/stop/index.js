import Vue from "vue";

Vue.directive('prevent-right', {

    bind: function (el, binding, vnode) {

        // 禁用右键

        el.oncontextmenu = function (event) {

            event.preventDefault(); // 阻止默认事件行为

            return false

        }

        // 禁用选择

        el.onselectstart = function (event) {

            event.preventDefault(); // 阻止默认事件行为

            return false

        }

        //禁止F12

        window.onkeydown = window.onkeyup = window.onkeypress  = function (event) {

            // 判断是否按下F12，F12键码为123

            if (event.keyCode == 123) {

                event.preventDefault(); // 阻止默认事件行为

                return false;

            }

        }

    }

})
