import '../style/HealthStatusCards.css';

export const HealthStatusCards = () => (
  <div className="health-cards">
    <div className="health-card">
      <p className="health-title">🫁 Lungs</p>
      <div className="date">Date: 26 Oct 2021</div>
      <div className="status-bar">
        <div className="filled red" style={{ width: '70%' }}></div>
      </div>
    </div>

    <div className="health-card">
      <p className="health-title">🦷 Teeth</p>
      <div className="date">Date: 26 Oct 2021</div>
      <div className="status-bar">
        <div className="filled green" style={{ width: '90%' }}></div>
      </div>
    </div>

    <div className="health-card">
      <p className="health-title">🦴 Bone</p>
      <div className="date">Date: 26 Oct 2021</div>
      <div className="status-bar">
        <div className="filled red" style={{ width: '60%' }}></div>
      </div>
    </div>
  </div>
);
