import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
`;

export const Item = styled.li`

&:hover,
  &:focus {
    color: blue;
    font-weight: 500;
  }
`;