import logo from "../assets/images/Netflix_Logo_PMS.png"
import avatar from '../assets/images/avatar.png';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
function Header() {
    const user = useSelector(store => store.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            navigate('/')
          }).catch((error) => {
            console.log(error)
            navigate('/error')
          });
    }
    useEffect(()=>{
        // this is like event listener that runs only when authstate changed 
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
              navigate('/browse')
            } else {
                navigate('/')
              dispatch(removeUser());
            }

            //unsubsbscribe when component unmounts
            return ()=> unsubscribe();
          });
    }, [])
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