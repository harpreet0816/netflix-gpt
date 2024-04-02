import logo from "../assets/images/Netflix_Logo_PMS.png"
import avatar from '../assets/images/avatar.png';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
    const user = useSelector(store => store.user)
    const navigate = useNavigate();
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            console.log(error)
            navigate('/error')
          });
    }
    return (
        <>
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-48" src={logo} alt="logo" />
        {
            user &&
            <div className="flex items-center gap-2">
               <img alt="profile" src={avatar} className="w-12 h-12 object-cover" ></img>
               <button onClick={handleSignOut}>Sign Out</button>
            </div>
        }
        </div>
        </>
    );
}

export default Header;