import { createUseStyles } from 'react-jss'

export const useStylesProductsContainer = createUseStyles((theme) => ({
  products_container: {
    [theme.up(theme.bp.bp_320)]: {
      width: '100%',
    },
  },

  products_container__wrap_all_card: {
    [theme.up(theme.bp.bp_320)]: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0 auto',
      padding: '0 15px',
    },
    [theme.up(theme.bp.bp_414)]: {
      padding: '0px 20px',
    },
  },

  products_container__wrap_card: {
    [theme.up(theme.bp.bp_320)]: {
      width: '100%',
      marginBottom: '20px',
    },
    [theme.up(theme.bp.bp_414)]: {
      width: '48%',
      marginRight: '4%',
      '&:nth-of-type(2n)': {
        marginRight: '0',
      }
    },
    [theme.up(theme.bp.bp_768)]: {
      width: '32%',
      marginRight: '2%',
      '&:nth-of-type(2n)': {
        marginRight: '2%',
      },
      '&:nth-of-type(3n)': {
        marginRight: '0',
      }
    },
    [theme.up(theme.bp.bp_1024)]: {
      width: '23%',
      marginRight: '2.6%',
      '&:nth-of-type(2n)': {
        marginRight: '2.6%',
      },
      '&:nth-of-type(3n)': {
        marginRight: '2.6%',
      },
      '&:nth-of-type(4n)': {
        marginRight: '0',
      }
    },
    [theme.up(theme.bp.bp_1366)]: {
      width: '19%',
      marginRight: '1.2%',
      '&:nth-of-type(2n)': {
        marginRight: '1.2%',
      },
      '&:nth-of-type(3n)': {
        marginRight: '1.2%',
      },
      '&:nth-of-type(4n)': {
        marginRight: '1.2%',
      },
      '&:nth-of-type(5n)': {
        marginRight: '0',
      }
    },
    
  },

}));