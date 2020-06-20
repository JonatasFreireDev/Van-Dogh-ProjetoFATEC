import React, { useCallback } from 'react';

import { MdDoNotDisturb } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import * as S from './styles';

interface Config {
  items?: Item[];
  nameList?: string;
}

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  amount: number;
  picture: string;
  category: string;
}

const List: React.FC<Config> = ({ items, nameList = 'List' }) => {
  const renderPrice = useCallback(
    (value: number, type?: '$' | string) => (
      <S.Price>
        <span>
          {type} {value.toLocaleString('pt-BR')}
        </span>
        <small>00</small>
      </S.Price>
    ),
    [],
  );

  const renderItems = useCallback(
    (item: Item) => (
      <>
        <img src={item.picture} alt={String(item.id)} />
        <Link to={`/products/${item.id}`}>
          <p>{item.name}</p>
        </Link>
        {renderPrice(item.price)}
      </>
    ),
    [renderPrice],
  );

  const ShowEmpty = useCallback(
    () => (
      <S.NoItem>
        <p>Lista Vazia</p>
        <MdDoNotDisturb size={50} />
      </S.NoItem>
    ),
    [],
  );

  return (
    <S.ListItems>
      <p>{nameList}</p>
      {items && items.length >= 1 ? (
        <Slider
          dots
          infinite
          speed={500}
          slidesToShow={items.length <= 3 ? items?.length : 3}
          slidesToScroll={3}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {items?.map((item) => (
            <S.Item key={item.id}>{renderItems(item)}</S.Item>
          ))}
        </Slider>
      ) : (
        ShowEmpty()
      )}
    </S.ListItems>
  );
};

export default List;
