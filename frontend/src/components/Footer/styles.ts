import styled from 'styled-components';

import Gress from '../../assets/grass-min.png';

export const Container = styled.div`
  margin-top: 60px;
  position: relative;
  background: linear-gradient(180deg, #4b8b0c 0%, #88491b 30.1%);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 100px 100px 30px;
  color: white;
`;

export const Image = styled.div`
  position: absolute;
  background: url(${Gress}) repeat-x;
  background-size: auto;
  width: 100%;
  height: 40px;
  top: -35px;
`;

export const MapaSite = styled.div`
  width: 500px;
  height: 350px;
`;

export const Contato = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Seguranca = styled.div`
  display: flex;
  flex-direction: row;

  img {
    max-width: 100px;
    max-height: 70px;
    margin: 10px;
  }
`;

export const Redes = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
`;
