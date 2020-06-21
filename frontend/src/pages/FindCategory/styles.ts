import styled from 'styled-components';

interface PropsContent {
  isFavorite: boolean;
}

interface Pagination {
  page: number;
}

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 20px auto;

  h1::first-letter {
    color: red;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 600px) {
    & {
      padding: 15px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 980px;
  width: 100%;
  margin: 20px auto;

  & > h3 {
    margin-bottom: 20px;

    strong {
      font-weight: bold;
    }
  }
`;

export const Product = styled.div`
  display: grid;
  grid-template-areas: 'img img' 'desc fav';
  margin: 13px;
  border-radius: 10px;
  transition: transform 0.3s;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 200px;
  align-items: center;
  justify-content: center;
  grid-area: img;

  img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    max-height: 200px;
  }
`;

export const Description = styled.div`
  display: block;
  padding: 7px;
  grid-area: desc;
`;

export const Favorite = styled.div<PropsContent>`
  display: flex;
  justify-content: flex-end;
  grid-area: fav;
  padding: 7px;

  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: ${(props) => (props.isFavorite ? 'red' : 'grey')};
  }
`;

export const Pagination = styled.div<Pagination>`
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  width: 100%;

  button {
    padding: 10px;
    border: none;
    transition: all 0.3s;

    &:hover:enabled {
      background: ${(props) => props.theme.colors.buttonBuy};
      color: ${(props) => props.theme.colors.white};
      border-radius: 20px;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
