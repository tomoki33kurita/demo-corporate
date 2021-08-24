import React from 'react'
import { Td } from '@chakra-ui/react'

const TableData: React.FC = ({ children }) => {
  return (
    <Td padding={5} style={{ border: 'solid 2px #E2E8F0' }}>
      {children}
    </Td>
  )
}

export default TableData
