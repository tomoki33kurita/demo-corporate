import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import Link from 'next/link'
import { DrawerMenu } from './DrawerMenu'
import { Box, Flex, Link as A, List, ListItem } from '@chakra-ui/react'
import { HoverLink } from '../atoms/hoverLink'

const Header: React.VFC = () => {
  const [isMobile] = useMediaQuery('(max-width:768px )')
  return (
    <header>
      {isMobile ? (
        <Flex alignItems={'center'} justifyContent={'center'} background={'gray.100'} height={'60px'}>
          <DrawerMenu />
          <Box textAlign={'center'} _hover={{ color: 'blue.500' }}>
            <HoverLink href={'/'}>i studio</HoverLink>
          </Box>
        </Flex>
      ) : (
        <Flex
          background={'gray.100'}
          width={'full'}
          justifyContent={'space-between'}
          borderBottom={'solid 1px'}
          borderColor={'gray.200'}
          py={2}
        >
          <Box p={4} ml={4}>
            <Link href="/">
              <A _hover={{ color: 'blue.500' }}>i studio</A>
            </Link>
          </Box>
          <Box>
            <nav>
              <List display={'flex'}>
                <ListItem p={4}>
                  <HoverLink href={'/products'}>製品</HoverLink>
                </ListItem>
                <ListItem p={4}>
                  <HoverLink href={'/gallery'}>ギャラリー</HoverLink>
                </ListItem>
                <ListItem p={4}>
                  <HoverLink href={'/agancy'}>お取扱店</HoverLink>
                </ListItem>
                <ListItem p={4}>
                  <HoverLink href={'/about'}>会社概要</HoverLink>
                </ListItem>
                <ListItem p={4}>
                  <HoverLink href={'/contact'}>お問い合わせ</HoverLink>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Flex>
      )}
    </header>
  )
}

export default Header
