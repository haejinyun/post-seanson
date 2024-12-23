import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '12px',
  marginTop: '74px',
});

export const infoWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const infoTitle = style({
  fontSize: '30px',
  fontWeight: 'bold',
});

export const info = style({
  fontSize: '20px',
  color: '#B8C2CE',
});
