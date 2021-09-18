import React from 'react'
import Link from 'next/link'
import { Link as A } from '@chakra-ui/react'

type Props = {
  href: string
  brank?: boolean
}

export const HoverLink: React.FC<Props> = ({ href, children, brank }) => {
  return (
    <Link href={href} passHref>
      <A _hover={{ color: 'blue.500' }} p={2} target={brank ? '_blank' : '_self'}>
        {children}
      </A>
    </Link>
  )
}
