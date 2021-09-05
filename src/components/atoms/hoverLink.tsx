import React from 'react'
import Link from 'next/link'
import { Link as A } from '@chakra-ui/react'

type Props = {
  href: string
}

export const HoverLink: React.FC<Props> = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <A _hover={{ color: 'yellow.400' }} p={2} target={'_brank'}>
        {children}
      </A>
    </Link>
  )
}
