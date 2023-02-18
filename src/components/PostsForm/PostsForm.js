import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './PostsForm.css';

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

function PostsForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SAGA/ADD_TO_POSTS',
      payload: {
        title: titleInput,
        description: descriptionInput
      }
    });
    // Clear inputs
    setTitleInput('');
    setDescriptionInput('');
    history.push('/home');
  };

  return (
    <>
      <form className='postform' onSubmit={handleSubmit}>
        <TextField
          className={classes.titleInput}
          value={titleInput}
          label="Enter item Title"
          variant="outlined"
          onChange={(event) => setTitleInput(event.target.value)}
        />
        <TextField
          className={classes.descriptionInput}
          value={descriptionInput}
          label="Create Post"
          multiline
          rows={5}
          variant="outlined"
          onChange={(event) => setDescriptionInput(event.target.value)}
        />
        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Post
        </Button>
      </form>
    </>
  );
}

export default PostsForm;