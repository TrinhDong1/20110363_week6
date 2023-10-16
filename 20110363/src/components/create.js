import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'C:/New technologies in software engineering/Week6/20110363/src/styles/create.css'
const Create = ({ createPost }) => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const handleCreatePost = () => {
    // Handle the creation of a new post
    createPost({ id: Date.now(), title: title });

    // Sau khi tạo bài viết, sử dụng navigate để quay về trang Home
    navigate('/');
  };

  return (
    <div>
      <h1>Tạo bài đăng</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleCreatePost}>Tạo</button>
      <Link to="/">Trở về trang chủ</Link>
    </div>
  );
};

export default Create;
