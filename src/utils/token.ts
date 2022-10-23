/*
 * @Date: 2022-10-21 21:40:40
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-23 11:57:06
 * @FilePath: \NodeReactProject-FE\src\utils\token.ts
 */
export function setToken(token:string) {
  window.localStorage.setItem('gxy_token', token);
}
export function getToken() {
  const res = window.localStorage.getItem("gxy_token")
  if (res !== "undefined") {
    return res
  }
  return undefined;
}