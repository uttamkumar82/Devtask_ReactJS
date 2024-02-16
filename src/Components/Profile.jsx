import React from "react";
import {useNavigate} from "react-router-dom"
import { Home as FeatherHome } from 'react-feather';
import style from './homes.module.css'
import img from '../static/Ellipse 114@2x.png'
import img2 from "../static/Group 1585.png"
const Profile=()=>{
    let navigate = useNavigate()
    let formhandle5=(e)=>{
        e.preventDefault()
        navigate('/')
    }
    let formhandle8=(e)=>{
        e.preventDefault()
        navigate('/sign')
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
                          Profile 
                       </span>
                </div> 
               <div className={style.item_box}> 
                <div className={style.box} >
                   <div className={style.box_header}>
                       <h4 className={style.box_heading}>
                           Account Settings
                        </h4>
                    </div>
                    <div className={style.profile_images}>
                       <div className={style.image1}>
                         <img src={img} alt="" />
                       </div>
                       <div className={style.image2}>
                          <img src={img2} id={style.image2} />
                       </div>
                       <div className={style.header}>
                           <h4>Marry Doe</h4>
                           <div className={style.head2}>
                              <h6>Marry@Gmail.com</h6>
                            </div>
                       </div>
                   </div>
                   <div className={style.profile_para}>
                       <p>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nulla aliquid aut porro nesciunt dolores possimus excepturi enim doloribus quisquam!
                        </p>
                    </div>
               </div>
           </div>
        </section>
        <div className={style.item_last}>
             <div className={style.item_form} onClick={formhandle5}>
                <FeatherHome />
           </div>
           <div className={style.item_lt}  onClick={formhandle8}>
                &lt;
           </div>
           <div className={style.item_no}>4 of 4</div>
           <div className={style.item_gt} onClick={formhandle5}>
               &gt;
          </div>
        </div>
    </div>
    )
}
export default Profile