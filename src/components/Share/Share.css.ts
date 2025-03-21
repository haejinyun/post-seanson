import { style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100vh',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '  #F2F3F6',
  width: '100%',
});

export const downloadWrapper = style({
  backgroundColor: '  #F2F3F6',
  position: 'relative',
});

export const containerWrapper = style({
  position: 'relative',
  backgroundColor: ' #F2F3F6',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  minWidth: '320px',
  width: '100%',
  maxWidth: '450px',
  boxSizing: 'border-box',
});

export const backLogoWrapper = style({
  position: 'absolute',
  objectFit: 'contain',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,
});

export const buttonContainerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  minWidth: '320px',
  width: '100%',
  maxWidth: '450px',
  boxSizing: 'border-box',
  padding: '0px 24px 24px 24px',
});

export const header = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '48px',
  color: '#fff',
  fontSize: '20px',
  fontWeight: 600,
  padding: '36px 0px',
  boxSizing: 'border-box',
});

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10,
});

export const playerListWrapper = style({
  padding: '0px 24px 0px 24px',
  display: 'flex',
  flexDirection: 'column',
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
  gap: '8px',
});

export const playerName = style({ display: 'flex', justifyContent: 'center' });

export const buttonTest = style({
  color: 'white',
  fontSize: '14px',
  fontWeight: 700,
  padding: '16px 0',
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
