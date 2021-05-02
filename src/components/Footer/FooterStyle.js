import { createUseStyles } from 'react-jss'

export const useStylesFooter = createUseStyles((theme) => ({
  footer: {
    width: '100%',
    flexShrink: '0',
    padding: '0px 15px',
    [theme.up(theme.bp.bp_320)]: {
      background: theme.palette.primary.light_milk,
    },
    [theme.up(theme.bp.bp_414)]: {
      padding: '5px 20px',
    },
  },

  footer__content: {
    [theme.up(theme.bp.bp_320)]: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px 0px',
    },
    '& > a': {
      [theme.up(theme.bp.bp_320)]: {
        color: theme.palette.primary.dark,
        textDecoration: 'none',
        marginRight: '30px',
      },
    },
  },

  footer__content_link: {
    ...theme.typography.body_1,
  },
  

}));