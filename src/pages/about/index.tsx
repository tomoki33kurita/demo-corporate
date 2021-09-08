import React from 'react'
import TableRow from '../../components/molecules/tableRow'
import SubHeader from '../../components/organisms/subHeader'
import { Text, Box, Flex, Table, Tbody } from '@chakra-ui/react'

const About: React.VFC = () => {
  return (
    <Box minHeight={'100vh'} pb={5}>
      <SubHeader title={'会社概要'} />
      <Box m={[5, 5, 10]}>
        <Text p={[5, 5, 10]} color={'gray.100'}>
          エールストーリーは2017年に創業しました。奈良を活動拠点としています。エールストーリーは2017年に創業しました。奈良を活動拠点としています。エールストーリーは2017年に創業しました。奈良を活動拠点としています。エールストーリーは2017年に創業しました。奈良を活動拠点としています。エールストーリーは2017年に創業しました。奈良を活動拠点としています。エールストーリーは2017年に創業しました。奈良を活動拠点としています。エールストーリーは2017年に創業しました。奈良を活動拠点としています。エールストーリーは2017年に創業しました。奈良を活動拠点としています。エールストーリーは2017年に創業しました。奈良を活動拠点としています。
        </Text>
      </Box>
      <Flex m={[5, 5, 10]} justify={'center'} backgroundColor={'gray.100'}>
        <Table border={'gray'}>
          <Tbody>
            <TableRow head={'会社名'} data={'i studio'} />
            <TableRow head={'代表者'} data={'石川佳和'} />
            <TableRow head={'本社'} data={'〒633-0067 奈良県桜井市大福156-4 TEL:0744-46-5181 FAX:0744-46-5182'} />
            <TableRow head={'創業'} data={'2017年7月'} />
            <TableRow head={'資本金'} data={'1000万円'} />
            <TableRow head={'在職人数'} data={'6人'} />
            <TableRow head={'事業内容'} data={'野球用品のデザイン・企画・製造・販売'} />
          </Tbody>
        </Table>
      </Flex>
      {/* <Flex>
        google map を挿入する
      </Flex> */}
    </Box>
  )
}

export default About
