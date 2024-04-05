import { useSearchParams } from "react-router-dom"
import { useParams } from "react-router-dom"
const Article = () => {
  const [params] = useSearchParams();
  const obj  = useParams()
  let id = params.get('id');
  let id2 = obj.id;

  return (
    <div>
      article{id}{id2}
    </div>
  )
}
export default Article