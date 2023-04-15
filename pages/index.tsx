import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { MainNavbar } from '../components/navbar'
import { Sidebar } from '../components/sidebar'
import { Overview } from '../widgets/overview'
import Head from "next/head";

import Image from 'next/image'

import { Address } from '../widgets/address'
import { ContactForm } from '../widgets/contact-form'
import { ActiveOrders } from '../widgets/active-orders'
import UserList from '../widgets/user-list'
import { GoogleMappage } from '../widgets/google-map'
import data from "../data/profile.json";
import Stylesheet from "../styles/Home.module.css"
import Next from"next"
import { CoinbaseWallet } from "@thirdweb-dev/wallets";
import { Binance } from "@thirdweb-dev/chains";
interface Props {
  children?: React.ReactNode;
}

const Home: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Melo Inu</title>
        <meta name="description" content="Melo inu Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.connect}>
                  <ConnectWallet />
                </div>
      <div className="bg-slate-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
        <MainNavbar />
        <Sidebar />
        <div className="h-full ml-14 mt-20 mb-10 md:ml-64">
          <Overview />
          <div className="bg-slate-100 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased">
            <div className="flex flex-wrap">
              <div className="w-1/2">
                <iframe width="452" height="172" frameBorder="0" scrolling="no" src="https://coinbrain.com/coins/bnb-0x5c12c812794b874fe4fdea9a4960df599c89b8e5/ticker?theme=light&padding=16&type=medium&currency=USD&blocks=price%2CmarketCap%2Cvolume24h"></iframe>
                <br/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
