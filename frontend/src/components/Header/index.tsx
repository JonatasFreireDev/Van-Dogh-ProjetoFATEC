import React, { useCallback, useState } from 'react';
import * as S from './styles';
import api from '../../services/api';

import Dog from '../../assets/Dog.svg';
import Bed from '../../assets/Bed.svg';
import Clothes from '../../assets/Clothes.svg';
import Coleira from '../../assets/Dog.svg';
import House from '../../assets/House.svg';
import Meat from '../../assets/Meat.svg';
import Toys from '../../assets/Toys.svg';
import {
  MdSearch,
  MdNotifications,
  // MdNotificationsActive,
  MdShoppingCart,
  MdPerson,
} from 'react-icons/md';

const Header: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const response = await api.get('/products');

    const { data } = response;

    console.log(data);
  }, []);

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <img src={Dog} alt="Dog" />
        </S.Logo>
        <S.Form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Pesquisar.."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <MdSearch size={28} />
            </button>
          </div>
        </S.Form>
        <S.Menu>
          <MdNotifications size={28} />
          <MdShoppingCart size={28} />
          <MdPerson size={28} />
        </S.Menu>
      </S.Content>
      <S.Content>
        <S.Nav>
          <S.Link to="/">
            <img src={Clothes} alt="Clothes" title="Clothes" />
          </S.Link>
          <S.Link to="/">
            <img src={Coleira} alt="Coleira" title="Coleira" />
          </S.Link>
          <S.Link to="/">
            <img src={Meat} alt="Meat" title="Meat" />
          </S.Link>
          <S.Link to="/">
            <img src={House} alt="House" title="House" />
          </S.Link>
          <S.Link to="/">
            <img src={Bed} alt="Bed" title="Bed" />
          </S.Link>
          <S.Link to="/">
            <img src={Toys} alt="Toys" title="Toys" />
          </S.Link>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};

export default React.memo(Header);
