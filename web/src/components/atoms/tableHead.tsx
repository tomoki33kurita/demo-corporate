import React from 'react'
import { Th } from '@chakra-ui/react'

const TableHead: React.FC = ({ children }) => {
  return (
    <Th padding={5} style={{ border: 'solid 2px #E2E8F0' }}>
      {children}
    </Th>
  )
}

export default TableHead
