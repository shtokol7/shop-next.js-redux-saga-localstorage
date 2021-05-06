import { createUseStyles } from 'react-jss'

export const useStylesLayout = createUseStyles((theme) => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },

  layout__content: {
    [theme.up(theme.bp.bp_320)]: {
      padding: '0 15px 20px 15px',
      flexGrow: '1',
    },
    [theme.up(theme.bp.bp_414)]: {
      padding: '0 20px 20px 20px',
    },
  },

}));