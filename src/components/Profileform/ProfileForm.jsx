// // import React, { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';

// // const ProfileForm = () => {

// //     const user = useSelector((store) => store.user);
// //     const dispatch = useDispatch();


// //     const [brandNameInput, setBrandNameInput] = useState('');
// //     const [visionInput, setVisionInput] = useState('');
// //     const [imagesInput, setImagesInput] = useState('');
// //     const [logoInput, setLogoInput] = useState('');

    


    // useEffect(() => {
    //     dispatch({ 
    //         type: 'FETCH_PROFILE',
    //         payload: user.id
    //     });
    // }, []);
    
//    const handleSubmit = (event) => {
//     event.preventDefault()
//     dispatch({
//         type: 'SET_PROFILE',
//         payload: {
//             brandName: brandNameInput,
//             logo: logoInput,
//             vision: visionInput,
//             image: imagesInput
//         }
//     });
//    }

// //    return (
// //     <form onSubmit={handleSubmit}>
// //         <input 
// //             value={brandNameInput}
// //             placeholder= "Brand Name"
// //             onChange={(event) => {setBrandNameInput (event.target.value)}}
// //         />

// //         <input
// //             value={visionInput}
// //             placeholder= "Vision"
// //             onChange={(event) => setVisionInput (event.target.value)}
// //         />

// //         <input 
// //             type= 'file'
// //             value={imagesInput}
// //             placeholder= "Image"
// //             onChange={(event) => {setImagesInput (event.target.value)}}
// //         />

// //         <input 
// //             value={logoInput}
// //             placeholder= "Logo"
// //             onChange={(event) => {setLogoInput (event.target.value)}}
// //         />

// //         <button type= 'submit'>
// //             Done 
// //         </button>
// //     </form>
// //     );
// // };

// const ProfileForm = () => {


//     return (
//         <>
//         </>
//     )

// }

// export default ProfileForm;