
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostV = () => {
      const post = useLoaderData();
      const {postId} = useParams();
      const navigate = useNavigate();
      const {id , title ,body} = post;

      console.log(postId)
const handleGoBack = () =>{
      navigate(-1);
}
      return (
            <div>
                  <h2>Details about post: {id} </h2>
                  <p> {title} </p>
                  <p><small>{body}</small></p>
                  <button onClick={handleGoBack} >Go back</button>
            </div>
      );
};

export default PostV;