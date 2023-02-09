import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
function PostsForm(){

const dispatch =useDispatch();
const [titleInput, setTitleInput] =useState('');
const [descriptionInput, setDiscriptionInput] =useState('');

const History = useHistory();

const makeNewPost = (event) => {
    event.preventDefault();
    dispatch({
        type:'SAGA/ADD_TO_POSTS',
        payload:{
            title: titleInput,
            description: descriptionInput
        }
    })
    //clear input 
setTitleInput('');
setDiscriptionInput('');

}

const goToHomePage = () => {
    History.push('/home')
  }


return (
    <>
    <form onSubmit={makeNewPost}>
        <input
        value={titleInput}
        placeholder= "Enter item Title"
        onChange={(event) => setTitleInput (event.target.value)}
        />
        
        <input 
        value={descriptionInput}
        placeholder= "Create Post"
        onChange={(event) => {setDiscriptionInput (event.target.value)}}
        />

        <button onClick={goToHomePage}>
            Post 
        </button>


    </form>
    </>
)
}
export default PostsForm;