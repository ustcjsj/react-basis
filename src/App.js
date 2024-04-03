//项目的根组件
// App ->index.js ->public/index.html(root)

function App() {
  const message = 'this is a message'
  const list = [
    { id: 1001, name: 'Vue' },
    { id: 1002, name: 'React' },
    { id: 1003, name: 'Angular' }
  ];
  const flag = true;
  let clickHandler = (name,e) => {
    console.log('点击按钮', name,e);
  }
  return (
    <div className="App">
      {message}
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

      {flag && <span>hi</span>}
      {flag ? <span>hi</span> : null}
      <button onClick={(e)=>clickHandler(message,e)}>click me</button>
    </div>

  );
}

export default App;
