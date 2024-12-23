'use client';

import Image from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bearsMainBanner from '@/assets/png/bearsMainBanner.png';
import hanwhsMainBanner from '@/assets/png/hanwhaMainBanner.png';
import * as S from './MainCarousel.css';

const CAROUSEL_INFO = [
  {
    img: bearsMainBanner,
    link: 'https://www.hanwhaeagles.co.kr/index.do',
  },
  {
    img: hanwhsMainBanner,
    link: 'https://www.hanwhaeagles.co.kr/index.do',
  },
];

function MainCarousel() {
  return (
    <div className={S.container}>
      <Slider
        dots
        infinite
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay // 자동 캐러셀
        autoplaySpeed={2000}
        // dotsClass={S.dots}
      >
        {CAROUSEL_INFO.map(info => (
          <div key={info.link} className={S.carouselImageWrapper}>
            <Image
              width={1440}
              height={720}
              src={info.img}
              alt="test"
              className={S.carouselImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainCarousel;
