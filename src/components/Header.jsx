import '../style/Header.css';
import avatar from '../assets/avatar.png';
import { IoNotifications } from 'react-icons/io5';
import { HiMenu } from 'react-icons/hi';

const Header = ({ onToggleSidebar }) => {
  return (
    <div className="header">
      <div className="header-left">
        <button className="mobile-toggle" onClick={onToggleSidebar}>
          <HiMenu />
        </button>
        <h1 className="header-title">Health<span>care.</span></h1>
        <div className=""></div>
      </div>
      <div className="header-center hide-on-mobile">
        <input type="text" placeholder="Search..." className="search-input" />
        <span className="notification-icon"><IoNotifications /></span>
      </div>
      <div className=" hide-on-mobile   header-right">
        <div className="profile">
          <img src={avatar} alt="User" className="avatar" />
        </div>
        <button className="add-button">+</button>
      </div>
    </div>
  );
};

export default Header;
