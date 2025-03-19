import { style } from '@vanilla-extract/css';

export const positionButton = style({});

export const positionSpan = style({});

export const positionListWrapper = style({
  display: 'flex',
  width: '100%',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  padding: '16px 8px',
  boxSizing: 'border-box',
  borderBottom: '2px solid #F3F3F3',
});

export const playerListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '300px', // 이후에는 Min max 두고 calc로 적절하게 잡아가기
  overflowY: 'auto',
  padding: '16px 8px',
  boxSizing: 'border-box',
  borderBottom: '2px solid #F3F3F3',
});

export const playerUnitButtonWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'transparent',
  // selectors: {
  //   '&[data-state="active"]': {
  //     backgroundColor: '#F3F3F3',
  //     cursor: 'not-allowed',
  //   },
  // },
});

export const playerUnit = style({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  padding: '8px ',
  boxSizing: 'border-box',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#F3F3F3',
  },
});

export const moveButton = style({
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
    '&[disabled]': {
      color: '#a0a0a0',
      cursor: 'not-allowed',
    },
  },
});
