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
}) => {
  const classes = useStylesCardProduct();

  const onAddToCart = () => {
    handlerAddToCart({
      id,
      title,
      price,
      image,
      quantity
    });
  };

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
        <div className={classes.card_product__price}>Цена: {price}</div>
        <Button
          onClick={onAddToCart}
        >
          Купить
        </Button>
      </div>

    </div>
  );
};

export default CardProduct;