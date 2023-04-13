import React from 'react'
import cl from './Navbar.module.css'
import logo from '../../media/navbar/logo.svg'
import { Link } from 'react-router-dom'
import account from'../../media/navbar/account.svg'
import basketImg from'../../media/navbar/basket.svg'


const Navbar = () => {
  return (
    <div  className={cl.navbar}>
        <div className="container">
            <div className={cl.navbar_top}>
                <div className={cl.navbar_top_logo}>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <div className={cl.navbar_top_us}>
                    <Link to='/'><img src={account} alt="" /></Link>
                    <Link to='/'><img src={basketImg} alt="" /></Link>
                </div>
            </div>
            <div className={cl.navbar_bottom}>
                <div className="container">
                    <ul className={cl.navbar_b_ul}>
                        <li className={cl.navbar_b_li}><Link to='/'>СЕРЬГИ</Link></li>
                        <li className={cl.navbar_b_li}><Link to='/'>КОЛЬЦА</Link></li>
                        <li className={cl.navbar_b_li}><Link to='/'>БРАСЛЕТЫ</Link></li>
                        <li className={cl.navbar_b_li}><Link to='/'>ПОДВЕСКИ</Link></li>
                        <li className={cl.navbar_b_li}><Link to='/'>КОЛЬЕ</Link></li>
                        <li className={cl.navbar_b_li}><Link to='/'>ПИРСИНГ</Link></li>
                        <li className={cl.navbar_b_li}><Link to='/'>БРОШИ</Link></li>
                        <li className={cl.navbar_b_li}><Link to='/'>ЗАПОНКИ</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar