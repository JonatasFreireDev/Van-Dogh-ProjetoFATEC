import styled from 'styled-components';

interface PropsContent {
  isFavorite: boolean;
}

interface Pagination {
  page: number;
}

export const Container = styled.div`
  max-width: 980px;
  padding: 10px;
  width: 100%;
  margin: 20px auto;

  & > h3 {
    margin-bottom: 20px;

    strong {
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      padding: 15px;
    }
  }
`;

export const Content = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 20px auto;
`;

export const Product = styled.div`
  display: grid;
  max-width: 980px;
  width: 100%;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 200px;
  grid-template-areas: 'img desc fav';
  grid-gap: 10px;
  margin-bottom: 20px;
  transition: transform 0.3s;

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
    max-height: 200px;
  }
`;

export const Description = styled.div`
  grid-area: desc;
`;

export const Favorite = styled.div<PropsContent>`
  display: flex;
  justify-content: flex-end;
  grid-area: fav;

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
