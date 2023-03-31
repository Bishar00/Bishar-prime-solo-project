import { useHistory } from "react-router-dom";
import "./HomeItem.css";

function HomeItem({ post }) {
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/EditPosts/${post.id}`);
  };

  return (
    <div onClick={handleEdit}>
      <div>{/* {post.title} */}</div>
      <div>{post.description}</div>
      <div className="centerButton">
        <button className="btnEdit" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default HomeItem;
