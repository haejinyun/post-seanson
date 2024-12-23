import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '1440px',
  height: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
});

export const carouselImageWrapper = style({
  width: '100%',

  margin: '0 auto',
});

export const carouselImage = style({
  width: '100%',
  maxWidth: '1440px',
  objectFit: 'cover',
  margin: '0 auto',
});
