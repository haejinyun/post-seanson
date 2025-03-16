import { style } from '@vanilla-extract/css';

export const container = style({
  // display: 'flex',
  // flexDirection: 'column',

  // boxSizing: 'border-box',
  minHeight: '100vh',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  width: '100%',
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
  padding: '0px 24px 24px 24px',
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
