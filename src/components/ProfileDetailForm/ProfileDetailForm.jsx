import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import upload from "./upload";

const ProfileDetailForm = () => {
    
  const dispatch = useDispatch();
  const [brandNameInput, setBrandNameInput] = useState("");
  const [visionInput, setVisionInput] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [logoInput, setLogoInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

  

    // Dispatch the form data to Redux
    dispatch({
      type: "SET_PROFILE",
      payload: {
        brandName: brandNameInput,
        logo: logoInput,
        vision: visionInput,
        image: imageFile ? imageFile.name : null,
      },
    });

    // Reset the form inputs
    setBrandNameInput("");
    setVisionInput("");
    setImageFile(null);
    setLogoInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={brandNameInput}
        placeholder="Brand"
        onChange={(event) => {
          setBrandNameInput(event.target.value);
        }}
      />

      <input
        value={visionInput}
        placeholder="Vision"
        onChange={(event) => setVisionInput(event.target.value)}
      />

      <input
        type="file"
        placeholder="Image"
        onChange={(event) => {
          setImageFile(event.target.files[0]);
        }}
      />

      <input
        value={logoInput}
        placeholder="Logo"
        onChange={(event) => {
          setLogoInput(event.target.value);
        }}
      />

      <button type="submit">Done</button>
    </form>
  );
};

export default ProfileDetailForm;