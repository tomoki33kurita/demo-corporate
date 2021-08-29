import React from 'react'
import Link from 'next/link'
import { Link as A } from '@chakra-ui/react'

type Props = {
  href: string
}

export const HoverLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href}>
      <A _hover={{ color: 'yellow.400' }} p={2}>
        {children}
      </A>
    </Link>
  )
}
