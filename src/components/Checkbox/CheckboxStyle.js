import { createUseStyles } from 'react-jss'

export const useStylesCheckBox = createUseStyles((theme) => ({
  checkbox: {
    [theme.up(theme.bp.bp_320)]: {
      display: 'block',
      padding: '0 0 0 32px',
      position: 'relative',
      left: '0',
      top: '0',
      cursor: 'pointer',
      color: '#222425',
      fontSize: '14px',
    },
    '& > input': {
      [theme.up(theme.bp.bp_320)]: {
        display: 'none',
      },
      '&:checked + div': {
        [theme.up(theme.bp.bp_320)]: {
          backgroundColor: `${theme.palette.primary.forest}`,
          color: '#fff',
        },
      }
    },
  },
  
  checkbox_indicator: {
    [theme.up(theme.bp.bp_320)]: {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '16px',
      height: '16px',
      borderRadius: '3px',
      border: `2px solid ${theme.palette.primary.forest}`,
      color: '#fff',
      transition: 'background - color 0.35s, color 0.35s',
    },
  },
  
}));
