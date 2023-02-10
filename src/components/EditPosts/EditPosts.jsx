import React from "react";
import { useState,useSelector } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function editPostsForm(){
  const [titleInput, setTitleInput] =useState('');
  const [descriptionInput, setDiscriptionInput] =useState('');
    
  const params = useParams();
    const dispatch = useDispatch();
    const studentToEdit = useSelector((store) => store.studentToEdit);
    const history = useHistory();

    function updatePost(){
      dispatch({
        type: 'SAGA/POST_TO_EDIT',
        payload: {
          title: titleInput,
          description: descriptionInput
        }
      })
    }

    useEffect(() => {
        // Yell at a Saga function to fetch data
        // for the student we are editing!
        console.log('params.id should work, let us make sure!', params.id)
        
      }, [])


    return (
        <>
        <form onSubmit={updatePost}>
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
    
            <button type= 'submit'>
                Post 
            </button>
    
    
        </form>
        </>
    )
    }
    export default editPostsForm;
