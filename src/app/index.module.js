import {routerConfig} from './index.route';
import {config} from './index.config';
import {runBlock} from './index.run';
import { MainController } from './main/main';
import {LoginController} from './login/login';
import {RegisterController} from './register/register';
import {FanhuiController} from './fanhui/fanhui';
import{XiaomiController}from './xiaomi5/xiaomi';
import{BuynowController}from './buynow/buynow';
import{FenController} from './shangpin/01';
import{CarController}from './cart/car';

import{KunHttp}  from './serves/kunhttp';
// import{loginService}from './serves/loginServe';
import{dataService} from './serves/dataService';

angular.module('kun', ['ngAnimate',
 'ngResource', 'ngCookies', 'ngMessages',
  'ngTouch', 'ui.router', 'ui.bootstrap',
   'ngStorage', 'angular-flexslider','ct.ui.router.extras',
   'toastr', 'cgNotify', 'angular-confirm', 'ngFileUpload', 'com.2fdevs.videogular',
 'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.overlayplay',
 'com.2fdevs.videogular.plugins.poster','localytics.directives'])
.config(routerConfig)
.run(runBlock)
.config(config)

.controller("MainController",MainController)
.controller("LoginController",LoginController)
.controller("RegisterController",RegisterController)
.controller("FanhuiController",FanhuiController)
.controller("FenController",FenController)
.controller("XiaomiController",XiaomiController)
.controller("BuynowController",BuynowController)
.controller("CarController",CarController)
// .factory("loginService",loginService)


.factory("KunHttp",KunHttp)
.factory("dataService",dataService)
// .factory("loginService",loginService)
