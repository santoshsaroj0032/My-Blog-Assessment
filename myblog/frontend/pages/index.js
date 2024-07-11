import { useEffect, useState } from 'react';
import Post from '../components/Post';
import { gsap } from 'gsap';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data));

    gsap.from(".post", { duration: 1, opacity: 0, y: 50, stagger: 0.3 });
  }, []);

  return (
    <div className="container">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}