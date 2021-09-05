import { Box } from '@chakra-ui/react'
import React from 'react'

export const TimeLineEmbedded: React.VFC = () => {
  React.useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  return <Box></Box>
}
