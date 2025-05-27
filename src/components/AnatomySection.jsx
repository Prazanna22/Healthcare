import '../style/AnatomySection.css';
import body from '../assets/body.png'
export const AnatomySection = () => {
  return (
    <div className="anatomy-section">
        <img src={body}  alt="Anatomical Illustration" className="anatomy-image"/>
        <div className="label heart ">❤️ Healthy Heart </div>
        <div className="label leg">🦵 Healthy Legs</div>
     
    </div>
  );
};


