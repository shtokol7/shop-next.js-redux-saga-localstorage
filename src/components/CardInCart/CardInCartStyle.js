import { createUseStyles } from 'react-jss'

export const useStylesCardInCart = createUseStyles((theme) => ({
  // card_in_cart: {
  //   [theme.up(theme.bp.bp_320)]: {
  //     height: '370px',
  //     boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  //     padding: '0px 15px',
  //   },
  // },

  card_in_cart: {
    [theme.up(theme.bp.bp_320)]: {
      maxWidth: '500px',
      width: '100%',
      height: '100px',
      marginBottom: '10px',
      boxShadow: `0 0 10px ${theme.palette.primary.shadow}`,
      display: 'flex',
      alignItems: 'center',
    },
  },

  card_in_cart__wrap_img: {
    [theme.up(theme.bp.bp_320)]: {
      maxWidth: '74px',
      width: '100%',
      height: '100px',
    },
    '& > img': {
      [theme.up(theme.bp.bp_320)]: {
        width: '100%',
        height: '100%',
        display: 'block',
        objectFit: 'contain',
      },
    },
  },

  card_in_cart__wrap_info: {
    [theme.up(theme.bp.bp_320)]: {
      maxWidth: '200px',
      width: '100%',
      padding: '10px',
    },
  },

  card_in_cart__wrap_title: {
    [theme.up(theme.bp.bp_320)]: {
      marginBottom: '10px'
    },
  },

  card_in_cart__title: {
    [theme.up(theme.bp.bp_320)]: {
      ...theme.typography.body1,
    },
  },

  card_in_cart__wrap_btns: {
    [theme.up(theme.bp.bp_320)]: {
      maxWidth: '150px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      marginLeft: 'auto',
      paddingRight: '10px',
    },
  },

  card_in_cart__btn_basket_clear: {
    [theme.up(theme.bp.bp_320)]: {
      '& img': {
        width: '16px',
      },
    },
  },

}));