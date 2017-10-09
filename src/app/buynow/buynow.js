export function BuynowController(dataService) {
    'ngInject';
    'use strict';

    let vm = this;
    // 第二入口文件

  vm.fun=function(p){
      // 显示图片
        vm.userSelectArr=[];
      vm.img=p;
      // 获取商品的名字和价格
    dataService.addData().then(
      function(data){
          vm.info=data.data[p];
            vm.userSelectArr.push(vm.info);

      },
      function(error){
        console.log("获取数据失败");
      }
    );
    // 获取对应商品的版本
    dataService.Version(p).then(
      function(data){
        vm.version_info=[];
        vm.data=data.data;
        if (p==0) {
          vm.version_info.push(vm.data[0]);
          vm.version_info.push(vm.data[2]);
          vm.version_info.push(vm.data[1]);
          vm.Choose_version();
        }else if (p==1) {
          vm.version_info.splice(0,vm.version_info.length);
          vm.version_info.push(vm.data[3]);
          vm.version_info.push(vm.data[4]);
          vm.version_info.push(vm.data[8]);
          vm.Choose_version();

        }else if(p==2){
          vm.version_info.splice(0,vm.version_info.length);
          vm.version_info.push(vm.data[5]);
          vm.version_info.push(vm.data[6]);
          vm.version_info.push(vm.data[7]);
          vm.Choose_version();

        }

      },
      function(error){
        console.log("获取数据失败");
      }
    );
    // 获取对应商品的颜色
    vm.Choose_version = function(i){
      vm.userSelected =i;
      vm.userversion=vm.version_info[vm.userSelected];
    }
    dataService.color_info().then(
      function(data){
        vm.data=data.data;
        vm.color_info=[];


     if ( p==2 ) {
          // vm.color_info.splice(0,vm.color_info.length);
          vm.color_info.push(vm.data[4]);
          vm.color_info.push(vm.data[3]);
          vm.color_info.push(vm.data[5]);
          vm.Choose_color();
        }
        else {
          vm.color_info.push(vm.data[0]);
          vm.color_info.push(vm.data[1]);
          vm.color_info.push(vm.data[2]);
          vm.Choose_color();
          
        };

      },
      function(error){
        console.log("获取数据失败");
      }
    )
    // 选择完毕登录购买
};
vm.Choose_color = function(i){
  vm.Selected =i;
  vm.usercolor=vm.color_info[vm.Selected].name;



}

vm.fun1=function(p){
    // 显示图片
      vm.userSelectArr=[];
    vm.img=p;
    // 获取商品的名字和价格
  dataService.addData().then(
    function(data){
        vm.info=data.data[p];
          vm.userSelectArr.push(vm.info);

    },
    function(error){
      console.log("获取数据失败");
    }
  );
  // 获取对应商品的版本
  dataService.Version(p).then(
    function(data){

      vm.version_info=[];

      vm.data=data.data;


        vm.version_info.push(vm.data[0]);
        vm.version_info.push(vm.data[2]);
        vm.version_info.push(vm.data[1]);

        vm.Choose_version = function(i){
            vm.userSelected =i;
            vm.userversion=vm.version_info[vm.userSelected];

        }

    },
    function(error){
      console.log("获取数据失败");
    }
  );
  // 获取对应商品的颜色
  dataService.color_info().then(
    function(data){
      vm.data=data.data;
      vm.color_info=[];
        vm.color_info.push(vm.data[0]);
        vm.color_info.push(vm.data[1]);
        vm.color_info.push(vm.data[2]);
        vm.Choose_color = function(i){
            vm.Selected =i;
            vm.usercolor=vm.color_info[vm.Selected].name;
        }

    },
    function(error){
      console.log("获取数据失败");
    }
  )
  // 选择完毕登录购买
};
 vm.fun1(0);

}
