import React from "react";
import {useNavigate} from "react-router-dom";
import { Home as FeatherHome } from 'react-feather';
import style from './homes.module.css'
const Login =()=>{
    let navigate = useNavigate()
    let formhandle3 =(e)=>{
        e.preventDefault(e)
        navigate('/profile')
    }
    let formhandle5=(e)=>{
        e.preventDefault()
        navigate('/')
    }
    let dev_btn=(e)=>{
        e.preventDefault()
        navigate('/devtask')

    }
   
    return(
    <div>
        <section> 
                <div className={style.nav}>
                      <div className={style.devtask}>    
                          <div onClick={dev_btn} className={style.btn_devtask}>
                             <div >
                                  <FeatherHome /> 
                              </div>
                              <div className={style.icons}>
                                 Devtask 
                              </div>
                          </div>
                           <div className={style.gt_devtask}>
                                &gt;
                           </div>
                      </div>
                      <span className={style.nav_item1}>
                           Login
                      </span>
                 </div> 

           <div className={style.item_box}>
                <div className={style.box}>
                    <h1 className={style.heading_login}>
                        Signin to your Popx Account
                    </h1> 
                    <p className={style.paragraph_login}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className={style.log_field_box}>
                          <fieldset className={style.field}>
                              <legend className={style.login_items} >
                                  Email Address
                                </legend>
                               <input className={style.ip} type="text" placeholder="Enter email address"  />
                            </fieldset>
                            <fieldset className={style.field} >
                                <legend className={style.login_items}>
                                    Password
                                </legend>
                                <input className={style.ip} type="text" placeholder="Enter password" />
                            </fieldset>
                    </div>
                    <div className={style.log_btn}>
                        <button className={style.btn_click} onClick={formhandle3}>
                            Login
                        </button>
                    </div> 
                </div>
            </div> 
        </section> 
        <div className={style.item_last}>
            <div className={style.item_form} onClick={formhandle5}>
               <FeatherHome />
           </div>
           <div className={style.item_lt}  onClick={formhandle5 }>
               &lt;
           </div>
           <div className={style.item_no}>2 of 4</div>
           <div className={style.item_gt} onClick={formhandle3}>
               &gt;
           </div>
        </div>
        
    </div>     
    )
}
export default Login