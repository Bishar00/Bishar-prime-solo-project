import React from "react";

const ProfileForm = () => {

    const [brandNameInput, setBrandNameInput] = useState('');
    const [visionInput, setVisionInput] = useState('');
    const [imagesInput, setImagesInput] = useState('');
    const [logoInput, setLogoInput] = useState('');



return (
    <form onSubmit={}>
    <input 
    value={brandNameInput}
    placeholder= "Brand Name"
    onChange={(event) => {setBrandNameInput (event.target.value)}}
    />

<input
    value={visionInput}
    placeholder= "Vision"
    onChange={(event) => setVisionInput (event.target.value)}
    />

<input 
    value={imagesInput}
    placeholder= "Image"
    onChange={(event) => {setImagesInput (event.target.value)}}
    />

<input 
    value={logoInput}
    placeholder= "Logo"
    onChange={(event) => {setLogoInput (event.target.value)}}
    />

    <button type= 'submit'>
        Done 
    </button>


</form>
)
}