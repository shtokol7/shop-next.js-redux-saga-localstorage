import React, { useState, useEffect } from 'react';
import { useStylesCardProduct } from './CardProductStyle';
import Button from '../Button/Button';
import Link from 'next/link'

const CardProduct = ({
  id,
  title,
  price,
  image,
  quantity,
  handlerAddToCart,
  productInCart
}) => {
  const classes = useStylesCardProduct();
  const [addedItem, setAddedItem] = useState(null);

  const onAddToCart = () => {
    handlerAddToCart({
      id,
      title,
      price,
      image,
      quantity
    });
  };

  useEffect(() => {
    // ищем в корзине текущий товар, если он там есть, то меняем кнопку КУПИТЬ на В КОРЗИНУ
    const addedItemInCart = productInCart.find((item) => item.id === id);
    setAddedItem(addedItemInCart);
  }, [addedItem, productInCart])

  return (
    <div className={classes.card_product}>
      <Link href={'/products/[slug]'} as={'/products/' + id}>
        <a>
          <div className={classes.card_product__wrap_img}>
            <img src={image} />
          </div>
        </a>
      </Link>


      <div className={classes.card_product__wrap_title}>
        <Link href={'/products/[slug]'} as={'/products/' + id}>
          <a className={classes.card_product__title}>
            {title}
          </a>
        </Link>
      </div>

      <div className={classes.card_product__wrap_price_button}>
        <div className={classes.card_product__price}>Цена: {price} ₽</div>
      </div>

      <div className={classes.card_product__wrap_btn}>
        {addedItem 
        ? (
            <Button className={'yellow'}>
              <Link href="/cart">
                <a className={classes.card_product__link_to_cart}> В корзину </a>
              </Link>
            </Button>
          ) : (
            <Button onClick={onAddToCart}>
              Купить
            </Button>
          )
        }
      </div>
    </div>
  );
};

export default CardProduct;