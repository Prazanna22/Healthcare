import '../style/Sidebar.css';
import avatar from '../assets/avatar.png';
import {navigationLinks } from '../Data/NavigationLink.jsx';
import { BsSearch } from 'react-icons/bs';

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {isOpen && <button className="close-btn" onClick={onClose}>✕</button>}
      
      <div className="sidebar-section">
        <div className="section-title">General</div>
        <div className="mobile-sidebar-content">
          <div className="search-container">
            <input type="text" placeholder="Search..." className="search" />
            <button className="search-button"><BsSearch /></button>
          </div>
        </div>

        <div>
          {navigationLinks.general.map((item, idx) => (
            <li key={idx} className="icon"><span>{item.icon}</span>{item.label}</li>
          ))}
        </div>

        <div className="section-title">Tools</div>
        <div>
          {navigationLinks.tools.map((item, idx) => (
            <li key={idx} className="icon"><span>{item.icon}</span>{item.label}</li>
          ))}
        </div>

        <div className="mobile-sidebar-content">
          {navigationLinks.mobileExtras.map((item, idx) => (
            <li key={idx} className="icon"><span>{item.icon}</span>{item.label}</li>
          ))}
        </div>
      </div>

      <div>
        <div className="mobile-sidebar-content ">
        <p className="sidebar-profile"><span>{navigationLinks.profile.icon}</span> {navigationLinks.profile.label}</p>
      </div>

      <h1 className="settings"><span>{navigationLinks.settings.icon}</span> {navigationLinks.settings.label}</h1>
      </div>
    </div>
  );
};
