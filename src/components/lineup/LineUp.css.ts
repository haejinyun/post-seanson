import { style } from '@vanilla-extract/css';

export const container = style({
  // display: 'flex',
  // flexDirection: 'column',

  // boxSizing: 'border-box',
  minHeight: '100vh',
  height: '100%',
  margin: '0 auto',
  // maxWidth: '450px',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const backLogoWrapper = style({
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
});

export const containerWrapper = style({
  // zIndex: 2,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  minWidth: '320px',
  backgroundColor: '  #F2F3F6',
  width: '100%',
  maxWidth: '450px',
  padding: '0px 24px 24px 24px',
  boxSizing: 'border-box',
});

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '48px',
  width: '100%',
  color: '#fff',
  fontSize: '20px',
  fontWeight: 600,
  padding: '36px 0px',
  boxSizing: 'border-box',
});

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  zIndex: 2,
});

export const playerListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  // backgroundColor: '#F2F3F6',
});

export const dateTitle = style({ display: 'flex', justifyContent: 'center' });

export const playerUnit = style({
  padding: '12px 0px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
});

export const playerInfoSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const playerName = style({ display: 'flex', fontSize: '13px', justifyContent: 'center' });

export const buttonTest = style({
  color: 'white',
  fontSize: '14px',
  fontWeight: 700,
  padding: '16px 24px',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: 'var(--button-bg)', // CSS 변수 사용
  selectors: {
    '&:hover': {
      backgroundColor: 'var(--button-hover-bg)', // Hover 시 CSS 변수 적용
    },
  },
});
