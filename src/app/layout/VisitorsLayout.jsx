import './css/layout.css';

import { Outlet } from "react-router"

import VisitorsHeader from "./components/visitor/VisitorsHeader";
import VisitorsFooter from "./components/visitor/VisitorsFooter";

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
