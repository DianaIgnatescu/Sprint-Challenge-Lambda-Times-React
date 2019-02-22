import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.div`
  background: #F1F1F1;
  height: 100vh;
`;

const LoginForm = styled.form`
  max-width: 450px;
  height: 400px;
  display: flex;
  background: #FFFFFF;
  flex-direction: column;
  justify-content: center;
  border-radius: 3px;
  border: 1px solid #e9e9e9;
  position: relative;
  top: 100px;
  margin: 0 auto;
  align-items: center;
  padding: 50px 20px;
`;

const LoginLogo = styled.img`
  max-width: 200px;
  padding-bottom: 20px;
`;

const LoginInput = styled.input`
  width: 350px;
  padding: 20px;
  background: #FAFAFA;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid #e9e9e9;
  font-size: 14px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 14px;
    color: #999999;
    font-weight: 400;
  }
`;

const LoginButton = styled.button`
  width: 350px;
  padding: 20px 0;
  background: black;
  font-weight: bold;
  color: #FAFAFA;
  font-size: 14px;
  &:hover {
    background: darkgrey;
    cursor: pointer;
  }
`;

const login = (username, password) => {
  if (username === 'user' && password === '1234') {
    localStorage.setItem('username', username);
    return true;
  }
  return false;
};

const handleSubmit = (event) => {
  const username = event.target.querySelector('input[name="username"]').value;
  const password = event.target.querySelector('input[name="password"]').value;
  const successfulLogin = login(username, password);
  if (!successfulLogin) {
    event.preventDefault();
  }
};

const Login = () => (
  <LoginWrapper>
    <LoginForm onSubmit={handleSubmit}>
      <h1>Lambda Times</h1>
      <LoginInput name="username" placeholder="username" />
      <LoginInput name="password" type="password" placeholder="password" />
      <LoginButton type="submit">LOGIN</LoginButton>
    </LoginForm>
  </LoginWrapper>
);

export default Login;
