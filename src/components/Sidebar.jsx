import '../style/Sidebar.css';
import avatar from '../assets/avatar.png';
import { BiChat, BiHistory, BiHome, BiStats } from 'react-icons/bi';
import { CgAdd, CgCalendar } from 'react-icons/cg';
import { PiBookOpenLight, PiPhone } from 'react-icons/pi';
import { FiSettings } from 'react-icons/fi';
import { IoNotifications } from 'react-icons/io5';
import { BsSearch } from 'react-icons/bs';

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <button className="close-btn" onClick={onClose}>✕</button>
      )}
      <div>
        <div className="sidebar-section">

          <div className="section-title">General</div>
          <div className="mobile-sidebar-content">
            <div className="search-container">
              <input type="text" placeholder="Search..." className="search" />
              <button className="search-button"><BsSearch /></button>
            </div>

          </div>
          <div>
            <li className='icon'><span><BiHome size={20} /> </span>Dashboard</li>
            <li className='icon'><span><BiHistory size={20} /></span> History</li>
            <li className='icon'><span><CgCalendar size={20} /></span>Calendar</li>
            <li className='icon'><span><PiBookOpenLight size={20} /></span>Appointments</li>
            <li className='icon'><span><BiStats size={20} /></span>Statistics</li>
          </div>

          <div className="section-title">Tools</div>
          <div>
            <li className='icon'><span><BiChat size={20} /></span>Chat</li>
            <li className='icon'><span><PiPhone size={20} /></span>Support</li>
          </div>
          <div className="mobile-sidebar-content">
            <li className='icon'><span><IoNotifications size={20} /></span>Notification</li>
            <li className='icon'><span><CgAdd size={20} /></span>Add</li>
          </div>
        </div>
      </div>

      <div >
        <div className="  mobile-sidebar-content">
          <div className='sidebar-profile'>
            <img src={avatar} alt="User" />
            <p>Profile</p>
          </div>
        </div>
        <h1 className="settings"><span><FiSettings size={16} /></span> Settings</h1>
      </div>


    </div>
  );
};
