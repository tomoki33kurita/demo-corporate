import Head from 'next/head'
import styles from '../../styles/Home.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>test studio</h1>

        <p className={styles.description}>クオリティの高い野球用品をご提供します。</p>

        <div className={styles.grid}>aaaa</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copryright © Test Studio Inc. All Rights Reserved.
        </a>
      </footer>
    </div>
  )
}

export default About
