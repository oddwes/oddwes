import { Box, Typography } from '@mui/material'
import Contact from './Contact'

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
        }}
      >
        <Box>
          <Typography variant='h6'>
            oddwes
          </Typography>
        </Box>
        <Contact />
      </Box>
    </>
  )
}

export default Header