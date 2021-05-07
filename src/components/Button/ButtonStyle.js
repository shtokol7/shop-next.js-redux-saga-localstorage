import { createUseStyles } from 'react-jss'

export const useStylesButton = createUseStyles((theme) => ({
  button__brick: {
    [theme.up(theme.bp.bp_320)]: {
      width: '100%',
      height: '30px',
      border: 'none',
      borderRadius: '3px',
      background: `${theme.palette.primary.forest}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transitionDuration: '0.2s',
      boxShadow: `0 0 10px ${theme.palette.primary.shadow}`,
      
      '&:hover': {
        boxShadow: `0 0 10px ${theme.palette.secondary.shadow}`,
      },
    },
    '&.yellow': {
      background: `${theme.palette.primary.sunLight}`,
    }
  },
  
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
