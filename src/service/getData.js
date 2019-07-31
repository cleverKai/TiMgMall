import $http from './ajax'
 export  const checkLogin =
   ()=>$http('./api/user/get_user_info.do');
