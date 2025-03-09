import { style } from '@vanilla-extract/css';

export const triggerWrapper = style({
  backgroundColor: '#E4E4E4',
  padding: '10px 20px',
  fontSize: '14px',
  fontWeight: 600,
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  cursor: 'pointer',
  color: '#27214D',
  width: '100%',
  boxSizing: 'border-box',
  height: '48px',
});

export const triggerList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',

  backgroundColor: '#E4E4E4',
  borderRadius: '10px',
  // maxWidth: '401px',
  // minWidth: '320px',
  // width: '100%',

  // boxSizing: 'border-box',
});

export const triggerUnit = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '401px',
  minWidth: '320px',
  width: '100%',
  // backgroundColor: 'blue',
  backgroundColor: '#E4E4E4',
  padding: '12px',
  boxSizing: 'border-box',
  borderRadius: '10px',
  ':hover': {
    backgroundColor: '#D4D4D4',
  },
});
