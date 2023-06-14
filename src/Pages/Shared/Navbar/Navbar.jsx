import { Link } from 'react-router-dom';
import logo from '../../../assets/sport-35476.png'
import useAuth from '../../../Hooks/useAuth';
import './Navbar.css'
// import useAdmin from '../../../Hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useAuth();
//    const [isAdmin] = useAdmin()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }




  
    const navInfo =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>


            {
                user && 
                <li><Link to="/dashboard">dashboard</Link></li>

                    // < li ><Link to={isAdmin ? "/dashboard/allClassInstructor" : "/dashboard/selectedClass"}  >Dashboard</Link></li> 

            }
            <input type="checkbox" className="toggle toggle-md" checked />

        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navInfo}
                    </ul>
                </div>
                <img style={{ width: '70px' }} src={logo} alt="" />
                <a className="btn btn-ghost normal-case text-xl"> Prime Academy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navInfo}
                </ul>
            </div>
            {user ?
                <div className=" navbar-end" >

                    <Link><button className='me-4 btn btn-neutral btn-sm' onClick={handleLogOut}>logout</button>
                    </Link>
                    <div className="avatar tooltip tooltip-bottom" data-tip={user.displayName}>
                        <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 w-10 " >
                            <img  src={user.photoURL} />
                        </div>
                    </div>
                </div>
                : <Link className=" navbar-end" to="/login"><button className='btn btn-ghost btn-sm '>Login</button></Link>
            }
        </div>
    );
};

export default Navbar;