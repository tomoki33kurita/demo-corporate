import React from 'react'
import Link from 'next/link'
import { Link as A } from '@chakra-ui/react'

type Props = {
  href: string
}

export const HoverLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <A rounded={'base'} _hover={{ bg: 'gray.200' }}>
        {children}
      </A>
    </Link>
  )
}
