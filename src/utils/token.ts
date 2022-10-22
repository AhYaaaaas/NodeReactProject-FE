/*
 * @Date: 2022-10-21 21:40:40
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-21 21:40:52
 * @FilePath: \NodeReactProject-FE\src\utils\setToken.ts
 */
export function setToken(token:string) {
  window.localStorage.setItem('gxy_token', token);
}
export function getToken() {
  return window.localStorage.getItem("gxy_token");
}