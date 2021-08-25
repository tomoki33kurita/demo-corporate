import React from 'react'
import { Th } from '@chakra-ui/react'

const TableHead: React.FC = ({ children }) => {
  return (
    <Th px={5} py={2} style={{ border: 'solid 2px #E2E8F0' }}>
      {children}
    </Th>
  )
}

export default TableHead
