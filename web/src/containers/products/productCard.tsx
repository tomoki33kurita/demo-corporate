type Props = {
  product: {
    model: string
    imageUrl: string
    discription: string
  }
}

const ProductCard: React.VFC<Props> = ({ product }) => {
  const { model, imageUrl, discription } = product
  return (
    <div className={'mb-10 border-4'}>
      <p className={'py-5 px-10 '}>型番号：{model}</p>
      <img src={imageUrl} />
      <p className={'py-5 px-10 '}>{discription}</p>
      <div className={'flex mb-5 ml-10'}>
        <p>長さ約27cm</p>
        <div className={'flex ml-5'}>
          <p>Color：</p>
          <p>ブラック, </p>
          <p>オレンジ</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
