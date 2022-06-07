import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderBackground = styled.div`
  height: 50px;
  background: #aaaa32;
`;
const HeaderDiv = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const LogoDiv = styled.div`
  height: 100%;
  width: 5%;
`;
const MenuBarDiv = styled.div`
  width: 50%;
`;
const LinkMenu = styled.div`

`;
const UserDiv = styled.div`
  width: 20%;
`;
const SearchDiv = styled.div`
  width: 20%;
`;

// Header.propTypes = {

// };

function Header(props) {
  const logo = props.logo || "https://nrevo.com/wp-content/uploads/2021/04/logo.png";

  return (
    <div>
      <HeaderBackground>
        <HeaderDiv>
          <LogoDiv>
            <img src={logo} height="50px" />
          </LogoDiv>

          <MenuBarDiv>
            <LinkMenu>
              <a href="http://localhost:3000/" >Trang chủ</a>
            </LinkMenu>
          </MenuBarDiv>

          <SearchDiv></SearchDiv>

          <UserDiv></UserDiv>

        </HeaderDiv>
      </HeaderBackground >
    </div >
  );
}

export default Header;