import { Typography } from "@mui/material"
import { EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import sixgaps from '../assets/images/6_gaps.png'
import summersolstice from '../assets/images/summer_solstice.png'
import triplecrown from '../assets/images/triple_crown.png'

import 'swiper/css';
import 'swiper/css/effect-cards';

const Personal = () => {
  const images = [sixgaps, summersolstice, triplecrown]

  const slide = (image) => {
    return (
      <SwiperSlide key={image}>
        <img
          alt={`${image}`}
          src={image}
        />
      </SwiperSlide>
    )
  }

  return (
    <div className="dark-background">
      <Typography variant='h4' className='centered'  sx={{padding: 3}}>
        Some rides I'm proud of
      </Typography>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {images.map((image) => {
          return slide(image)
        })}
      </Swiper>
    </div>
  )
}

export default Personal