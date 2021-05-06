import { connect } from 'react-redux';
import { wrapper } from '../../store/store';
import { END } from 'redux-saga';
import { createUseStyles } from 'react-jss';
import Button from '../../components/Button/Button';

import { getOneProduct } from '../../store/sagas/getProductsSaga';
import Layout from '../../layouts/Layout/Layout';
import { addToCart } from '../../store/actions/cartAction';

const useStylesCart = createUseStyles((theme) => ({
  product_detail: {
    [theme.up(theme.bp.bp_320)]: {
      display: 'flex',
      flexDirection: 'column',
      // boxShadow: `0 0 10px ${theme.palette.primary.shadow}`,
    },
    [theme.up(theme.bp.bp_768)]: {
      flexDirection: 'row',
    },
  },

  product_detail__wrap_img: {
    [theme.up(theme.bp.bp_320)]: {
      maxWidth: '345px',
      width: '100%',
      marginBottom: '20px',
    },
    [theme.up(theme.bp.bp_768)]: {
      marginRight: '30px',
    },
    [theme.up(theme.bp.bp_1024)]: {
      maxWidth: 'inherit',
      width: '500px',
    },
    '& img': {
      [theme.up(theme.bp.bp_320)]: {
        display: 'block',
        width: '100%',
      },
    },
  },

  product_detail__wrap_info: {
    [theme.up(theme.bp.bp_320)]: {

    },
  },

  product_detail__wrap_title: {
    [theme.up(theme.bp.bp_320)]: {
      marginBottom: '10px',
    },
    [theme.up(theme.bp.bp_1024)]: {
      marginBottom: '30px',
    },
  },

  product_detail__title: {
    [theme.up(theme.bp.bp_320)]: {
      ...theme.typography.h_1
    },
  },

  product_detail__wrap_price: {
    [theme.up(theme.bp.bp_320)]: {
      marginBottom: '20px',
    },
    [theme.up(theme.bp.bp_320)]: {
      marginBottom: '30px',
    },
  },

  product_detail__price: {
    [theme.up(theme.bp.bp_320)]: {
      ...theme.typography.body_1
    },
  },

}));

const Products = ({
  product,
  addToCart,
}) => {
  const classes = useStylesCart();
  
  const onAddToCart = () => {
    addToCart(product);
  };

  return (
    <Layout>
      <div className={classes.product_detail}>
        <div className={classes.product_detail__wrap_img}>
          <img src={product?.image} alt="Товар" />
        </div>
        
        <div className={classes.product_detail__wrap_info}>
          <div className={classes.product_detail__wrap_title}>
            <h1 className={classes.product_detail__title}>
              {product?.title}
            </h1>
          </div>

          <div className={classes.product_detail__wrap_price}>
            <div className={classes.product_detail__price}>
              Цена: {product?.price} ₽
            </div>
          </div>

          <div >
            <Button onClick={onAddToCart}>
              Купить
            </Button>
          </div>
        </div>
        
      </div>
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, query }) => {
  
  store.dispatch(getOneProduct(query.slug)) // записываем сюда значение слага, оно соответствует id товару, по сути мы получаем здесь один товар
  store.dispatch(END)

  await store.sagaTask.toPromise()
})


// Products.getInitialProps = (ctx) => {
//   // store.dispatch(getOneProduct(query.slug))
//   console.log('ctx', ctx.query);
//   return { props: 'rrr' };
// };

const mapStateToProps = (state) => (console.log('slug', state),{
  product: state.getProductsReducer.product,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch(addToCart(data)), // выводим запрос с саги
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);