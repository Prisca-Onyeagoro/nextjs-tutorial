import { useState } from 'react';

const commentPage = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const fetchHandler = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'content-type': 'application/json',
      },
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={submitComment}>Submit Comment</button>
        <button onClick={fetchHandler}>Load Comments</button>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <h1>{comment.text}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default commentPage;
