
import { useLoaderData } from 'react-router-dom';

const PostV = () => {
      const post = useLoaderData();
      const {id , title ,body} = post;

      return (
            <div>
                  <h2>Details about post: {id} </h2>
                  <p> {title} </p>
                  <p><small>{body}</small></p>
                  
            </div>
      );
};

export default PostV;