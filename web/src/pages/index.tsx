import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import { CaroucelSlider } from '../components/caroucelSlider'

const Home: React.VFC = () => {
  return (
    <Box>
      {/* <p className={'my-10 ml-10'}>クオリティの高い野球用品をご提供します。</p> */}
      <Box p={28} bgColor={'gray.100'}>
        <CaroucelSlider />
      </Box>
      <Box p={28} bgColor={'green.100'}>
        <Flex justify={'center'}>
          <Heading as={'h3'} fontSize={'x-large'}>
            お知らせ
          </Heading>
        </Flex>
        <Flex
          mx={'auto'}
          p={5}
          maxWidth={'800px'}
          border={'solid 2px'}
          borderColor={'gray.200'}
          borderRadius={'10px'}
        >
          <Text>aaa</Text>
          <Text>aaa</Text>
          <Text>aaa</Text>
          <Text>aaa</Text>
          <Text>aaa</Text>
        </Flex>
      </Box>
      <Box bgColor={'pink.100'} p={10}>
        <Flex
          alignItems={'center'}
          justify={'center'}
          wrap={'wrap'}
          maxWidth={'800px'}
          mx={'auto'}
          mb={0}
        >
          <Link href="/products">
            {/* 以下のstyleを排除して、gridレイアウトに変更 */}
            <a className={styles.card}>
              <h2>製品ラインナップ</h2>
              <p></p>
            </a>
          </Link>

          <Link href="/agancy">
            <a className={styles.card}>
              <h2>お取扱店一覧</h2>
              <p></p>
            </a>
          </Link>

          <Link href="/about">
            <a className={styles.card}>
              <h2>会社概要</h2>
              <p></p>
            </a>
          </Link>

          <Link href="/contact">
            <a className={styles.card}>
              <h2>お問い合わせ</h2>
              <p></p>
            </a>
          </Link>
        </Flex>
      </Box>
      <Box bgColor={'orange.100'} p={10} height={'xs'}>
        SNS表示領域
      </Box>
    </Box>
  )
}

export default Home
