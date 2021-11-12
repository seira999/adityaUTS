import Head from 'next/head'
import styles from '../styles/Home.module.css'
{/* Import Title dari folder komponen */}
import Title from './komponen/title'
{/* Import Header dari folder komponen */}
import Header from './komponen/header' 

export default function Home() {
  return (
    <div className={styles.container}>
      <Title/>

      <main className={styles.main}>
        <Header/>

        <p className={styles.description}>
          Get started to explore My Web
        </p>

        <div className={styles.grid}>
          {/* Routing untuk link ke page profil */}
          <a href="/profil" className={styles.card}>
            <h2>Profil &rarr;</h2>
            <p>Informasi seputar identitas saya.</p>
          </a>

        </div>
      </main>

      
    </div>
  )
}
