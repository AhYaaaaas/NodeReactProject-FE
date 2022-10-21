/*
 * @Date: 2022-10-21 20:17:38
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-21 20:21:37
 * @FilePath: \NodeReactProject-FE\src\utils\createForm.ts
 */
export function createForm(config:Object) {
  const form = new FormData();
  for (let [key, value] of Object.entries(config)) {
    form.append(key, value);
  }
  return form;
}
