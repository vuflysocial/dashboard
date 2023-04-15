import Next from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MainNavbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'
import { Address } from '../widgets/address'
import { ContactForm } from '../widgets/contact-form'
import { ActiveOrders } from '../widgets/active-orders'
import UserList from '../widgets/user-list'
import { GoogleMappage } from '../widgets/google-map'
import { Overview } from '../widgets/overview'
import data from "../data/profile.json";
import Stylesheet from "../styles/Home.module.css"


const trade = () => {
  return (


          <div className="flex flex-wrap">
            <div className="w-1/2">

              <iframe width="450" height="540" frameBorder="0" scrolling="no" src="https://coinbrain.com/embed/trade?theme=custom&accent=38e907&background=ffffff&padding=16&chainId=56&inputAddress=0x5c12c812794b874fe4fdea9a4960df599c89b8e5"></iframe>
              <br/>
            </div>
            <div>
              <img src="/OIG.jpg" alt="" />
            </div>
            <div className="w-1/2">
            <iframe width="450" height="540" frameBorder="0" scrolling="no" src="https://coinbrain.com/embed/trade?theme=custom&accent=fd1235&background=ffffff&padding=16&chainId=56&inputAddress=0xc42a67c3d7d5e387168b72ccc555ee61838c7e33"></iframe>
            </div>
            </div>
  )
}

export default trade;
