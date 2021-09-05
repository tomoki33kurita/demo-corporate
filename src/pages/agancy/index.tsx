import React from 'react'
import SubHeader from '../../components/organisms/subHeader'
import AgancyCard from '../../containers/agancy/agancyCard'
import { Text, Box, Grid, GridItem } from '@chakra-ui/react'

const Agancy: React.VFC = () => {
  return (
    <Box>
      <SubHeader title={'お取扱店舗一覧'} />
      <Box mx={[5, 5, 10]} my={5}>
        <Text px={[5, 5, 10]} color={'gray.100'}>
          エールストーリー は以下のお店で購入できます。エールストーリー は以下のお店で購入できます。エールストーリー
          は以下のお店で購入できます。エールストーリー は以下のお店で購入できます。エールストーリー
          は以下のお店で購入できます。
        </Text>
      </Box>
      <Grid px={[0, 0, 10]} py={[10, 10, 5]} templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}>
        <GridItem>
          <AgancyCard agancy={agancies[0]} />
        </GridItem>
        <GridItem>
          <AgancyCard agancy={agancies[0]} />
        </GridItem>
        <GridItem>
          <AgancyCard agancy={agancies[0]} />
        </GridItem>
        <GridItem>
          <AgancyCard agancy={agancies[0]} />
        </GridItem>
        <GridItem>
          <AgancyCard agancy={agancies[0]} />
        </GridItem>
      </Grid>
    </Box>
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
