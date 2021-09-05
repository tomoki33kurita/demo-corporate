import React from 'react'
import SubHeader from '../../components/organisms/subHeader'
import { Box, Flex, FormControl, FormLabel, Textarea, Button } from '@chakra-ui/react'
import { FormInput } from '../../containers/contact/molecules/FormInput'

const Contact: React.VFC = () => {
  return (
    <Box minHeight={'100vh'}>
      <SubHeader title={'お問い合わせ'} />
      <Flex justify={'center'} mx={'10'} my={'10'}>
        <FormControl>
          <FormInput label={'お名前'} />
          <FormInput label={'ふりがな'} />
          <FormInput label={'メールアドレス'} type={'email'} />
          <FormLabel fontWeight={'bold'} color={'gray.100'}>
            お問い合わせ内容
          </FormLabel>
          <Textarea backgroundColor={'gray.100'} />
          <Flex justify={'center'}>
            <Button
              type="submit"
              paddingY={2}
              paddingX={4}
              marginY={8}
              color={'blue.500'}
              _hover={{ background: 'blue.500', color: 'gray.100' }}
              _active={{ background: 'blue.500' }}
            >
              送信
            </Button>
          </Flex>
        </FormControl>
      </Flex>
    </Box>
  )
}

export default Contact
