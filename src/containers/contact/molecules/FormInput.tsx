import React from 'react'
import { Box, FormLabel, Input } from '@chakra-ui/react'

type Props = {
  label: string
  type?: string
}

export const FormInput: React.VFC<Props> = ({ label, type }) => {
  return (
    <Box mb={3}>
      <FormLabel color={'gray.100'} fontWeight={'bold'}>
        {label}
      </FormLabel>
      <Input type={type || ''} backgroundColor={'gray.100'} />
    </Box>
  )
}
