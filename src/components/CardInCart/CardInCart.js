import { useStylesCardInCart } from './CardInCartStyle';
import Button from '../Button/Button';
import Link from 'next/link'
import CounterProduct from '../CounterProduct/CounterProduct';

const CardInCart = ({
  id,
  title,
  price,
  image,
  quantity,
  incrementProduct,
  decrementProduct,
  removeProduct,
}) => {
  const classes = useStylesCardInCart();

  return (
    <div className={classes.card_in_cart}>
      <div className={classes.card_in_cart__wrap_img}>
        <img src={image} alt="Товар" />
      </div>

      <div className={classes.card_in_cart__wrap_info_btn}>
        <div className={classes.card_in_cart__wrap_info}>
          <div className={classes.card_in_cart__wrap_title}>
            <div className={classes.card_in_cart__title}>
              {title}
            </div>
          </div>

          <div className={classes.card_in_cart__wrap_title}>
            <div className={classes.card_in_cart__title}>
              Цена: {price} ₽
            </div>
          </div>
        </div>

        <div 
          className={classes.card_in_cart__wrap_btns}
          onClick={(e) => {
            // кликая по кнопкам в карточке, перход на детальную страницу будет блокироваться
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <CounterProduct
            id={id}
            quantity={quantity}
            incrementProduct={incrementProduct}
            decrementProduct={decrementProduct}
          />

          <Button
            typeStyle="circle"
            onClick={() => removeProduct(id)}
            className={classes.card_in_cart__btn_basket_clear}
          >
            <img src="/images/basket-clear.svg" atl="Удалить" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardInCart;