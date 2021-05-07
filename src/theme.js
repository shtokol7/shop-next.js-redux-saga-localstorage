import { createUseStyles} from 'react-jss'


// медиазапросы
const up = (width) => {
  return `@media (min-width: ${width}px)`
};
const down = (width) => {
  return `@media (max-width: ${width}px)`
};

// брекпоинты
const bp = {
  bp_320: 0,
  bp_414: 414,
  bp_768: 768,
  bp_1024: 1024,
  bp_1280: 1280,
  bp_1366: 1366,
  bp_1600: 1600,
  bp_1900: 1900,
};

// цвета
const palette = {
  primary: {
    light: '#ffffff',
    light_milk: '#E6E6E6',
    dark: '#000000',
    forest: '#088A08',
    ocean: '#0000ff',
    blood: '#FF0000',
    sun: '#fe7200',
    sunLight: '#FFD700',
    shadow: 'rgba(0, 0, 0, 0.2)',
  },
  secondary: {
    shadow: 'rgba(0, 0, 0, 0.5)',
  }
};

// тема
export const theme = {
  up,
  down,
  bp,
  palette,

  typography: {
    h_1: {
      [up(bp.bp_320)]: {
        fontSize: '20px',
        fontWeight: 'bold',
      },
      [up(bp.bp_414)]: {
        fontSize: '24px'
      },
      [up(bp.bp_768)]: {
        fontSize: '24px'
      },
      [up(bp.bp_1024)]: {
        fontSize: '28px',
      },
      [up(bp.bp_1280)]: {
        fontSize: '28px',
      },
      [up(bp.bp_1366)]: {
        fontSize: '28px',
      },
      [up(bp.bp_1600)]: {
        fontSize: '38px',
      },
      [up(bp.bp_1900)]: {
        fontSize: '38px',
      },
    },

    body_1: {
      [up(bp.bp_320)]: {
        fontSize: '14px'
      },
      [up(bp.bp_414)]: {
        fontSize: '16px'
      },
      [up(bp.bp_768)]: {
        fontSize: '16px'
      },
      [up(bp.bp_1024)]: {
        fontSize: '18px',
      },
      [up(bp.bp_1280)]: {
        fontSize: '18px',
      },
      [up(bp.bp_1366)]: {
        fontSize: '18px',
      },
      [up(bp.bp_1600)]: {
        fontSize: '18px',
      },
      [up(bp.bp_1900)]: {
        fontSize: '18px',
      },
    },
  },

};


// глобальные стили
export const globalStyles = createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      fontFamily: 'Roboto, sans-serif',
    },
    body: {
      margin: '0px',
      padding: '0px',
      color: palette.primary.dark,
      background: palette.primary.light,
      fontSize: '14px',
    },
    'button, input': {
      padding: '0px',
      boxShadow: 'none',
      borderRadius: '0px',
      outline: 'none',
      // border: 'none',
    },
    button: {
      cursor: 'pointer',
      padding: '2px 5px',
    },
    a:{
      outline: 'none',
      textDecoration: 'none',
      color: palette.primary.dark
    },
    p: {
      margin: '0px',
    },
    textarea:{
      resize: 'vertical',
    },
    'h1, h2, h3, h4, h5, h6':{
      margin: '0',
    }
  },
});

