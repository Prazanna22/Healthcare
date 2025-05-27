import { BiChat, BiHistory, BiHome, BiStats } from 'react-icons/bi';
import { CgAdd, CgCalendar } from 'react-icons/cg';
import { PiBookOpenLight, PiPhone } from 'react-icons/pi';
import { FiSettings } from 'react-icons/fi';
import { IoNotifications } from 'react-icons/io5';

export const NavigationLinks = {
  general: [
    { label: "Dashboard", icon: <BiHome size={20} /> },
    { label: "History", icon: <BiHistory size={20} /> },
    { label: "Calendar", icon: <CgCalendar size={20} /> },
    { label: "Appointments", icon: <PiBookOpenLight size={20} /> },
    { label: "Statistics", icon: <BiStats size={20} /> },
  ],
  tools: [
    { label: "Chat", icon: <BiChat size={20} /> },
    { label: "Support", icon: <PiPhone size={20} /> },
  ],
  mobileExtras: [
    { label: "Notification", icon: <IoNotifications size={20} /> },
    { label: "Add", icon: <CgAdd size={20} /> },
  ],
  settings: { label: "Settings", icon: <FiSettings size={16} /> },
};


