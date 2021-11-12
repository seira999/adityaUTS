
{/* Import komponen Image */}
import Image from 'next/image';
{/* Import Styles css */}
import styles from '../styles/Home.module.css'
{/* Import Title dari folder komponen */}
import Title from './komponen/title'
{/* Import Header dari folder komponen */}
import Header from './komponen/header' 


{/* Variable untuk memanggil Image */}
const Images = require('../public/profil.jpeg');

export default function Home() {
  return (
    <div className={styles.container}>
        
{/* Title */}
      <Title/>
      <main className={styles.main}>
          
{/* Header */}
      <Header/>

        <p className={styles.description}>
        &larr; Profil &rarr;
        </p>

        <div className={styles.grid}>
        {/* Style Grid adalah CSS bawaan dari next */}
          <p className={styles.card2}>
            <h2>Identitas &rarr;</h2><hr/>

            {/* Image adalah hasil import tadi untuk memanggil Images */}
            <Image src={Images} width="240" height="360"/>

            <p>"Dibawah adalah informasi identitas saya"</p><hr/>

            {/* ini title nama pada body */}
            <label>Nama : </label><br/> 
            <input className={styles.card3} type="text" value="Aditya Rizky Novandi" readOnly/><hr/>
            {/* ini title nim pada body */}
            <label>NIM : </label><br/>
            <input className={styles.card3} type="text" value="1118101640" readOnly/><hr/>
            {/* ini title angkatan pada body */}
            <label>Angkatan : </label><br/>
            <input className={styles.card3} type="text" value="2018" readOnly/><hr/>
            {/* ini title prodi pada body */}
            <label>Prodi : </label><br/>
            <input className={styles.card3} type="text" value="S1 TEKNIK INFORMATIKA" readOnly/><hr/>
            {/* ini title perguruan tinggi pada body */}
            <label>Perguruan Tinggi : </label><br/>
            <input className={styles.card3} type="text" value="STIKOM PGRI Banyuwangi" readOnly/>
          </p>

        </div>
      </main>

      
    </div>
  )
}
