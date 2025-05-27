import "../style/Dashboard.css";
import { IoIosArrowDown } from "react-icons/io";
import { HealthStatusCards } from "./HealthStatusCards";
import { ActivityFeed } from "./ActivityFeed";
import { CalendarView } from "./CalendarView";
import { UpcomingSchedule } from "./UpcomingSchedule";
import { AnatomySection } from "./AnatomySection";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <div className="dashboard-header">
          <h3>Dashboard</h3>
          <p>This Week <IoIosArrowDown /></p>
        </div>
        <div className="dashboard-overview">
          <AnatomySection />
          <HealthStatusCards />
        </div>
        <ActivityFeed />
      </div>
      <div className="dashboard-right">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
