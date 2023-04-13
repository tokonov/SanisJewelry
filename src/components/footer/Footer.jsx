import React from 'react'
import cl from './Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className={cl.footer}>
      <div className="container">
        <div className={cl.footer_inner}>
          <div className={cl.footer_item}>
            <div className={cl.footer_item_top}>
              <ul className={cl.footer_item_ul}>
                <li className={cl.footer_item_li}><Link to='/'>О КОМПАНИИ</Link> </li>
                <li className={cl.footer_item_li}><Link to='/'>ПАРТНЕРАМ</Link></li>
                <li className={cl.footer_item_li}><Link to='/'>АДРЕСА</Link></li>
                <li className={cl.footer_item_li}><Link to='/'>НОВОСТИ</Link></li>
              </ul>
            </div>
            <div className={cl.footer_item_bottom}>
              <p>© Sanis Copyright</p>
            </div>
          </div>
          <div className={cl.footer_item}>
            <div className={cl.footer_item_top}>
              <ul className={cl.footer_item_ul}>
                <li className={cl.footer_item_li}><Link to='/'>О Адресс</Link> </li>
              </ul>
            </div>
            <div className={cl.footer_item_bottom}>
              <p>© Sanis Copyright</p>
            </div>
          </div>
          <div className={cl.footer_item}>
            <div className={cl.footer_item_top}>
              <ul className={cl.footer_item_ul}>
                <li className={cl.footer_item_li}><Link to='/'>О КОМПАНИИ</Link> </li>
                <li className={cl.footer_item_li}><Link to='/'>ПАРТНЕРАМ</Link></li>
                <li className={cl.footer_item_li}><Link to='/'>АДРЕСА</Link></li>
                <li className={cl.footer_item_li}><Link to='/'>НОВОСТИ</Link></li>
              </ul>
            </div>
            <div className={cl.footer_item_bottom}>
              <p>© Sanis Copyright</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer