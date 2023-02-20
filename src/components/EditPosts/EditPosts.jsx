import React from "react";
import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import './EditPosts.css';

const useStyles = makeStyles((theme) => ({
  titleInput: {
    width: '70%',
    fontSize: '32px',
    marginBottom: '16px'
  },
  descriptionInput: {
    width: '70%',
    fontSize: '24px',
    minHeight: '200px'
  },
  submitButton: {
    marginTop: '16px'
  }
}));

function EditPosts(){

    const dispatch = useDispatch();
    const params= useParams()
    const postToEdit = useSelector((store) => store.postToEdit);
    const history = useHistory();

    useEffect(() => {
      console.log('this is post to edit reducer', postToEdit);
      // Yell at a Saga function to fetch data
      // for the student we are editing!
      dispatch({
        type: 'SAGA/FETCH_POST_TO_EDIT',
        payload: params.id
      })
      console.log('params.id should work, let us make sure!', params.id)
      
    }, [])

    const classes = useStyles(); // Add this line to create the classes object

    const handleTitleChange = (evt) => {
      dispatch({
        type: 'SET_TITLE_CHANGE',
        payload: evt.target.value
      })
    }

    const handleDescriptionChange = (evt) => {
      dispatch({
        type: 'SET_DESCRIPTION_CHANGE',
        payload: evt.target.value
      })
    }
    
    const handleSubmit = (evt) => {
      evt.preventDefault();
      dispatch({
        type: 'SAGA/UPDATE_POST',
        payload: postToEdit
      })
      history.push('/');
    }

    return (
        <>
        <form>
            <input
            className={classes.titleInput} // Add class here
            value={postToEdit.title || ''}
            placeholder= "Enter item Title"
            onChange={handleTitleChange}
            />
            
            <input 
            className={classes.descriptionInput} // Add class here
            value={postToEdit.description || ''}
            placeholder= "Create Post"
            onChange={handleDescriptionChange}
            />
    
            <button 
            className={classes.submitButton} // Add class here
            onClick={handleSubmit}>Post</button>
        </form>
        </>
    )
}

export default EditPosts;