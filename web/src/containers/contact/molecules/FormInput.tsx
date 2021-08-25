import React from 'react'
import { Box, FormLabel, Input } from '@chakra-ui/react'

type Props = {
  label: string
  type?: string
}

export const FormInput: React.VFC<Props> = ({ label, type }) => {
  return (
    <Box mb={3}>
      <FormLabel>{label}</FormLabel>
      <Input type={type || ''} />
    </Box>
  )
}
