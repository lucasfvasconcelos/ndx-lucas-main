import React from "react";
import Typography from '@mui/material/Typography';
import Head from "next/head";
//import Image from "next/image";
import styles from "../styles/Home.module.css";
/* import {
  BsFillBugFill,
  BsCodeSlash,
  BsFillBriefcaseFill,
} from "react-icons/bs"; */
import BodyText from "../components/template/BodyText";
import Photo from "../components/template/Photo";
/* import PhotoNDX from "../components/template/PhotoNDX"; */
import Footer from "../components/template/Footer";
import { Box, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import {
  /*   BsFacebook,
    BsInstagram, */
  BsWhatsapp,
} from "react-icons/bs";

export default function Home() {
  const head = (
    <div>
      <Head>
        <title>Portfólio | Lucas Vasconcelos</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.title}>
        {/*  <h2>Hola Manitossss</h2> */}
      </div>
    </div>
  );

  const openWhatsApp = () => {
    const phoneNumber = '17991560096';
    const message = 'Bem-vindo(a) à Nerdix Tecnologia, em que posso ajudá-lo?';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const bodyPessoal = (
    <div className={styles.card}>
      <div className={styles.boxLeft}>
        <Photo />
        <div style={{ margin: 12 }}>
          <Typography component="h2" >
            <b>E-mail:</b> lucasfvasconcelos@gmail.com
          </Typography>
          <Typography component="h2">
            <b>CNPJ:</b> 43.879.066/0001-06
          </Typography>
        </div>
        <div style={{ textAlign: 'center' }}>
          <IconButton style={{ color: 'green' }} onClick={openWhatsApp}>
            <WhatsAppIcon />
          </IconButton>
          <span>contato</span>
        </div>

      </div>

    </div>
  );

  /*   const footer = (
      <div>
        <Footer />
      </div>
    ); */

  return (
    <div>
      {head}
      <br />
      {bodyPessoal}
      {/*       <hr />
      {footer} */}
    </div>
  );
}
