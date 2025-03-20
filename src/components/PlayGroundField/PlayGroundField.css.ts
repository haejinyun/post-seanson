import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  position: 'relative',
  // minWidth: '400px',
  maxWidth: '450px',
  width: '90%',
  padding: '0 24px',
  boxSizing: 'border-box',
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
});

export const parkImage = style({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 30,
  objectFit: 'contain',
  display: 'block',
  margin: '0 auto',
});

export const positionListWrapper = style({});

export const playerPosition = recipe({
  base: {
    position: 'absolute',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: 'clamp(30px, 7vw, 60px)', // 최소 30px, 최대 60px
    aspectRatio: '47 / 59', // width:height 비율 유지
    border: '3px solid black',
    overflow: 'hidden',
  },

  variants: {
    position: {
      leftOutfield: {
        top: '25%',
        left: '12%',
      },
      middleOutfield: {
        top: '8%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      rightOutfield: {
        top: '25%',
        right: '12%',
      },
      oneInfield: {
        top: '60%',
        right: '22%',
      },
      twoInfield: {
        top: '43%',
        right: '28%',
      },
      shortstopInfield: {
        top: '43%',
        left: '28%',
      },
      threeInfield: {
        top: '60%',
        left: '22%',
      },
      pitcher: {
        top: '55%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      catcher: {
        top: '78%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      dh: {
        top: '78%',
        right: '10%',
      },
    },
  },
});

export const playerPositionPlayerImage = recipe({
  base: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: 'clamp(30px, 7vw, 60px)', // 최소 30px, 최대 60px
    aspectRatio: '47 / 59', // width:height 비율 유지
    border: '3px solid black',
    overflow: 'hidden',
  },

  variants: {
    position: {
      leftOutfield: {
        top: '25%',
        left: '12%',
      },
      middleOutfield: {
        top: '8%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      rightOutfield: {
        top: '25%',
        right: '12%',
      },
      oneInfield: {
        top: '60%',
        right: '22%',
      },
      twoInfield: {
        top: '43%',
        right: '28%',
      },
      shortstopInfield: {
        top: '43%',
        left: '28%',
      },
      threeInfield: {
        top: '60%',
        left: '22%',
      },
      pitcher: {
        top: '55%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      catcher: {
        top: '78%',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      dh: {
        top: '78%',
        right: '10%',
      },
    },
  },
});

export const playerImage = style({
  objectFit: 'contain',
});
