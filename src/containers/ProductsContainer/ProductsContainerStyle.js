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

  products_container__form: {
    [theme.up(theme.bp.bp_320)]: {
      width: '100%',
    },
  },

  products_container__wrap_filter_panel: {
    [theme.up(theme.bp.bp_320)]: {
      width: '100%',
      marginBottom: '30px',
      minHeight: '84px',
    },
    [theme.up(theme.bp.bp_768)]: {
      display: 'flex',

    },
  },

  products_container__wrap_filter_btn: {
    [theme.up(theme.bp.bp_320)]: {
      maxWidth: '100px',
      width: '100%',
      marginBottom: '20px',
    },
    [theme.up(theme.bp.bp_768)]: {
      marginRight: '30px'
    },
  },

  products_container__wrap_filter_element: {
    [theme.up(theme.bp.bp_320)]: {
      marginBottom: '3px',
      display: 'flex',
      flexDirection: 'column',
      visibility: 'hidden',
      opacity: '0',
      height: '0px',
      transitionDuration: '0.3s',
    },
    [theme.up(theme.bp.bp_768)]: {
      flexDirection: 'row',
    },
    '&.show': {
      [theme.up(theme.bp.bp_320)]: {
        visibility: 'visible',
        opacity: '1',
        transitionDuration: '0.3s',
        height: '120px',
      },
      [theme.up(theme.bp.bp_768)]: {
        height: '81px',
      },
    }
  },

  products_container__wrap_all_checkbox: {
    [theme.up(theme.bp.bp_320)]: {
      marginRight: '20px',
      marginBottom: '10px',
    },
    [theme.up(theme.bp.bp_768)]: {
      marginBottom: '0',
    },
  },

  products_container__wrap_checkbox: {
    [theme.up(theme.bp.bp_320)]: {
      marginBottom: '3px',
    },
    '&:last-child': {
      marginBottom: '0',
    },
  },
  
  products_container__wrap_select: {
    [theme.up(theme.bp.bp_320)]: {
      maxWidth: '200px',
      width: '100%',
    },
  },

}));