import styled from 'styled-components';

interface PropsContent {
  isFavorite: boolean;
}

export const Container = styled.div`
  max-width: 980px;
  width: 100%;
  padding: 10px;
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

  button {
    font-family: Arial, Helvetica, sans-serif;
    border: 0px;
    border-radius: 10px;
    width: 100%;
    height: 50px;
    background: ${(props) => props.theme.colors.buttonBuy};
    transition: all 0.4s;
    margin-top: auto;

    &:hover {
      background: ${(props) => props.theme.colors.bluSky};
      box-shadow: inset 0 0 0 2px #53a7ea;
    }

    &:active {
      box-shadow: inset 0 0 0 25px ${(props) => props.theme.colors.buttonBuy};
    }
  }

  @media only screen and (max-width: 600px) {
    & {
      padding: 10px;
      flex-direction: column;
      margin: auto;
    }
  }
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

  @media only screen and (max-width: 600px) {
    & {
      margin-top: 10px;
      margin-left: 0px;
    }
  }
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
  margin-top: auto;
`;

export const Description = styled.div`
  width: 100%;
  margin-top: auto;
  grid-area: desc;
`;
