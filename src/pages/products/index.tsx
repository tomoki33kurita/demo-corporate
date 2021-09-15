import React from 'react'
import SubHeader from '../../components/organisms/subHeader'
import ProductCard from '../../containers/products/productCard'
import { Text, Box, Grid, GridItem, Tab, TabList, TabPanels, TabPanel, Tabs } from '@chakra-ui/react'

const Product: React.VFC = () => {
  return (
    <Box minHeight={'100vh'}>
      <SubHeader title={'製品ラインナップ'} />
      <Box mx={[5, 5, 10]} my={5}>
        <Text px={[5, 5, 10]} fontSize={14} color={'gray.100'}>
          エールストーリー はこんな素材を使用しています。エールストーリー はこんな素材を使用しています。エールストーリー
          はこんな素材を使用しています。エールストーリー はこんな素材を使用しています。エールストーリー
          はこんな素材を使用しています。エールストーリー はこんな素材を使用しています。エールストーリー
          はこんな素材を使用しています。エールストーリー はこんな素材を使用しています。
        </Text>
      </Box>
      <Box p={7}>
        <Tabs>
          <TabList>
            <Tab color={'gray.100'}>GOLD LINE</Tab>
            <Tab color={'gray.100'}>BEST SELECT</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid
                px={[0, 0, 10]}
                py={[10, 10, 5]}
                templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']}
              >
                <GridItem>
                  <ProductCard product={products[0]} />
                </GridItem>
                <GridItem>
                  <ProductCard product={products[0]} />
                </GridItem>
                <GridItem>
                  <ProductCard product={products[0]} />
                </GridItem>
                <GridItem>
                  <ProductCard product={products[0]} />
                </GridItem>
                <GridItem>
                  <ProductCard product={products[0]} />
                </GridItem>
                <GridItem>
                  <ProductCard product={products[0]} />
                </GridItem>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Text color={'gray.100'}>Best SELECTラインナップ</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
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
