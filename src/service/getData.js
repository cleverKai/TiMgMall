import $http from './ajax'
// 检查用户状态
 export  const checkLogin =
   ()=>$http('./api/user/get_user_info.do');
// 分类数据
 export const categoryData = ()=> $http('/category/data');
 // 商品列表
//  export const productListKeyword = (params)=> $http('/api/product/list.do',{
//    keyword: params.keyword,
//    pageNum: params.pageNum,
//    pageSize:params.pageSize,
//    orderBy:params.orderBy,
// });
 // 热搜
  export const hotData = ()=>$http('/search/hot');
 // 通过商品进行搜索
 export const productListKeyword = (params) => $http('./api/product/list.do',{
   keyword: params.keyword,
   pageNum: params.pageNum,
   pageSize: params.pageSize,
   orderBy: params.orderBy,
 });
 //通过商品类别进行搜索
 export const productListCategoryId = (params)=>$http('./api/product/list.do',{

   categoryId:params.categoryId,
   pageNum:params.pageNum,
   pageSize:params.pageSize,
   orderBy:params.orderBy,
 })
// 商品详情
 export  const  productDetail = (productId)=> $http('/api/product/detail.do',{
   productId
 });
 //调用登录的接口
export const userLogin = (username,password)=>$http('/api/user/login.do',{
  username,
  password
});
/**
 * 注册
 */
export const userRegister = (params) => $http('/api/user/register.do', {
  username: params.username,
  password: params.password,
  email: params.email,
  phone: params.phone,
  question: params.question,
  answer: params.answer
});
/**
 * 获取提示问题
 */
export const getQuestion = (username) => $http('/api/user/forget_get_question.do', {
  username
});

/**
 * 提交答案
 */
export const submitAnswer = (params) => $http('/api/user/forget_check_answer.do', {
  username: params.username,
  question: params.question,
  answer: params.answer
});

/**
 * 忘记密码重置
 */
export const forgetResetPassword = (params) => $http('/api/user/forget_reset_password.do', {
  username: params.username,
  passwordNew: params.passwordNew,
  forgetToken: params.forgetToken
});

// 获取登录信息
export const getUserInfo = () => $http('/api/user/get_information.do');

//退出登录
export const logout = () => $http('/api/user/logout.do');

/**
 * 登陆下 密码重置  1
 */
export const updatePassword = (passwordOld,passwordNew) => $http('/api/user/reset_password.do',{
  passwordOld,
  passwordNew
});
/**
 * 更新个人信息
 */
export const updateInfo = (params) => $http('/api/user/update_information.do', {
  email: params.email,
  phone: params.phone,
  question: params.question,
  answer: params.answer
});



