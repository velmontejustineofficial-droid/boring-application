import "./css/UserLayout.css";
import UserHeader from "./components/user/UserHeader";
import UserSidebar from "./components/user/UserSidebar";
import { Outlet } from "react-router";


export default function UserLayout() {
  return (
    <div className="user-layout">
      <UserHeader />

      <div className="user-layout-body">
        <UserSidebar />

        <main className="user-layout-content">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
