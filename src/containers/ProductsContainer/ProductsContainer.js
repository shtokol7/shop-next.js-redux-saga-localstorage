import React, { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { useStylesProductsContainer } from './ProductsContainerStyle';
import CardProduct from '../../components/CardProduct/CardProduct';
import { addToCart } from '../../store/actions/cartAction';
import CheckBox from '../../components/Checkbox/Checkbox';
import Button from '../../components/Button/Button';
import SelectCustom from '../../components/Select/Select';

const ProductsContainer = ({
  products,
  addToCart,
}) => {
  const classes = useStylesProductsContainer();
  const [showFilter, setShowFilter] = useState(false);
  const [sortPrice, setSortPrice] = useState('');

  // 
  const checkboxElement = [
    { type: "Вехняя одежда" },
    { type: "Нижняя одежда" },
    { type: "Обувь" },
  ];
  const [filters, setFilters] = useState([]);

  // обработка чекбоксов, чекнутый или не чекнутый
  const handlerFormCheckbox = event => {
    const checkboxes = event.currentTarget.getElementsByTagName("input");
    const arrFilteringProduct = [];
    // конвертируем псевдомассив чекбоксов в массив и перебираем его
    Object.values(checkboxes).map(checkbox => {
      // если чекбокс чекнутый, то добавляем в массив arrFilteringProduct, его value (категория по которой фильтруется)
      if (checkbox.checked) {
        arrFilteringProduct.push(checkbox.value);
      }
    });
    setFilters([...arrFilteringProduct]);
  };

  // фильтрует товары по категориям
  const filteredProducts = (filterProduct) => {
    // преобразуем поля объектов type в массив
    const defaultFilter = checkboxElement.map(i => i.type);
    // если сортировочный массив пуст(ни один чекбокс не нажат), мы показываем все товары
    if (filters.length === 0) {
      setFilters([...defaultFilter]);
    }

    return (
      // а если хоть один чекбокс нажат, то показываем товары которые фильтрует этот чекбокс
      filters.indexOf(filterProduct.type) !== -1
    )
  };
  
  // сотрировка по цене
  const sortingPrice = (a, b) => {
    switch (sortPrice) {
      case 'Цена по возрастанию':
        return a.price - b.price
      case 'Цена по убыванию':
        return b.price - a.price
      default: break;
    }
  };

  // принимаем выбанную опцию в селекте и записываем значение в useState
  const handlerSelect = (e) => {
    setSortPrice(e.value)
  };

  return (
    <div className={classes.products_container}>
      <div className={classes.products_container__wrap_filter_panel}>
        <div className={classes.products_container__wrap_filter_btn}>
          <Button
            onClick={() => setShowFilter(!showFilter)}
          >
            Фильтр
          </Button>
        </div>

        
        <form onChange={handlerFormCheckbox} className={classes.products_container__form}>
          <div className={`${classes.products_container__wrap_filter_element} ${(showFilter ? 'show' : '')}`}>
            <div className={classes.products_container__wrap_all_checkbox}>
              {checkboxElement.map((i, index) => (
                <div key={index} className={classes.products_container__wrap_checkbox}>
                  <CheckBox value={i.type} type="checkbox" />
                </div>
              ))}
            </div>
            
            <div className={classes.products_container__wrap_select}>
              <SelectCustom
                onChange={(e) => handlerSelect(e)}
                placeholder={"Цена по возрастанию"}
                className={"select_double_arr"}
                classNamePrefix={"select_double_arr"}
                inputId={"test122"}
                instanceId={"test455"}
              >
              </SelectCustom>
            </div>
          </div>
        </form>
        
      </div>
      


      <div className={classes.products_container__wrap_all_card}>
        {products
          .sort(sortingPrice)
          .filter(filteredProducts)
          .map((product) => {
            return (
              <div key={product.id} className={classes.products_container__wrap_card}>
                <CardProduct
                  {...product}
                  handlerAddToCart={addToCart}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.getProductsReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);