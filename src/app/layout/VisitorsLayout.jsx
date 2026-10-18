import './css/layout.css';

import { Outlet } from "react-router"

import VisitorsHeader from "../components/VisitorsHeader";
import VisitorsFooter from "../components/VisitorsFooter";

export default function VisitorsLayout() {
  return (
    <div className="layout-container">
      <VisitorsHeader
        title={"Boring"}
        logo={"#"}
      />
      <main className='main-layout'>
        <Outlet/>
      </main>
      
      <VisitorsFooter/>
    </div>
  )
}
