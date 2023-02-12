import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function editPosts(){
  const [titleInput, setTitleInput] =useState('');
  const [descriptionInput, setDiscriptionInput] =useState('');
    
 
    const dispatch = useDispatch();
    const params= useParams()
    const studentToEdit = useSelector((store) => store.studentToEdit);
    const history = useHistory();
    
    function updatePost(){
      history.push('/Home')
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
    export default editPosts;
