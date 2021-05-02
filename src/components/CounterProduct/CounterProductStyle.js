import { createUseStyles } from 'react-jss'

export const useStylesCounterProduct = createUseStyles((theme) => ({
  counter_product: {
    [theme.up(theme.bp.bp_320)]: {
      display: 'flex',
      alignItems: 'center',
      width: '90px',
      height: '30px',
    },
  },

  counter_product__wrap_count: {
    [theme.up(theme.bp.bp_320)]: {
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  counter_product__count: {
    [theme.up(theme.bp.bp_320)]: {
      
    },
  },

  counter_product__btn: {
    [theme.up(theme.bp.bp_320)]: {
      '& img': {
        width: '14px',
      },
    },
  },

}));