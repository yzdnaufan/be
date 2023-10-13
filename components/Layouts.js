import { Outlet } from "react-router-dom";
import PublicHeader from "./public/PublicHeader";

const Layouts = () => {
  return (
    <div>
      {/* Sticky Header */}
      <PublicHeader/>
      <Outlet/>
    </div>
  )
}

export default Layouts