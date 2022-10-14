import styled from 'styled-components';

export const ButtonForFeedback = styled.button`
  :not(:last-child) {
    margin-right: 10px;
  }
  padding: 5px;

  font-weight: 700;

  background-color: lightgoldenrodyellow;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    background-color: lightskyblue;
    color: white;
  }
`;
