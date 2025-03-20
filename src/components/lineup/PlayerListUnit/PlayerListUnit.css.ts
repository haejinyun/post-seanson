import { style } from '@vanilla-extract/css';

export const playerUnit = style({
  padding: '12px 0px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'transparent',
});

export const playerInfoSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const playerName = style({ display: 'flex', fontSize: '13px', justifyContent: 'center' });
