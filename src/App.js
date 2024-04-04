//项目的根组件
// App ->index.js ->public/index.html(root)
import { useState } from 'react';
import { useRef } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
// import './index.css' 
const ctx = createContext()

const App = () => {
  const inputRef = useRef(null)
  const message = 'this is a message'
  const list = [
    { id: 1001, name: 'Vue' },
    { id: 1002, name: 'React' },
    { id: 1003, name: 'Angular' }
  ];
  const flag = true;
  const [value, setValue] = useState('123')
  const handleInputChange = (value) => { setValue(value) }
  const handleClick = () => {
    inputRef.current.focus()
    console.dir(inputRef.current)
  }
  const name = 'this is App name(msg)'
  const getMsg = (msg) => {
    console.log(msg);
    setMsg(msg)
  };
  const [msg, setMsg] = useState('')
  return (
    <div className="App">
      {message}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

      {flag && <span>hi</span>}
      {flag ? <span>hi</span> : null}
      <Button ></Button>
      <TestState></TestState>
      <br></br>
      <div className="bg-blue-500 text-white p-4">
        This is a Tailwind CSS styled component.
      </div>

      <input value={value} type='text' onChange={(e) => handleInputChange(e.target.value)}></input>

      <input ref={inputRef} type='text'></input>
      <button onClick={() => handleClick()}>点击Ref</button>
      <Son name={name} onGetMsg={getMsg} >
        <span>this is children</span>
      </Son>
      <div>{msg}</div>
      <ctx.Provider value={name}>
        this is app
        <A></A>
      </ctx.Provider>
    </div>

  );
}
const Button = () => {
  const clickHandler = (name, e) => {
    console.log('点击按钮', name, e);
  }
  return <button className="border-2	border-indigo-600 bg-slate-500" onClick={(e) => clickHandler("jack", e)}>click me</button>

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
const Son = (props) => {
  console.log(props.name);
  const msg = 'this is son message'

  return <div>this is son {props.name}. {props.children} <button onClick={() => props.onGetMsg(msg)}>give msg to father</button></div>
}
function A() {
  return <div>this is A component
    <B></B>
  </div>
}
function B(params) {
  const msg = useContext(ctx)
  return <div>C: {msg}</div>
}

export default App;
