import React from 'react';
import '../style/AnatomySection.css';
import body from '../assets/body.png'
export const AnatomySection = () => {
  return (
    <div className="anatomy-section">
     
        <img
          src={body}  // Replace with your actual image path
          alt="Anatomical Illustration"
          className="anatomy-image"
        />

        {/* Labels positioned with absolute CSS */}
        <div className="label heart ">❤️ Healthy Heart </div>
        <div className="label leg">🦵 Healthy Legs</div>
     
    </div>
  );
};


