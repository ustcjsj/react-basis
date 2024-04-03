//项目入口

// core package
import React from 'react';
import ReactDOM from 'react-dom/client';

//导入项目的根组件
import App from './App';

//把App根组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
