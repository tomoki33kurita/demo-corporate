import React from 'react'
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Flex
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Navigation } from '../molecules/navigation'
import { HoverLink } from '../atoms/hoverLink'

export const DrawerMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>(null)
  return (
    <Flex alignItems={'center'}>
      <Button onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement={'left'} finalFocusRef={btnRef}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>メニュー</DrawerHeader>
            <DrawerBody>
              {/* todo onCloseの渡し方が微妙だけど、とりあえず実装 */}
              <Navigation onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <HoverLink href={'/'}>i studio</HoverLink>
    </Flex>
  )
}
