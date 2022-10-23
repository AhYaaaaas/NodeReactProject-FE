/*
 * @Date: 2022-10-21 20:11:05
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-21 21:38:54
 * @FilePath: \NodeReactProject-FE\src\components\login\type.ts
 */
export interface loginConfig{
  uAccount: string,
  password:string
}
export interface loginResponse{
    "status":number,
    "token":string,
    "userInfo": {
      "avatar": string,
      "uAccount": string,
      "uEmail": string,
      "uid": string,
      "userName": string
    }
}