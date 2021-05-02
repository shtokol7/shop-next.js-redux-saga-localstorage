import Link from 'next/link';
import { connect } from 'react-redux';
import { useStylesProductsContainer } from './ProductsContainerStyle';
import CardProduct from '../../components/CardProduct/CardProduct';
import { addToCart } from '../../store/actions/cartAction';

const ProductsContainer = ({
  products,
  addToCart,
}) => {
  const classes = useStylesProductsContainer();
  
  return (
    <div className={classes.products_container}>
      <div className={classes.products_container__wrap_all_card}>
        {products?.map((item) => (
          <div key={item.id} className={classes.products_container__wrap_card}>
            <CardProduct
              {...item}
              handlerAddToCart={addToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.getProductsReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch(addToCart(data)), // выводим запрос с саги
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);