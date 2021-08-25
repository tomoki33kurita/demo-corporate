import React from 'react'
import { Stack } from '@chakra-ui/react'
import { HoverLink } from '../atoms/hoverLink'

type Props = {
  onClose: () => void
}

export const Navigation: React.VFC<Props> = ({ onClose }) => {
  return (
    <Stack as={'nav'} onClick={() => onClose()}>
      <HoverLink href={'/products'}>製品ラインナップ</HoverLink>
      <HoverLink href={'/agancy'}>お取扱店</HoverLink>
      <HoverLink href={'/about'}>会社概要</HoverLink>
      <HoverLink href={'/contact'}>お問い合わせ</HoverLink>
    </Stack>
  )
}