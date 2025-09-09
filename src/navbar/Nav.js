import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

const Nav = () => {

const navigate = useNavigate();

 const userEmail = localStorage.getItem("useremail");

const handlelogout=()=>{
  localStorage.removeItem("isLoggedIn"); 
  localStorage.removeItem("useremail");
    navigate("/"); 
}


  return (
    <div className=" flex justify-between p-4 sticky top-0 bg-white shadow z-50">

    <h1 className=" font-medium text-2xl">Exclusive</h1>

 <ul className=" flex justify-between gap-8 text-lg cursor-pointer">
   <Link to='/'> <li className=" hover:text-xl hover:text-red-500">Home</li></Link>
 <Link to='/contact'>   <li className=" hover:text-xl hover:text-red-500">Contact</li></Link>
    <Link to='/about'><li className=" hover:text-xl hover:text-red-500">About</li></Link>
  <Link to='/sign'>  <li className=" hover:text-xl hover:text-red-500">Signup</li></Link>
   <Link to='/cart'>  <li className=" hover:text-xl hover:text-red-500">Cart</li></Link>

    <h3 onClick={handlelogout} className=" hover:text-xl hover:text-red-500">{userEmail}</h3>

   <h3 onClick={handlelogout} className=" hover:text-xl hover:text-red-500">Login/Logout</h3>
 </ul>

 <input className=" px-4 py-2 mr-[10vw] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" type="text" placeholder="Search Products..." />
  

    </div>
  )
}

export default Nav