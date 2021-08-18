type Props = {
  agancy: {
    shopName: string
    address: string
    phone: string
    content: string
    link?: string
  }
}

const AgancyCard: React.VFC<Props> = ({ agancy }) => {
  const { shopName, address, phone, content, link } = agancy
  return (
    <div className={'border-2 p-5 mb-3'}>
      <h3 className={'mb-3 font-bold'}>{shopName}</h3>
      <p>住所：{address}</p>
      <p>TEL：{phone}</p>
      <p>取扱内容：{content}</p>
      <p>
        <a href={link}>{link}</a>
      </p>
    </div>
  )
}

export default AgancyCard
