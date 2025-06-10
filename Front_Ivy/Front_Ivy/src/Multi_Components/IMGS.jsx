import React, { useState } from 'react';
import "../../src/Admi/Styles/add_cat_cs.css";

function IMGS({ onUploadComplete }) {
    const preset_name = 'Subidas';
    const cloud_name = 'e5l5v5i5s';
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        
        if (!file) {
            setError('No se seleccionó ningún archivo');
            return;
        }

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', preset_name);

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
                method: 'POST',
                body: formData,
            });
            
            if (!response.ok) {
                throw new Error('Error al subir la imagen');
            }

            const data = await response.json();
            
            if (!data.secure_url) {
                throw new Error('No se recibió URL de la imagen');
            }

            onUploadComplete(data.secure_url);
            
        } catch (error) {
            console.error('Error uploading image:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='image-upload-container'>
            <div className={`file-input-wrapper ${loading ? 'disabled' : ''}`}>
                <label className="file-input-label">
                    <span className="file-input-button">Seleccionar imagen</span>
                    <input 
                        className="file-input"
                        type="file" 
                        onChange={uploadImage} 
                        accept="image/*"
                        disabled={loading}
                    />
                </label>
            </div>
            
            <div className="upload-feedback">
                {loading && (
                    <div className="loading-indicator">
                        <div className="spinner"></div>
                        <span>Subiendo imagen...</span>
                    </div>
                )}
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    );
}

export default IMGS;