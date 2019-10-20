import styled from 'styled-components';

export const AppStyled = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  font-family: 'Roboto', sans-serif;
  color: #505054;
  font-weight: 300;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Search = styled.div`
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.25);
  width: 450px;
  padding: 30px 25px;
  margin-top: 40px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 8px;
  border: none;
  border-radius: 6px;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.25);
  &:focus {
    outline-width: 0;
  }
`;

export const TweetList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Tweet = styled.a`
  margin-top: 15px;
  border: 1px solid rgba(162, 162, 162, 0.5);
  padding: 20px 15px;
  color: #505054;
  text-decoration: none;
`;

export const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
  padding: 50px 0;
`;
