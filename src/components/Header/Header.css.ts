import layout from '@/styles/layout';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: layout.maxLayoutWidth.maxWidth,
  width: '100%',
  margin: '0 auto',
  padding: '0 0px 0 20px',
  boxSizing: 'border-box',
});

export const topHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 0',
});

export const topLogo = style({
  width: '189px',
  height: '44px',
});

export const dropDownTrigger = style({
  width: '80px',
  height: '80px',
  backgroundColor: '#262626',
});

export const dropDownTriggerSpan = style({
  fontSize: '40px',
  color: 'white',
});

export const dropdownMenuContent = style({
  position: 'absolute',
  zIndex: 1,
  left: '-192px',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)',
});

export const dropdownMenuItem = style({
  border: 'none',
});

export const clubUnit = style({
  width: '232px',
  height: '128px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  backgroundColor: 'rgba(235, 238, 243, 0.9)',
  ':hover': {
    backgroundColor: 'rgba(184, 194, 206, 0.9)',
  },
});
