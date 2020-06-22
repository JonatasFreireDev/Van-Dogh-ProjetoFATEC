import styled from 'styled-components';

export const Container = styled.div`
  max-width: 980px;
  padding: 10px;
  width: 100%;
  margin: 20px auto;

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

  & > h3 {
    margin-bottom: 20px;

    strong {
      font-weight: bold;
    }
  }

  & > button {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.bluSky};
    transition: all 0.2s;

    &:hover {
      background: ${(props) => props.theme.colors.buttonBuy};
      color: white;
    }

    &:active {
      background: ${(props) => props.theme.colors.whiteOrange};
      color: white;
    }
  }

  & > p {
    margin: 10px;
    text-align: center;

    span {
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

export const Product = styled.div`
  max-width: 980px;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 100px;
  grid-template-areas:
    'img desc desc conf'
    'hr hr hr hr';
  grid-gap: 10px;
  padding-bottom: 10px;
  transition: transform 0.3s;

  hr {
    grid-area: hr;
  }

  &:hover:not(hr) {
    transform: scale(1.05);
  }
`;

export const Image = styled.div`
  display: flex;
  max-width: 100%;
  max-height: 100px;
  align-items: center;
  justify-content: center;
  grid-area: img;

  img {
    max-height: 100px;
  }
`;

export const Description = styled.div`
  grid-area: desc;
`;

export const Config = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  grid-area: conf;

  div {
    margin-top: auto;

    span {
      margin: 0 10px;
    }

    button {
      background: ${(props) => props.theme.colors.whiteOrange};
      color: ${(props) => props.theme.colors.white};
      border: none;
      border-radius: 50%;
      width: 20px;
      transition: all 0.3s;

      &:hover:enabled {
        background: ${(props) => props.theme.colors.darkOrange};
      }

      &:active:enabled {
        background: ${(props) => props.theme.colors.buttonBuy};
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;
