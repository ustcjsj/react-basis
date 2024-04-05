//项目的根组件
// App ->index.js ->public/index.html(root)

import { create } from 'zustand'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <Link to='/'>board</Link>
      <Link to='/about'>about</Link>
      <Outlet></Outlet>
    </div>

  );
}

export default App;
