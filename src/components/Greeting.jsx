import { Avatar, Box, Typography } from "@mui/material"
import avatar from '../assets/images/avatar.png'

const Greeting = () => {
  return (
    <>
      <Typography variant='h3'>
        hi 👋 I'm oddwes!
      </Typography>
      <Box sx={{padding: 1}}>
        <Avatar
          alt='avatar'
          src={avatar}
          sx={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '20%',
            height: '20%'
          }}
        />
      </Box>
    </>
  )
}

export default Greeting