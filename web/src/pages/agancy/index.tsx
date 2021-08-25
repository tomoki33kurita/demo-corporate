import SubHeader from '../../components/organisms/subHeader'
import AgancyCard from '../../containers/agancy/agancyCard'
import { Box, Grid, GridItem } from '@chakra-ui/react'

const Agancy: React.VFC = () => {
  return (
    <Box>
      <SubHeader title={'お取扱店舗一覧'} />
      <div className={'m-5'}>
        <Grid templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}>
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
      </div>
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
