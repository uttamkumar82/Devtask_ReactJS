import React from "react";
import { useNavigate } from 'react-router-dom';
import { Home as FeatherHome } from 'react-feather';
import style from './homes.module.css'

const Landingscreen=()=>{
    let navigate = useNavigate()
    
    let formhandle1=(e)=>{
        e.preventDefault()
        navigate('/sign')
    }
    let formhandle2=(e)=>{
        e.preventDefault()
        navigate('/login')
    }
    let formhandle5=(e)=>{
        e.preventDefault()
        navigate('/')
    }
    let formhandle6=(e)=>{
        e.preventDefault()
        navigate('/profile')
    }
    let dev_btn=(e)=>{
        e.preventDefault()
        navigate('/devtask')
    }
  
    return(
    <div>
        <section >
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
                        Landing Screen
                    </span>
               </div> 
             
         <div className={style.item_box}>
                <div className={style.box} >
                    <div className={style.heading}>
                        <h1 >Welcome to PopX</h1>
                    </div>
                    <p className={style.paragraph}> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                   <div className={style.btn_2_3}>
                        <button className={style.btn1} onClick={formhandle1}>
                            Create Account
                        </button>

                        <button className={style.btn2} onClick={formhandle2}>
                             Already Registered? Login
                        </button>
                   </div>
                    
                </div>
            </div>

        </section>
       <div className={style.item_last}>
           <div className={style.item_form} onClick={formhandle5}>
               <FeatherHome />
           </div>
           <div className={style.item_lt} onClick={formhandle6 }>
               &lt;
           </div>
           <div className={style.item_no}>1 of 4</div>
           <div className={style.item_gt} onClick={formhandle2 }>
              &gt;
           </div>
       </div>
    </div>    
   )
}
export default Landingscreen

