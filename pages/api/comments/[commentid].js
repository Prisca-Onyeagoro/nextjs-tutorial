import { comments } from '../../../data/comments';

export default function commentid(req, res) {
  const { commentid } = req.query;
  if (req.method === 'GET') {
    const Commentid = comments.find(
      (comment) => comment.id === parseInt(commentid)
    );
    res.status(200).json(Commentid);
  } else if (req.method === 'DELETE') {
    const deleted = comments.find(
      (comment) => comment.id === parseInt(commentid)
    );
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentid)
    );
    comments.splice(index, 1);
    res.status(200).json(deleted);
  }
}
