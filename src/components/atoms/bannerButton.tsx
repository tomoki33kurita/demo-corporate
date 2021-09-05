import React from 'react'
import { Link as A } from '@chakra-ui/react'
import Link from 'next/link'

type Props = {
  href: string
  heading: string
}

export const BannerButton: React.VFC<Props> = ({ href, heading }) => {
  return (
    <Link href={href}>
      <A
        backgroundColor={'gray.100'}
        m={1}
        p={7}
        textAlign={'left'}
        border={'solid 1px'}
        borderColor={'gray.100'}
        _hover={{
          textDecoration: 'none',
          color: 'blue.500',
          borderColor: 'blue.500'
        }}
        width={['100%', '100%', '100%', '49%']}
        fontSize={'xl'}
      >
        {heading}
      </A>
    </Link>
  )
}
