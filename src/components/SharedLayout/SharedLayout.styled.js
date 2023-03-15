import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 20px 20px;
`;

export const Header = styled.header`
padding: 16px 0;
border-bottom: 1px solid black;
margin-bottom: 20px;
`

export const Nav = styled.nav`
display: flex;
gap: 15px;
`
export const Link = styled(NavLink)`
font-size: 20px;
font-weight: 600;
&.active {
    color: orange
  }
`