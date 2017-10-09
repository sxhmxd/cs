export function RegisterController($state) {
    'ngInject';
    'use strict';

    let vm = this;

    vm.subRegister = function(){
        document.cookie="username=vm.uname;userpwd=vm.upwd";

        vm.uname=vm.userRegister.name;
        vm.upwd=vm.userRegister.pwd;
        console.log(vm.uname);
        console.log(vm.upwd);
         if(vm.userRegister.name!==null && vm.userRegister.pwd!==null)
           {
                 $state.go('login');
             }
          else {
            alert("请填写信息")
          };

   };

}
