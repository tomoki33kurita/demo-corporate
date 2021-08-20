import TableRow from '../../components/molecules/tableRow'
import SubHeader from '../../components/organisms/subHeader'
import styles from '../../styles/Home.module.css'

const About: React.VFC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SubHeader pageTitle={'会社概要'} />
        <div className={'flex justify-center my-5'}>
          <h2>会社概要</h2>
        </div>
        <div className={'m-10 flex justify-center'}>
          <table style={{ border: 'solid 1px #eee' }}>
            <tbody>
              <TableRow head={'会社名'} data={'株式会社 i studio'} />
              <TableRow head={'代表者'} data={'石川佳和'} />
              <TableRow
                head={'本社'}
                data={'〒633-0061 奈良県桜井市上之庄683-3 TEL:0744-46-5181 FAX:0744-46-5182'}
              />
              <TableRow head={'創業'} data={'2017年7月'} />
              <TableRow head={'資本金'} data={'1000万円'} />
              <TableRow head={'在職人数'} data={'4人'} />
              <TableRow head={'事業内容'} data={'野球用品のデザイン・企画・製造・販売'} />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default About
