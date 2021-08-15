import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: React.VFC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={'text-5xl text-yellow-400'}>i studio</h1>

        <p className={styles.description}>クオリティの高い野球用品をご提供します。</p>

        <div className={styles.grid}>
          <Link href="/products">
            <a className={styles.card}>
              <h2>製品ラインナップへ</h2>
              <p></p>
            </a>
          </Link>

          <Link href="/agancy">
            <a className={styles.card}>
              <h2>お取扱店一覧</h2>
              <p></p>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h2>会社概要</h2>
              <p></p>
            </a>
          </Link>

          <Link href="/contact">
            <a className={styles.card}>
              <h2>お問い合わせ</h2>
              <p></p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
