import { useStylesHeader } from './HeaderStyle';
import { connect } from 'react-redux'
import Link from 'next/link';

const Header = ({
  totalQuantities
}) => {
  const classes = useStylesHeader();
  
  return (
    <div className={classes.header}>
      <div className={classes.header__top_part}>

      </div>

      <div className={classes.header__bottom_part}>
        <Link href="/">
          <a className={classes.header__wrap_logo}><img src="/images/logo.svg" /></a>
        </Link>

        {/* <div className={classes.header__wrap_navigation}>
          <Link href="/news">
            <a className={''}>
              Новости
            </a>
          </Link>
          <Link href="/actions">
            <a className={''}>
              Акции
            </a>
          </Link>
          <Link href="/about">
            <a className={''}>
              О нас
            </a>
          </Link>
        </div> */}

        <Link href="/cart">
          <div className={classes.header__wrap_icon_cart}>
            <div className={classes.header__icon_cart}>
              <img src="/images/icon-cart.svg" />
            </div>

            <div 
              className={classes.header__wrap_number_icon_cart}
              suppressHydrationWarning={true} // отключает ошибку в консоли (состояние на сервере не соответствует с локальным)
            >
              {totalQuantities}
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalQuantities: state.cartReducer.totalQuantities,
});

export default connect(mapStateToProps, null)(Header);