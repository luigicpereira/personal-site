import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background: ${props => props.theme.colors.headerBackground};
  color: ${props => props.theme.colors.headerText};
  padding: 10px 20px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 14px;

    img {
      width: 50px;
      height: 50px;
      border-radius: 20%;

      margin-right: 20px;
    }
  }
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ul {
    list-style-type: none;

    li {
      width: 100%;
      display: flex;
    }

    li + li {
      margin-top: 20px;
    }
  }
`;
