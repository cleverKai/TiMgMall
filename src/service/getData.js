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
// 获取收货地址
export const addressList = (pageNum, pageSize) => $http('/api/shipping/list.do', {
  pageNum,
  pageSize
});
// 添加地址的接口
export const addAddress = (params) => $http('/api/shipping/add.do', {
  userId: params.userId,
  receiverName: params.receiverName,
  receiverPhone: params.receiverPhone,
  receiverMobile: params.receiverMobile,
  receiverProvince: params.receiverProvince,
  receiverCity: params.receiverCity,
  receiverAddress: params.receiverAddress,
  receiverZip: params.receiverZip,
});
/**
 * 更新地址
 */
export const updateAddress = (params) => $http('/api/shipping/update.do', {
  id: params.id,
  receiverName: params.receiverName,
  receiverPhone: params.receiverPhone,
  receiverMobile: params.receiverMobile,
  receiverProvince: params.receiverProvince,
  receiverCity: params.receiverCity,
  receiverAddress: params.receiverAddress,
  receiverZip: params.receiverZip,
});
/**
 * 购物车列表 h
 */
export const cartList = () => $http('/api/cart/list.do');
/**
 * 购物车选中某个商品
 */
export const selectProduct = (productId) => $http('/api/cart/select.do', {
  productId
});

/**
 * 购物车取消选中某个商品
 */
export const unSelectProduct = (productId) => $http('/api/cart/un_select.do', {
  productId
});

/**
 * 购物车全选
 */
export const selectAll = () => $http('/api/cart/select_all.do');

/**
 * 购物车取消全选
 */
export const unSelectAll = () => $http('/api/cart/un_select_all.do');
/**
 * 移除购物车若干商品
 */
export const deleteProduct = (productIds) => $http('/api/cart/delete_product.do', {
  productIds
});
/**
 * 更新购物车数量
 */
export const updateCartCount = (productId, count) => $http('/api/cart/update.do', {
  productId,
  count
});
/**
 * 购物车数量
 */
export const cartCount = () => $http('/api/cart/get_cart_product_count.do');

/**
 * 购物车添加商品 h
 */
export const addCart = (productId, count) => $http('/api/cart/add.do', {
  productId,
  count
});
/**
 * 获取订单列表
 */
export const orderList = (pageSize, pageNum) => $http('/api/order/list.do', {
  pageSize,
  pageNum
});
/**
 * 获取订单详情
 */
export const orderDetail = (orderNo) => $http('/api/order/detail.do', {
  orderNo
});

/**
 * 取消订单
 */
export const cancelOrder = (orderNo) => $http('/api/order/cancel.do', {
  orderNo
});





