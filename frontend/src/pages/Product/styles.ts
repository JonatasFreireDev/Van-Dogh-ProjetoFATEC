import styled from 'styled-components';

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

  img {
    width: 100%;
    border-radius: 50px;
  }
`;

export const Details = styled.div<PropsContent>`
  width: 100%;
  margin-left: 30px;

  div:nth-child(1) {
    display: flex;
    justify-content: space-between;

    svg {
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: ${(props) => (props.isFavorite ? 'red' : 'grey')};
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  span {
    font-size: 15px;
  }

  small {
    font-size: 12px;
    opacity: 0.5;
  }

  p:nth-child(3) {
    font-weight: bold;
  }

  button {
    margin-top: 10px;
  }
`;

export const DetailsPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  & > button {
    border: 0px;
    border-radius: 10px;
    width: 130px;
    height: 50px;
    background: ${(props) => props.theme.colors.buttonBuy};
  }
`;

export const AmountPrice = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-content: center;
  margin-top: 10px;
  align-items: center;

  button {
    margin: 0px;
    width: 50px;
    border: 0px;
    border-radius: 5px;
    background: ${(props) => props.theme.colors.buttonChangeAmount};
  }
`;
