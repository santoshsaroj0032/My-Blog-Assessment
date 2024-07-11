import Link from 'next/link';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{post.content}</p>
      <Link href={/posts/${post.id}}>Read more</Link>
    </div>
  );
};

export default Post;