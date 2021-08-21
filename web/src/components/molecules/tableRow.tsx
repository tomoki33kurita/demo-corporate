// import styles from '../../styles/Home.module.css'

import TableHead from './../atoms/tableHead'
import TableData from './../atoms/tableData'
import { ReactNode } from 'react'

type Props = {
  head: string | number
  data: string | number | ReactNode
}

const TableRow: React.VFC<Props> = ({ head, data }) => {
  return (
    <tr className={'m-1'}>
      <TableHead>{head}</TableHead>
      <TableData>{data}</TableData>
    </tr>
  )
}

export default TableRow
