import '../style/HealthStatusCards.css';
import {healthData }from '../Data/HealthData.jsx';

export const HealthStatusCards = () => (
  <div className="health-cards">
    {healthData.map((item, index) => (
      <div className="health-card" key={index}>
        <p className="health-title">{item.organ}</p>
        <div className="date">Date: {item.date}</div>
        <div className="status-bar">
          <div className={`filled ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
        </div>
      </div>
    ))}
  </div>
);
