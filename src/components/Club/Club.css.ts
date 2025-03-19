import { style } from '@vanilla-extract/css';

export const moveButton = style({
  backgroundColor: '#39D69C',
  color: 'white',
  fontSize: '14px',
  fontWeight: 600,
  fontFamily: 'var(--font-kbo-bold)',
  padding: '16px 0',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  width: '100%',
  ':hover': {
    backgroundColor: '#2DB88D',
  },
});

export const triggerWrapper = style({});
