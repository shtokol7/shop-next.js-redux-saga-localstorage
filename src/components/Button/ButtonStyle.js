import { createUseStyles } from 'react-jss'

export const useStylesButton = createUseStyles((theme) => ({
  button__circle: {
    [theme.up(theme.bp.bp_320)]: {
      width: '30px',
      height: '30px',
      border: 'none',
      borderRadius: '50px',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transitionDuration: '0.2s',
      boxShadow: `0 0 10px ${theme.palette.primary.shadow}`,
      '& img': {
        width: '20px',
      },
      '&:hover': {
        boxShadow: `0 0 10px ${theme.palette.secondary.shadow}`,
      },
    },
  },
  
}));
