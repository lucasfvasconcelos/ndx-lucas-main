import styles from "../../styles/Home.module.css";

import {
/*   BsFacebook,
  BsInstagram, */
  BsWhatsapp,
} from "react-icons/bs";



export default function Footer() {
  return (
    <>
	<footer>
{/* 		<p>Pensar em algo</p>
    <p>Penar em algo 2</p> */}
		<div className={styles.social}>
{/* 			<a href="#"><i><BsFacebook /></i></a>
			<a href="#"><i><BsInstagram /></i></a> */}
			<a href="#"><i><BsWhatsapp /></i></a>
		</div>
		{/* <p className="end">CopyRight By DWS - Consultoria em Sitemas</p> */}
	</footer>
    </>
  )
}