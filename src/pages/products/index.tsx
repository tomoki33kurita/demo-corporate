import React from 'react'
import SubHeader from '../../components/organisms/subHeader'
import ProductCard from '../../containers/products/productCard'
import { Text, Box, Grid, GridItem, Tab, TabList, TabPanels, TabPanel, Tabs } from '@chakra-ui/react'

const Product: React.VFC = () => {
  return (
    <Box minHeight={'100vh'}>
      <SubHeader title={'製品ラインナップ'} />
      <Box mx={[5, 5, 10]} my={5}>
        <Text px={[5, 0, 10]} fontSize={14} color={'gray.100'}>
          エールストーリー はこんな素材を使用しています。エールストーリー はこんな素材を使用しています。エールストーリー
          はこんな素材を使用しています。エールストーリー はこんな素材を使用しています。エールストーリー
          はこんな素材を使用しています。エールストーリー はこんな素材を使用しています。エールストーリー
          はこんな素材を使用しています。エールストーリー はこんな素材を使用しています。
        </Text>
      </Box>
      <Box p={[0, 0, 0, 5]}>
        <Tabs>
          <TabList>
            <Tab _selected={{ bg: 'gray.100', color: 'blue.500', fontWeight: 'bold' }} color={'white'}>
              GOLD LINE
            </Tab>
            <Tab _selected={{ bg: 'gray.100', color: 'blue.500', fontWeight: 'bold' }} color={'white'}>
              BEST SELECT
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text color={'gray.100'}>GOLD LINEラインナップ</Text>
              <Grid
                // px={[0, 0, 10]}
                py={[5, 5, 5]}
                templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']}
              >
                {goldLineProducts.map((product) => (
                  <GridItem>
                    <ProductCard product={product} />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel>
              <Text color={'gray.100'}>BEST SELECTラインナップ</Text>
              <Grid
                // px={[0, 0, 10]}
                py={[5, 5, 5]}
                templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)', 'repeat(2,1fr)', 'repeat(3,1fr)']}
              >
                {bestSelectProducts.map((product) => (
                  <GridItem>
                    <ProductCard product={product} />
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  )
}

const glBaseDir = '/classic/goldLine'
const goldLineProducts = [
  {
    model: '2B004',
    imageUrl: `${glBaseDir}/2b004.png`,
    discription: `小ぶりなグラブになっており、ヒンジを手口部分に近くしいいているため小指が聞きやすくなっています。\nウェブはポケット部を編み込みにし、深く破れにくい設計にしています。\n横振り縦振り両タイプに万能なグラブです。`,
    length: 27.8,
    colors: [
      { label: 'ブラック', colorCode: '#191818' },
      { label: 'オレンジ', colorCode: '#D67131' }
    ]
  },
  {
    model: '2B041',
    imageUrl: `${glBaseDir}/2b041.png`,
    discription: `セカンドショート向けの小ぶりなグラブ。\nヒンジを下げることにより小指の効きを良くしている。\nレギュラー巻きだが親指から紐を通しているため横になりすぎない。`,
    length: 27.8,
    colors: [
      { label: 'ブラック', colorCode: '#191818' },
      { label: 'オレンジ', colorCode: '#D67131' }
    ]
  },
  {
    model: 'SS061',
    imageUrl: `${glBaseDir}/ss061.png`,
    discription: `ヒンジを手口部分に近づけた設計にしているため、小指が効きやすくなっています。\nグラブ自体は一般的な大きさですが、2019年モデルのウェブを変更することにより、操作性、軽量感を味わえるグラブです。`,
    length: 28.3,
    colors: [
      { label: 'ブラック', colorCode: '#191818' },
      { label: 'オレンジ', colorCode: '#D67131' }
    ]
  },
  {
    model: 'SS062',
    imageUrl: `${glBaseDir}/ss062.png`,
    discription: `ウェブはクロスの下を編み込む設計。\nそのためポケット部が深くなりすぎず親指・人差し指つけ根が破れにくい。`,
    length: 28.3,
    colors: [
      { label: 'ブラック', colorCode: '#191818' },
      { label: 'オレンジ', colorCode: '#D67131' }
    ]
  },
  {
    model: 'SS016',
    imageUrl: `${glBaseDir}/ss016.png`,
    discription: `横振りタイプ。ポケット下で掴みやすくなっているグラブです。\nウェブはエッジのIウェブを採用し、紐の通し方にも工夫しており破れにくく、球際では打球に負けにくいのが特徴です。`,
    length: 27.0,
    colors: [
      { label: 'ブラック', colorCode: '#191818' },
      { label: 'オレンジ', colorCode: '#D67131' }
    ]
  },
  {
    model: '3B051',
    imageUrl: `${glBaseDir}/3b051.png`,
    discription: `Yell-storyで一番ポケットが深くしっかりと掴むことに特化したグラブ。\nウェブはエッジなので球際でも抜群の安定感を得られる。`,
    length: 28.7,
    colors: [
      { label: 'ブラック', colorCode: '#191818' },
      { label: 'オレンジ', colorCode: '#D67131' }
    ]
  }
]

const bsBaseDir = '/classic/bestSelect'
const bestSelectProducts = [
  {
    model: 'BS004',
    imageUrl: `${bsBaseDir}/bs004.png`,
    discription: `小ぶりなグラブになっており、ヒンジを手口部分に近くしいいているため小指が聞きやすくなっています。\n横振り縦振り両タイプに万能なグラブです。`,
    length: 27.8,
    colors: [
      { label: 'コルク', colorCode: '#9A6A4F' },
      { label: 'レッドオレンジ', colorCode: '#D2352D' }
    ]
  },
  {
    model: 'BS061',
    imageUrl: `${bsBaseDir}/bs061.png`,
    discription: `ヒンジを手口部分に近づけた設計にしているため、小指が効きやすくなっています。グラブ自体は一般的な大きさですが、2019年モデルのウェブを変更することにより、操作性、軽量感を味わえるグラブです`,
    length: 28.3,
    colors: [
      { label: 'コルク', colorCode: '#9A6A4F' },
      { label: 'レッドオレンジ', colorCode: '#D2352D' }
    ]
  },
  {
    model: 'BS016',
    imageUrl: `${bsBaseDir}/bs016.png`,
    discription: `横振りタイプ。ポケット下で掴みやすくなっているグラブです。ウェブはエッジのIウェブを採用し、紐の通し方にも工夫しており破れにくく、球際では打球に負けにくいのが特徴です。`,
    length: 27,
    colors: [
      { label: 'コルク', colorCode: '#9A6A4F' },
      { label: 'レッドオレンジ', colorCode: '#D2352D' }
    ]
  }
]

export default Product
