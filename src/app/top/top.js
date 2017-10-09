export function TopController($state,dataService) {
    'ngInject';
    'use strict';

    let vm = this;
    vm.go=function(){
        $state.go("shangpin")
    }


}
