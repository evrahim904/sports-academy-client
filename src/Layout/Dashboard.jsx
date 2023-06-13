import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { FaHistory, FaHome, FaPeopleArrows, FaPeopleCarry, FaUser, FaWallet } from "react-icons/fa";

const Dashboard = () => {
  
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                     {
                        isAdmin && <> <li><Link to="/"><FaHome></FaHome> Home</Link></li>
                        <li><Link to="/dashboard/allClassInstructor"> <FaPeopleArrows></FaPeopleArrows>  Manage Classes</Link></li>
                        <li><Link to="/dashboard/allUsers"><FaUser></FaUser> Manage Users</Link></li></> 
                        ||
                        isInstructor && 
                        <> <li><Link to="/"><FaHome></FaHome> Home</Link></li>
                        <li><Link to="/dashboard/addItem"><FaPeopleArrows></FaPeopleArrows> Add a Class</Link></li>
                        <li><Link to="/dashboard/myClasses"> <FaPeopleCarry></FaPeopleCarry> My Classes</Link></li>
                        
                        
                        </> 
                        
                        ||
                        <><li><Link to="/"><FaHome></FaHome> Home</Link></li>
                        <li><Link to="/dashboard/selectedClass"><FaPeopleArrows></FaPeopleArrows> Selected Class</Link></li>
                        <li><Link to="/dashboard/enrolledClass"><FaWallet></FaWallet> My Enrolled Class</Link></li>
                        <li><Link to="/dashboard/paymentHistory"><FaHistory></FaHistory> Payment History</Link></li>
                        
                        </>
                     }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;