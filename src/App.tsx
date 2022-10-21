/*
 * @Date: 2022-10-20 21:06:22
 * @LastEditors: xuanyi_ge xuanyige87@gmail.com
 * @LastEditTime: 2022-10-20 22:29:28
 * @FilePath: \NodeReactProject-FE\src\App.tsx
 */
import React from 'react';
import AppRoutes from './router';
import styled from '@emotion/styled';
const AppDiv = styled('div')`
  width: 100%;
  height:100%;
`
function App() {
  return (
    <AppDiv className="App">
      <AppRoutes></AppRoutes>
    </AppDiv>
  );
}

export default App;
