import { createUseStyles } from 'react-jss'

export const useStylesLayout = createUseStyles((theme) => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },

  layout__content: {
    flexGrow: '1',
  },

}));