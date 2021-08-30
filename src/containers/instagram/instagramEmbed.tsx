import { Box } from '@chakra-ui/react'
import InstagramEmbed from 'react-instagram-embed'

export const InstagramEmbedDisplay: React.FC = () => {
  return (
    <Box>
      <InstagramEmbed
        // url={'https://www.instagram.com/i_studio_glove/'}
        // clientAccessToken={''}
        url={'https://www.instagram.com/tomoki_kurita/'}
        clientAccessToken={''}
        maxWidth={320}
      />
    </Box>
  )
}
