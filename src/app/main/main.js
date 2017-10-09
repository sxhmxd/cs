export function MainController($state) {
    'ngInject';
    'use strict';

    let vm = this;
    // 第二入口文件
    vm.sousuo=false;
    vm.register=function(){
        $state.go('register');

    };
    // vm.focu=function(){
    //   vm.sousuo=true;
    // }

}
