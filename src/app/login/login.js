export function LoginController($state) {
    'ngInject';
    'use strict';

    let vm = this;
    // 第二入口文件
    // 第二入口文件=
    vm.myVar=false;
    vm.toggle = function(){
        vm.myVar = !vm.myVar;
    };
   vm.smOut=function(){
    vm.myVar=false;
   };
   vm.subLogin = function(){
          var x=document.cookie;
          console.log(x);
        if(vm.user.name==x.username && vm.user.pwd==x.userpwd)
          {
                $state.go('main');
            }
  };

}
