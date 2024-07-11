import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(http://localhost:3001/api/posts/${id})
        .then(response => response.json())
        .then(data => setPost(data));
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;