import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const Dashboard = () => {
const [isAdmin] = useAdmin() ; 
const [isInstructor] = useInstructor() ;

    return (
        <>
        <NavBar></NavBar>
        <div className="drawer lg:drawer-open my-20">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {isAdmin?.admin ?  <>
              <li><Link to={"/dashboard/users"}>All users</Link></li>
            <li><Link to={""}>Manage classes</Link></li>
            <li><Link to={""}>Feedback</Link></li>
            <div className="divider"></div> 
              </> : (isInstructor?.instructor ? <>
              <li><Link to={"/dashboard/addClass"}>Add Class</Link></li>
            <li><Link to={""}>My classes</Link></li>
            <div className="divider"></div> 
              </> : <>
              <li><Link to={"/dashboard/myList"}>My Classes</Link></li>
            <li><Link to={""}>My enrolled Classes</Link></li>
            <li><Link to={""}>Payment History</Link></li>
            <div className="divider"></div> 
              </>)}      
          </ul>
        
        </div>
      </div>
      <Footer></Footer>
        </>
    );
};

export default Dashboard;