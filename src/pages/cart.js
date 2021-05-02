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
import Button from '../components/Button/Button'

// устранияет ошибку в консоли (expected server html to contain a matching div in div)
const Layout = dynamic(() => import('../layouts/Layout/Layout'), { ssr: false });

const useStylesCart = createUseStyles((theme) => ({
  cart_container: {
    [theme.up(theme.bp.bp_320)]: {
      maxWidth: '1000px',
      width: '100%',
      padding: '15px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      boxShadow: `0 0 10px ${theme.palette.primary.shadow}`,
      position: 'relative',
    },
  },

  cart_container__wrap_all_card: {
    [theme.up(theme.bp.bp_320)]: {
      width: '100%',
    },
  },

  cart_container__wrap_summary: {
    [theme.up(theme.bp.bp_320)]: {
      maxWidth: '300px',
      width: '100%',
      padding: '10px',
      boxShadow: `0 0 10px ${theme.palette.primary.shadow}`,
    },
  },

  card_in_cart__summary_text: {
    [theme.up(theme.bp.bp_320)]: {
      ...theme.typography.body1,
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
                  <CardInCart
                    key={data?.id}
                    incrementProduct={incrementProduct}
                    decrementProduct={decrementProduct}
                    removeProduct={removeProduct}
                    {...data}
                  />
                ))}
                
                <div className={classes.cart_container__btn_clear_wrap}>
                  <Button
                    typeStyle="circle"
                    onClick={clearBasket}
                  >
                    <img src="/images/basket-clear.svg" atl="Удалить" />
                  </Button>
                </div>
              </div>

              <div className={classes.cart_container__wrap_summary}>
                <div className={classes.card_in_cart__summary_text}>
                  Общая цена: {totalPrice}
                </div>
                <div className={classes.card_in_cart__summary_text}>
                  Общее количество товаров: {totalQuantities}
                </div>
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