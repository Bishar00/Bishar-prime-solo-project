import { useHistory } from "react-router-dom";
function HomeItem({post}){
const history = useHistory()

const handleEdit = () => {
history.push('/EditPosts')
}

    return (
        <div onClick={handleEdit}>
       <div>
        {post.title}
       </div> 
       <div>
        {post.description}
       </div>
       <div>
        <button>
            Edit
        </button>
       </div>
       </div>
    )
}

export default HomeItem;