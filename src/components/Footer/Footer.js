import { useStylesFooter } from './FooterStyle';
import Link from 'next/link';

const Footer = () => {
  const classes = useStylesFooter();
  
  return (
    <div className={classes.footer}>
      <div className={classes.footer__content}>
        <Link href="/news">
          <a>
            <div className={classes.footer__content_link}>
              Новости
            </div>
          </a>
        </Link>
        <Link href="/actions">
          <a>
            <div className={classes.footer__content_link}>
              Акции
            </div>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <div className={classes.footer__content_link}>
              О нас
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;