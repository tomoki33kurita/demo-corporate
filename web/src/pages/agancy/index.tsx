import SubHeader from '../../components/organisms/subHeader'
import AgancyCard from '../../containers/agancy/agancyCard'
import styles from '../../styles/Home.module.css'

const Agancy: React.VFC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SubHeader title={'お取扱店舗一覧'} />
        <div className={'m-5'}>
          <div>
            <AgancyCard agancy={agancies[0]} />
            <AgancyCard agancy={agancies[0]} />
            <AgancyCard agancy={agancies[0]} />
            <AgancyCard agancy={agancies[0]} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Agancy

const agancies = [
  {
    shopName: 'スワロースポーツ(ベースボールセレクト)',
    address: '東京都練馬区豊島園トシマエンビル5F',
    phone: '012-3456-7890',
    content: '硬式グラブ',
    link: 'https://www.4860.jp/'
  }
]
