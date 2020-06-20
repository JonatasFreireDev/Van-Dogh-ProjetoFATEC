import styled from 'styled-components';

import Gress from '../../assets/grass-min.png';

export const Container = styled.div`
  margin-top: 60px;
  position: relative;
  background: linear-gradient(180deg, #4b8b0c 0%, #88491b 30.1%);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 980px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 100px auto;
  color: white;

  @media only screen and (max-width: 900px) {
    & {
      flex-direction: column;
    }
  }

  div {
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Image = styled.div`
  position: absolute;
  background: url(${Gress}) repeat-x;
  width: 100%;
  height: 40px;
  top: -35px;
`;

export const MapaSite = styled.div`
  width: 500px;
  height: 350px;

  @media only screen and (max-width: 600px) {
    & {
      margin-top: 10px;
      width: 500px;
      height: 350px;
    }
  }
`;

export const Contato = styled.div`
  display: flex;
  flex-direction: column !important;
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
  flex-direction: row;
  width: 100%;
  height: 100px;
`;
