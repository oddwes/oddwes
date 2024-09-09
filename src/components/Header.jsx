import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import Contact from './Contact'

const Header = () => {
  return (
    <Grid container>
      <Grid size={2}>
        <Box
          sx={{ margin: 2 }}
          display='flex'
          direction='row'
          justifyContent='flex-start'
        >
          <Typography variant='h6'>
            oddwes
          </Typography>
        </Box>
      </Grid>
      <Grid size={8}>
        <Box sx={{ margin: 2 }}>
          <Typography variant='h6'>
            Work | Projects | Personal
          </Typography>
        </Box>
      </Grid>
      <Grid size={2}>
        <Box sx={{ margin: 2 }}>
          <Contact />
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header