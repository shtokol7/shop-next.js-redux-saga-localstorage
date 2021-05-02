import { createUseStyles } from 'react-jss'

export const useStylesCardProduct = createUseStyles((theme) => ({
  card_product: {
    [theme.up(theme.bp.bp_320)]: {
      height: '370px',
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      padding: '0px 15px',
    },
    '&:hover p': {
      color: theme.palette.primary.sun,
    },
  },

  card_product__wrap_img: {
    [theme.up(theme.bp.bp_320)]: {
      maxWidth: '200px',
      width: '100%',
      height: '270px',
      margin: '0 auto',
      marginBottom: '15px',
    },
    '& > img': {
      [theme.up(theme.bp.bp_320)]: {
        width: '100%',
        display: 'block',
        objectFit: 'contain',
        height: '100%',
      },
    },
  },

  card_product__wrap_title: {
    [theme.up(theme.bp.bp_320)]: {
      marginBottom: '10px',
    },
  },

  card_product__title: {
    ...theme.typography.body_1,
    transitionDuration: '0.3s',
  },

  card_product__wrap_price_button: {
    [theme.up(theme.bp.bp_320)]: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
  },

  card_product__price: {
    [theme.up(theme.bp.bp_320)]: {
      
    },
  },

}));