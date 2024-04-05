import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      login
      <button onClick={()=>{navigate('/article')}}>click jump</button>
      <button onClick={()=>{navigate('/article?id=1&name=jacck')}}>click jump and 传参</button>
      <button onClick={()=>{navigate('/article/1001')}}>click jump and params传参</button>
        <Link to='/article'>goto article page</Link>
    </div>
  )
}
export default Login