import React, { Component } from 'react';
import Head from "../components/head";
import '../styles/landing.scss';
import FeatureSlider from '../components/featureSlider';
import HeroCarousel from '../components/heroCarousel';
import Sponsors from '../components/sponsors';
import SolsticeCreditLanding from '../components/solsticeCreditLanding';
import Layout from '../components/layout';
import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const IndexPages = () => {

  return (
    <div id="home">
      <Layout>
        <Head title="Home"/>
        <HeroCarousel/>
        <SolsticeCreditLanding/>
        <Sponsors/>
        <FeatureSlider/>
      </Layout>
     
    </div>
  )
}

export default IndexPages


