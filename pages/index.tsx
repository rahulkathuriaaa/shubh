import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar'
import {Hero} from '../components/Hero';
import Footer from '../components/Footer'
const Home: NextPage = () => {
  return (
    <div >
      <Navbar/>
      {/* <h1 className='font-semibold bg-green-500'>Hello World</h1> */}
      <Hero/>
      <Footer/>
    </div>
  );
};

export default Home;
