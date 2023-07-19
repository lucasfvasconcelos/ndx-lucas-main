import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Photo(){
  return (
    <>
      <Image className={styles.photo} src="/img/lucas.png" alt="Perfil" width={160} height={150}  />
      <br />
      <br />
      <strong> &ensp; Lucas Ferreira Vasconcelos</strong><br />
      <strong> &ensp; CEO - NDX Tecnologia</strong>
      
    </>
  )
}