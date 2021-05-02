import { useStylesCounterProduct } from './CounterProductStyle';
import Button from '../Button/Button';
import Link from 'next/link'

const CardProduct = ({
  id,
  quantity,
  incrementProduct,
  decrementProduct,
}) => {
  const classes = useStylesCounterProduct();

  return (
    <div className={classes.counter_product}>
      <Button
        typeStyle="circle"
        onClick={() => decrementProduct(id)}
        className={classes.counter_product__btn}
      >
        <img src="/images/icon-minus.svg" atl="Уменьшить" />
        
      </Button>
      <div className={classes.counter_product__wrap_count}>
        <div className={classes.counter_product__count}>
          {quantity}
        </div>
      </div>
      <Button
        typeStyle="circle"
        onClick={() => incrementProduct(id)}
        className={classes.counter_product__btn}
      >
        <img src="/images/icon-plus.svg" atl="Увеличить" />
      </Button>
    </div>
  );
};

export default CardProduct;