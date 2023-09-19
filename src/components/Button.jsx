import styled from "styled-components";

const Button = ({ name }) => {
  return <StyledButton>{name}</StyledButton>;
};

const StyledButton = styled.div`
  font-size: 0.9rem;
  padding: 0.7rem 2rem;
  border-radius: 3px;
  background-image: linear-gradient(to right, #d434fe 30%, #903aff);
`;

export default Button;
