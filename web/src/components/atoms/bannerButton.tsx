import Link from 'next/link'
import React from 'react'
import { Link as A } from '@chakra-ui/react'

type Props = {
  href: string
  heading: string
}

export const BannerButton: React.VFC<Props> = ({ href, heading }) => {
  return (
    <Link href={href}>
      <A
        m={1}
        p={10}
        textAlign={'left'}
        color={'#aaa'}
        border={'solid 1px #aaa'}
        _hover={{
          textDecoration: 'none',
          color: 'yellow.400',
          borderColor: 'yellow.400'
        }}
        width={['100%', '100%', '100%', '49%']}
        fontSize={'xl'}
      >
        {heading}
      </A>
    </Link>
  )
}
