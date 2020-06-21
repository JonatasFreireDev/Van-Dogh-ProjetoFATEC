import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface PropsContent {
  isFavorite: boolean;
}

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 20px auto;

  @media only screen and (max-width: 600px) {
    & {
      padding: 15px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 100px;
`;

export const Image = styled.div`
  max-width: 500px;
  width: 100%;
  transition: all 0.5s;

  &:hover {
    transform: rotate(-5deg);
  }
  img {
    width: 100%;
    border-radius: 50px;
  }
`;

export const Details = styled.div`
  display: grid;
  grid-template-rows: 25px 100px;
  grid-template-areas: 'head' 'details' 'desc';
  width: 100%;
  margin-left: 30px;
`;

export const DetailsHeader = styled.div<PropsContent>`
  display: flex;
  justify-content: space-between;
  grid-area: head;

  small {
    opacity: 0.5;
  }

  small::first-letter {
    color: red;
    text-transform: uppercase;
  }

  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: ${(props) => (props.isFavorite ? 'red' : 'grey')};
  }
`;

export const DetailsPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: details;

  button {
    border: 0px;
    border-radius: 10px;
    width: 130px;
    height: 50px;
    background: ${(props) => props.theme.colors.buttonBuy};
  }
`;

export const Description = styled.div`
  width: 100%;
  grid-area: desc;
`;
