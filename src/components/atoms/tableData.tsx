import React from 'react'
import { Td } from '@chakra-ui/react'

const TableData: React.FC = ({ children }) => {
  return (
    <Td px={5} py={2} style={{ border: 'solid 2px #E2E8F0' }} fontSize={16}>
      {children}
    </Td>
  )
}

export default TableData
