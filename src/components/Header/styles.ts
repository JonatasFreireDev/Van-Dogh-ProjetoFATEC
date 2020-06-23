import styled from 'styled-components';
import { Link as LinkDom } from 'react-router-dom';

interface DotProps {
  quantity: boolean;
}

export const Container = styled.div`
  background: #77dcff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 40px;
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const Logo = styled(LinkDom)`
  margin: 5px;
  display: flex;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const Form = styled.form`
  div {
    display: flex;
    position: relative;
    width: 30vw;

    input {
      border: none;
      border-bottom: 1px solid ${(props) => props.theme.colors.darkOrange};
      padding: 5px 10px;
      background: transparent;
      padding-right: 40px;
      width: 100%;

      &::placeholder {
        color: ${(props) => props.theme.colors.darkOrange};
      }

      &:focus {
        border-bottom: 1px solid ${(props) => props.theme.colors.whiteOrange};
      }
    }

    button {
      position: absolute;
      right: 0;
      border: none;
      background: transparent;

      svg {
        color: ${(props) => props.theme.colors.darkOrange};
        margin-left: 10px;
        transition: color 0.2s;

        &:hover {
          color: ${(props) => props.theme.colors.whiteOrange};
        }
      }
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;

  svg {
    color: ${(props) => props.theme.colors.darkOrange};
    margin-left: 10px;
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.whiteOrange};
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  position: absolute;
  margin: 20px 0;
`;

export const Link = styled(LinkDom)`
  display: flex;
  margin: auto 10px;
  background: white;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    padding: 10px;
    width: 60px;
    height: 60px;
  }
`;

export const Dot = styled.div<DotProps>`
  display: ${(props) => (props.quantity ? 'block' : 'none')};
  background: ${(props) => props.theme.colors.white};
  position: absolute;
  height: 17px;
  width: 17px;
  border-radius: 50%;
  top: -5px;
  right: -5px;
  font-size: 12px;
`;
