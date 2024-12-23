import { style, styleVariants } from '@vanilla-extract/css';

export const flex = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
});

export const cardItem = styleVariants({
  open: {
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'column',
    width: '345px',
    height: '210px',
    padding: '18px',
    borderRadius: '5px',
    backgroundColor: 'white',
  },

  closed: {
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100px',
    height: '210px',
    padding: '16px 0 0 0',
    borderRadius: '5px',
    backgroundColor: 'white',
  },
});

export const dateEng = style({
  fontSize: '16px',
  color: '#B8C2CE',
  marginTop: '4px',
  textAlign: 'left',
});

export const temperatureSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'flex-end',
  gap: '15px',
});

export const temperature = style({
  fontSize: '36px',
});

export const temperatureDescription = style({
  fontSize: '16px',
  color: '#B8C2CE',
  textAlign: 'left',
});

export const weatherImageSection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'flex-end',
  gap: '15px',
});

export const weatherImageDescription = style({
  fontSize: '16px',
  color: '#B8C2CE',
  textAlign: 'left',
});

export const cardTitle = styleVariants({
  open: {
    fontSize: '19px',
    textAlign: 'left',
  },
  closed: {
    fontSize: '19px',
  },
});

export const cardDiv = style({
  margin: '13px 0',
  height: '1px',
  width: '78px',
  backgroundColor: '#EBEEF3',
});

export const test = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
});

export const cardImage = style({
  width: 'auto',
});

export const cardTemperature = style({
  fontSize: '33px',
});

export const isOpenCardItem = style({
  display: 'flex',
  boxSizing: 'border-box',
  flexDirection: 'column',
  alignItems: 'center',
  width: '345px',
  height: '210px',
  padding: '18px',
  borderRadius: '5px',
  backgroundColor: 'white',
});
