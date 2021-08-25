import SubHeader from '../../components/organisms/subHeader'
import ProductCard from '../../containers/products/productCard'
import styles from '../../styles/Home.module.css'

const Product: React.VFC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <SubHeader title={'製品ラインナップ'} />
        <div className={'m-5 flex justify-between '}>
          <ProductCard product={products[0]} />
          <ProductCard product={products[0]} />
        </div>
        <div className={'m-5  flex justify-between'}>
          <ProductCard product={products[0]} />
          <ProductCard product={products[0]} />
        </div>
        <div className={'m-5  flex justify-between'}>
          <ProductCard product={products[0]} />
          <ProductCard product={products[0]} />
        </div>
      </main>
    </div>
  )
}

const products = [
  {
    model: '2B004',
    imageUrl: '/2b004.png',
    discription: `小ぶりなグラブになっており、ヒンジを手口部分に近くしいいているため小指が聞きやすくなっています。
ウェブはポケット部を編み込みにし、深く破れにくい設計にしています。
横振り縦振り両タイプに万能なグラブです。`
  }
]

export default Product
