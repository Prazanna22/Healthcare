import { BiChat, BiHistory, BiHome, BiStats, BiUser } from 'react-icons/bi';
import { CgAdd, CgCalendar } from 'react-icons/cg';
import { PiBookOpenLight, PiPhone } from 'react-icons/pi';
import { FiSettings } from 'react-icons/fi';
import { IoNotifications } from 'react-icons/io5';
export const navigationLinks = {
  general: [
    { label: "Dashboard", icon: <BiHome size={16} /> },
    { label: "History", icon: <BiHistory size={16} /> },
    { label: "Calendar", icon: <CgCalendar size={16} /> },
    { label: "Appointments", icon: <PiBookOpenLight size={16} /> },
    { label: "Statistics", icon: <BiStats size={16} /> },
  ],
  tools: [
    { label: "Chat", icon: <BiChat size={16} /> },
    { label: "Support", icon: <PiPhone size={16} /> },
  ],
  mobileExtras: [
    { label: "Notification", icon: <IoNotifications size={16} /> },
    { label: "Add", icon: <CgAdd size={16} /> },
  ],
  settings: { label: "Settings", icon: <FiSettings size={16} /> },
  profile: { label: "profile", icon: <BiUser size={16}/> },
};
