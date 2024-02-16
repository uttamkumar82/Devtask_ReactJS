import React from "react";
import { Home as FeatherHome } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import style from './homes.module.css'
import Landingscreen from "../Components/Landingscreen"
import Login from "../Components/Login"
import Signup from "../Components/Signup"
import Profile from "../Components/Profile"

const Devtask = () => {
    let navigate = useNavigate()
    let devtask_land=(e)=>{
        e.preventDefault()
        navigate('/')
    }
    let devtask_login=(e)=>{
        e.preventDefault()
        navigate('/login')
    }
    let devtask_signup=(e)=>{
        e.preventDefault()
        navigate('/sign')
    }
    let devtask_profile=(e)=>{
        e.preventDefault()
        navigate('/profile')
    }

    return (
        <div>
            <section className={style.dev_sec}>
               <div className={style.nav}>
                    <FeatherHome />
                   <span className={style.nav_item}>
                        Devtask 
                  </span>
              </div>
             <div className={style.devtask1}>
                    <div className={style.devtask_landing} onClick={devtask_land}>
                         <Landingscreen />
                    </div>
                    <div className={style.devtask_login} onClick={devtask_login}>
                         <Login />
                    </div>
                    <div className={style.devtask_signup} onClick={devtask_signup}>
                         <Signup />
                    </div>
                    <div className={style.devtask_profile} onClick={devtask_profile}>
                        <Profile />
                    </div>  
             </div>

            </section>
        </div>
    );
}
export default Devtask;
