import React, { ReactNode } from 'react'
import { Tr } from '@chakra-ui/react'
import TableHead from './../atoms/tableHead'
import TableData from './../atoms/tableData'

type Props = {
  head: string | number
  data: string | number | ReactNode
}

const TableRow: React.VFC<Props> = ({ head, data }) => {
  return (
    <Tr margin={1}>
      <TableHead>{head}</TableHead>
      <TableData>{data}</TableData>
    </Tr>
  )
}

export default TableRow
