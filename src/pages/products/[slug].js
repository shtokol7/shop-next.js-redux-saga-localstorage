import { connect } from 'react-redux';
import { wrapper } from '../../store/store';
import { END } from 'redux-saga';

import { getOneProduct } from '../../store/sagas/getProductsSaga';
import Layout from '../../layouts/Layout/Layout';

const Products = ({
  product,
}) => {

  return (
    <Layout>
      <div>
        <img src={product?.image} alt="Товар" />
        <div>
          {product?.title}
        </div>
        <div>
          {product?.price}
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

export default connect(mapStateToProps, null)(Products);