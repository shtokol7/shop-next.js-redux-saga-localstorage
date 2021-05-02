import { createUseStyles } from 'react-jss'

export const useStylesHeader = createUseStyles((theme) => ({
  header: {
    width: '100%',
    [theme.up(theme.bp.bp_320)]: {
      marginBottom: '30px',
    },
    [theme.up(theme.bp.bp_768)]: {
      marginBottom: '40px',
    },
  },
  
  header__top_part: {
    [theme.up(theme.bp.bp_320)]: {
      minHeight: '10px',
      background: theme.palette.primary.dark,
      padding: '5px 15px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    [theme.up(theme.bp.bp_414)]: {
      padding: '5px 20px',
    },
  },

  header__wrap_logo: {
    [theme.up(theme.bp.bp_320)]: {
      width: '100px',
      height: '30px',
    },
    '& > img': {
      [theme.up(theme.bp.bp_320)]: {
        width: '100%',
        display: 'block',
        height: '30px',
      },
    },
  },

  header__wrap_navigation: {
    [theme.up(theme.bp.bp_320)]: {
      border: '1px solid #000',
      maxWidth: '300px',
      height: '30px',
    },
  },

  header__wrap_icon_cart: {
    [theme.up(theme.bp.bp_320)]: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
  },

  header__icon_cart: {
    [theme.up(theme.bp.bp_320)]: {
      width: '30px',
      height: '30px',
      marginRight: '10px',
    },
    '& > img': {
      [theme.up(theme.bp.bp_320)]: {
        width: '100%',
        display: 'block',
        height: '30px',
      },
    },
  },

  header__wrap_number_icon_cart: {
    [theme.up(theme.bp.bp_320)]: {
      width: '20px',
      height: '20px',
      borderRadius: '50px',
      background: theme.palette.primary.forest,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },






  header__bottom_part: {
    [theme.up(theme.bp.bp_320)]: {
      minHeight: '40px',
      background: theme.palette.primary.light_milk,
      padding: '20px 15px',
      display: 'flex',
      justifyContent: 'space-between',
    },
    [theme.up(theme.bp.bp_414)]: {
      padding: '20px 20px',
    },
  },
  
}));