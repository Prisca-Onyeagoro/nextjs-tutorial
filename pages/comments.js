import { useState } from 'react';

const comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const LoadHandler = async () => {
    // GET request
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  };

  const SubmitHandler = async () => {
    // POST request
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    LoadHandler();
  };
  // Delete Text
  const Deletetext = async (commentid) => {
    const response = await fetch(`/api/comments/${commentid}`, {
      method: 'DELETE',
    });
    LoadHandler();
  };
  return (
    <>
      <button onClick={LoadHandler}>Load Comments</button>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={SubmitHandler}>Submit Button</button>
      <div>
        {comments.map((comment) => {
          return (
            <>
              <div key={comment.id}>
                <h1>{comment.text}</h1>
                <button onClick={() => Deletetext(comment.id)}>Delete</button>
                {/* <h1>{comment.comment}</h1> */}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default comments;
