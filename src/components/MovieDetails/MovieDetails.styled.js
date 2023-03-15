import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCard = styled.div`
display: flex;
gap: 20px;
margin-bottom: 20px;
> img {
    width: 200px;
}
`;

export const MovieInfo = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const GoBack = styled(Link)`
display: inline-flex;
align-items: center;
gap: 8px;
margin-bottom: 10px;
font-size: 18px;
color: blue;
&:hover,
  &:focus {
    color: blue;
    font-weight: 500;
  }
`;

export const DetailsLinkWrap = styled.div`
display: flex;
gap: 25px;
margin-bottom: 20px;
`;
export const DetailsLink = styled(Link)`
font-size: 18px;
color: blue;
&:hover,
  &:focus {
    font-weight: 500;
  }
`;


export const AdditionalTitle = styled.h3`
margin-bottom: 15px;
`;