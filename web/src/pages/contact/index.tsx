import React from 'react'
import SubHeader from '../../components/organisms/subHeader'
import { Box, Flex, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react'

const Contact: React.VFC = () => {
  return (
    <Box>
      <SubHeader pageTitle={'お問い合わせ'} />
      <Flex justify={'center'} mx={'20'} my={'10'}>
        <FormControl>
          <Box>
            <FormLabel>お名前</FormLabel>
            <Input />
          </Box>
          <FormLabel>ふりがな</FormLabel>
          <Input />
          <FormLabel>メールアドレス</FormLabel>
          <Input type={'email'} />
          <FormLabel>お問い合わせ内容</FormLabel>
          <Textarea />
          <Flex justify={'center'}>
            <Button type="submit" paddingY={2} paddingX={4} marginY={8}>
              送信
            </Button>
          </Flex>
        </FormControl>
      </Flex>
    </Box>
  )
}

export default Contact
