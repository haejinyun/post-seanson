import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body, h1, h2, h3, h4, button, p, ul, ol, li', {
  margin: 0,
  padding: 0,
  fontFamily: 'var(--font-kbo-medium)',
});

globalStyle('html, body', {
  msOverflowStyle: 'none' /* Internet Explorer and Edge */,
  scrollbarWidth: 'none' /* Firefox */,
  minHeight: '100vh',
  fontFamily: 'var(--font-kbo-medium)',
});

/* Chrome, Safari, and Opera */
globalStyle('::-webkit-scrollbar', {
  display: 'none',
});

globalStyle('button', {
  border: 'none',
  backgroundColor: 'transparent',
  fontFamily: 'var(--font-kbo-medium)',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'black',
  fontFamily: 'var(--font-kbo-medium)',
});

globalStyle('ul', {
  listStyle: 'none',
  paddingLeft: '0px ',
  fontFamily: 'var(--font-kbo-medium)',
});
