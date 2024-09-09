import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from "@mui/icons-material/GitHub"
import Telegram from "@mui/icons-material/Telegram"
import { Box, Link } from "@mui/material"

const Contact = () => {
  const telegramLink = 'https://t.me/oddwes'
  const githubLink = 'https://github.com/oddwes'
  const emailAddress = 'oddwes3.0@gmail.com'

  const socialLink = (link, component) => {
    return (
      <Box sx={{ padding: 1 }}>
        <Link href={link} color="inherit" target="_blank" rel="noopener noreferrer">
          {component}
        </Link>
      </Box>
    )
  }

  const emailLink = () => {
    return (
      <Box sx={{ padding: 1 }}>
        <Link
          href={`mailto:${emailAddress}`}
          color="inherit"
        >
          <EmailIcon />
        </Link>
      </Box>
    )
  }

  return (
    <Box
      display='flex'
      direciton='row'
      justifyContent='flex-end'
    >
      {socialLink(telegramLink, <Telegram />)}
      {socialLink(githubLink, <GitHubIcon />)}
      {emailLink()}
    </Box>
  )
}

export default Contact