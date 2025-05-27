import { BsArrowRight } from 'react-icons/bs';
import '../style/ActivityFeed.css';

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

export const ActivityFeed = () => {
  return (
    <>
      <div>
        <p className='details'>Details  <BsArrowRight size={10} /></p>
        <div className="activity-feed">

          <div className="activity-header">
            <h3>Activity</h3>
            <p>3 appointments on this week</p>
          </div>
          <div className="bar-chart">
            {days.map((day, idx) => (
              <div className="bar-day" key={idx}>
                <div className="bars-row">
                  <div className="bar full" />
                  <div className="bar float" />
                  <div className="bar mid" />
                  <div className="bar short" />
                </div>
                <p className="day-label">{day}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
