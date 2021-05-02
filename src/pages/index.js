import { useEffect } from 'react';
import { connect } from 'react-redux';
import { END } from 'redux-saga';
import { wrapper } from '../store/store';
import { getProducts } from '../store/sagas/getProductsSaga';
import { getPost } from '../store/sagas/getPostSaga';
import Counter from '../components/counter';
import Spinner from '../components/Spinner/Spinner';
import Button from '../components/Button/Button';
import Layout from '../layouts/Layout/Layout';
import ProductsContainer from '../containers/ProductsContainer/ProductsContainer';


const Index = ({
  error,
  loading,
  post,
  getPost,
}) => {

  return (
    <Layout>

      <ProductsContainer/>

      <Counter />
      
      <Button 
        onClick={getPost}
      >
        Загрузить пост
      </Button>
      {loading && (
        <Spinner />
      )}
      {/* загружаются данные при нажатии на кнопку */}
      {post.length !== 0 && (
        <pre>
          <code>{JSON.stringify(post, null, 2)}</code>
        </pre>
      )}

      {/* выводит ошибку, если что-то не так с запросом */}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {

  if (!store.getState().products) {
    store.dispatch(getProducts()) // загружаются данные при инициализации проекта (SSRится)
    store.dispatch(END)
  }

  await store.sagaTask.toPromise()
})

const mapStateToProps = (state) => (console.log('indexxx', state),{
  products: state.getProductsReducer.products,
  error: state.mainReducer.error,
  loading: state.mainReducer.loading,
  post: state.getPostReducer.post,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: () => dispatch(getPost()), // выводим запрос с саги
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)
