export function CarController($localStorage, util) {
    'ngInject';
    'use strict';

    let vm = this;
    vm.myCart="";
    vm.myCart=function(cartName) {
                vm.cartName = cartName;
                vm.items = [];

                // 初始化时加载购物车
                vm.loadItems();
                //this.clearItems();
            }


}
