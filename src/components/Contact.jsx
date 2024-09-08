import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from "@mui/icons-material/GitHub"
import Telegram from "@mui/icons-material/Telegram"
import { Box } from "@mui/material"

const Contact = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <Box sx={{ padding: 1 }}>
        <Telegram />
      </Box>
      <Box sx={{ padding: 1 }}>
        <GitHubIcon />
      </Box>
      <Box sx={{ padding: 1 }}>
        <EmailIcon />
      </Box>
    </Box>
  )
}

export default Contact