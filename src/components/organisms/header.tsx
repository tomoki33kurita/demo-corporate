import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query'
import Link from 'next/link'
import { DrawerMenu } from './DrawerMenu'
import { Box, Flex, Link as A, List, ListItem } from '@chakra-ui/react'
import { HoverLink } from '../atoms/hoverLink'

const Header: React.VFC = () => {
  const [isMobile] = useMediaQuery('(max-width:768px )')
  return (
    <header className={'h-20'}>
      {isMobile ? (
        <Flex alignItems={'center'}>
          <DrawerMenu />
          <Box textAlign={'center'} background={'yellow.400'} width={'full'} py={3}>
            i studio
          </Box>
        </Flex>
      ) : (
        <Flex
          width={'full'}
          justifyContent={'space-between'}
          borderBottom={'solid 1px'}
          borderColor={'gray.200'}
          py={2}
        >
          <Box p={4} ml={4}>
            <Link href="/">
              <A _hover={{ color: 'yellow.400' }}>i studio</A>
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
