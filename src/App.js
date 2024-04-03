//项目的根组件
// App ->index.js ->public/index.html(root)
import { useState } from 'react';
import  './index.css'

function App() {
  const message = 'this is a message'
  const list = [
    { id: 1001, name: 'Vue' },
    { id: 1002, name: 'React' },
    { id: 1003, name: 'Angular' }
  ];
  const flag = true;

  return (
    <div className="App">
      {message}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

      {flag && <span>hi</span>}
      {flag ? <span>hi</span> : null}
      <Button></Button>
      <TestState></TestState>


      <div className="bg-blue-500 text-white p-4">
        This is a Tailwind CSS styled component.
      </div>
    </div>

  );
}
const Button = () => {
  const clickHandler = (name, e) => {
    console.log('点击按钮', name, e);
  }
  return <button onClick={(e) => clickHandler("jack", e)}>click me</button>

}
const TestState = () => {
  // const [form, setform] = useState({ name: 'jack' })
  // return <button onClick={() => setform({
  //   ...form,
  //   name: 'john'
  // })}>修改form {form.name}</button>
  const handleClick = () => {
    setList([5, 6, 7, 8, 9]);
  }
  const [list, setList] = useState([1, 2, 3, 4, 5])
  return <button onClick={handleClick}>{list}</button>
}

export default App;
