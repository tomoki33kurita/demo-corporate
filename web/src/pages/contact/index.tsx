import TableRow from '../../components/molecules/tableRow'
import SubHeader from '../../components/organisms/subHeader'
import styles from '../../styles/Home.module.css'

const Contact: React.VFC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SubHeader pageTitle={'お問い合わせ'} />
        <div className={'flex justify-center m-5'}>
          <form>
            <table>
              <tbody>
                <TableRow
                  head={'お名前'}
                  data={
                    <input
                      className={'p-1'}
                      style={{ border: 'solid 1px #ccc', minWidth: '300px' }}
                    />
                  }
                />
                <TableRow
                  head={'ふりがな'}
                  data={
                    <input
                      className={'p-1'}
                      style={{ border: 'solid 1px #ccc', minWidth: '300px' }}
                    />
                  }
                />
                <TableRow
                  head={'メールアドレス'}
                  data={
                    <input
                      className={'p-1'}
                      style={{ border: 'solid 1px #ccc', minWidth: '300px' }}
                    />
                  }
                />
                <TableRow
                  head={'お問い合わせ内容'}
                  data={<textarea style={{ border: 'solid 1px #ccc' }} />}
                />
              </tbody>
            </table>
            <div className={'flex justify-center'}>
              <input
                type="submit"
                value="送信する"
                className={'p-2 m-2'}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Contact
