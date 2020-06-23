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
