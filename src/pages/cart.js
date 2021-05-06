import { connect } from 'react-redux';
// import Layout from '../layouts/Layout/Layout';
import dynamic from 'next/dynamic';
import { createUseStyles } from 'react-jss';
import { 
  clearCart,
  incrementProduct,
  decrementProduct,
  removeProduct
} from '../store/actions/cartAction';
import CardInCart from '../components/CardInCart/CardInCart';
import Button from '../components/Button/Button';
import Link from 'next/link';

// устранияет ошибку в консоли (expected server html to contain a matching div in div)
const Layout = dynamic(() => import('../layouts/Layout/Layout'), { ssr: false });

const useStylesCart = createUseStyles((theme) => ({
  cart_container: {
    [theme.up(theme.bp.bp_320)]: {
      maxWidth: '1000px',
      width: '100%',
      padding: '15px',
      margin: '0 auto',
      
      boxShadow: `0 0 10px ${theme.palette.primary.shadow}`,
      position: 'relative',
    },
    [theme.up(theme.bp.bp_768)]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },

  cart_container__wrap_all_card: {
    [theme.up(theme.bp.bp_320)]: {
      width: '100%',
      marginBottom: '30px',
    },
    [theme.up(theme.bp.bp_768)]: {
      marginBottom: '0',
      marginRight: '30px'
    },
  },

  cart_container__card_link: {
    [theme.up(theme.bp.bp_320)]: {
      width:'100%',
      display: 'block',
      '&:last-child': {
        '& > div': {
          [theme.up(theme.bp.bp_320)]: {
            marginBottom: '0',
          },
        }
      },
    },
  },

  cart_container__wrap_summary: {
    [theme.up(theme.bp.bp_320)]: {
      width: '100%',
      padding: '10px',
      boxShadow: `0 0 10px ${theme.palette.primary.shadow}`,
    },
    [theme.up(theme.bp.bp_768)]: {
      maxWidth: '260px',
    },
    [theme.up(theme.bp.bp_1024)]: {
      maxWidth: '300px',
    },
  },

  cart_container__summary_text: {
    [theme.up(theme.bp.bp_320)]: {
      ...theme.typography.body_1,
      marginBottom: '10px',
    },
  },

  cart_container__btn_clear_wrap: {
    [theme.up(theme.bp.bp_320)]: {
      position: 'absolute',
      top: '-15px',
      right: '-15px',
      background: `${theme.palette.primary.light}`
    },
  },

}));


const Cart = ({
  cart,
  totalPrice,
  totalQuantities,
  clearCart,
  incrementProduct,
  decrementProduct,
  removeProduct,
}) => {
  const classes = useStylesCart();

  let clearBasket = () => {
    clearCart()
  };

  return (
    <Layout>
      <div className={classes.cart_container}>
        {cart.length
          ? (
            <>
              <div className={classes.cart_container__wrap_all_card}>
                {cart?.map((data) => (
                  <Link href={'/products/[slug]'} as={'/products/' + data.id} key={data?.id}>
                    <a className={classes.cart_container__card_link}>
                      <CardInCart
                        incrementProduct={incrementProduct}
                        decrementProduct={decrementProduct}
                        removeProduct={removeProduct}
                        {...data}
                      />
                    </a>
                  </Link>
                ))}
              </div>

              <div className={classes.cart_container__wrap_summary}>
                <div className={classes.cart_container__summary_text}>
                  Общая цена: {totalPrice}
                </div>
                <div className={classes.cart_container__summary_text}>
                  Общее количество товаров: {totalQuantities}
                </div>
              </div>

              <div className={classes.cart_container__btn_clear_wrap}>
                <Button
                  typeStyle="circle"
                  onClick={clearBasket}
                >
                  <img src="/images/basket-clear.svg" atl="Удалить" />
                </Button>
              </div>
            </>
          )
          : (
            <div>
              Корзина пуста
            </div>
          )
        }
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cartReducer.cart,
  totalPrice: state.cartReducer.totalPrice,
  totalQuantities: state.cartReducer.totalQuantities,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
  incrementProduct: (id) => dispatch(incrementProduct(id)),
  decrementProduct: (id) => dispatch(decrementProduct(id)),
  removeProduct: (id) => dispatch(removeProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);