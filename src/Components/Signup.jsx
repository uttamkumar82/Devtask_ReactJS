import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import { Home as FeatherHome } from 'react-feather';
import style from './homes.module.css';

const Signup=()=>{  
    let navigate = useNavigate()
    const [isAgency, setIsAgency] = useState(false);

    let formhandle4 =(e)=>{
        e.preventDefault(e)
        navigate('/profile')
    }
    let formhandle5=(e)=>{
        e.preventDefault()
        navigate('/')
    }
    let formhandle7=(e)=>{
        e.preventDefault()
        navigate('/login')
    }
    let dev_btn=(e)=>{
        e.preventDefault()
        navigate('/devtask')
    }
    const toggleAgencyStatus=(e)=>{
        e.preventDefault();
        setIsAgency(!isAgency)
    }

    return(
     <div>
        <section>
            <div className={style.nav}>
                <div className={style.devtask}>    
                          <div onClick={dev_btn} className={style.btn_devtask}>
                              <div>
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
                        Sign Up 
                    </span>
            </div> 
            <div className={style.item_box}> 
                <div className={style.box} >
                   <form action="">
                      <h1 className={style.heading_login}>
                           Create Your PopX account
                       </h1>
                       <div className={style.fieldbox}> 
                          <fieldset className={style.field}>
                               <legend className={style.label}>
                                  Full Name
                                </legend>
                                <input className={style.ip} type="text" placeholder="Mary Doe"/>
                          </fieldset >
                          <fieldset className={style.field}>
                              <legend className={style.label} >
                                   Phone No.
                                </legend>
                              <input className={style.ip} type="text" placeholder="Mary Doe" />
                            </fieldset>
                            <fieldset className={style.field}>
                                <legend className={style.label} >
                                    EmailAddress
                                </legend>
                                <input className={style.ip} type="text" placeholder="Mary Doe" />
                            </fieldset>
                            <fieldset className={style.field} >
                                <legend className={style.label} >
                                    Password
                                </legend>
                                <input className={style.ip} type="text" placeholder="Mary Doe" />
                            </fieldset>
                            <fieldset className={style.field}>
                                <legend className={style.label} >
                                    Company name
                                </legend>
                                <input className={style.ip} type="text" placeholder="Mary Doe" />
                            </fieldset>
                        </div> 
                        <div className={style.agreecontent}>
                            <h4>Are you from an agency?</h4>
                            <div className={style.radio_btn}>
                                   <input className={style.radio_btn1} type="radio" checked={isAgency}
                                       onChange={toggleAgencyStatus}
                                   />
                                   <label onClick={toggleAgencyStatus} >
                                        Yes
                                   </label>
                                   <input className={style.radio_btn2} type="radio" 
                                      checked={!isAgency} 
                                      onChange={toggleAgencyStatus}
                                    />
                                   <label onClick={toggleAgencyStatus} >
                                       No
                                    </label>
                            </div>
                       </div>
                       <div className={style.signup_btn}>
                           <button className={style.btn_click1} onClick={formhandle4}>
                                Create Account       
                            </button>
                        </div> 
                    </form>
               </div>
            </div>
        </section>
         <div className={style.item_last}>
             <div className={style.item_form} onClick={formhandle5}>
                 <FeatherHome />
             </div>
             <div className={style.item_lt} onClick={formhandle7 }>
                 &lt;
             </div>
             <div className={style.item_no}>3 of 4</div>
             <div className={style.item_gt} onClick={formhandle4}>
                 &gt;
             </div>
         </div>     
    </div>
    )
}
export default Signup