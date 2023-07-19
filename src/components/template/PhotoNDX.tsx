import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function PhotoNDX(){
  return (
    <>
      <Image className={styles.photo} src="/img/ndx.png" alt="Perfil" width={160} height={150}  />
      <br />
      <br />
      <strong> &ensp; NDX Tecnologia</strong><br />
      <strong> &ensp; </strong>
      
    </>
  )
}