import React from 'react'
import { useState } from 'react'
import "../../src/Admi/Styles/add_cat_cs.css";


function IMGS() { 

    const preset_name='Categorías';
    const cloud_name='e5l5v5i5s'

  const [image,setImage]=useState('');
  const [loading,setLoading]=useState(false);
  localStorage.setItem('cloud_name', cloud_name);

  const uploadImage = async (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', preset_name);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setImage(data.secure_url);
      setLoading(false);
    } catch (error) {
      console.error('Error uploading image:', error);
      setLoading(false);
    }
  };


  return (

    <>
      {/* <div className='Category_Card'>
      <h1>Sube una imagen</h1>
      <input type="file" onChange={uploadImage} />
      {loading && <p>Loading...</p>}
      {image && <img src={image}  style={{ width: '200px', height: '200px' }} />}
    </div> */}

        <div className='Category_Card'>
      <input type="file" onChange={uploadImage} />
      {loading && <p>Loading...</p>}
      {image && <img src={image} style={{ width: '200px', height: '200px' }} />}
    </div>
  
    </>


  )
}

export default IMGS