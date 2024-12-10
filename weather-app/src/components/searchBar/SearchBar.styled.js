import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  @media (max-width: 768px) {
    width: 200px;
    padding: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;

  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 30px;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  &:focus {
    border-color: #007bff;
    box-shadow: 0 6px 12px rgba(0, 123, 255, 0.3);
  }
  @media (max-width: 768px) {
    width: 200px;
    padding: 8px;
  }
  @media (max-width: 480px) {
    width: 150px;
    padding: 6px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  background: linear-gradient(135deg, #007bff, #0056b3);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #0056b3, #007bff);
    box-shadow: 0px 4px 15px rgba(0, 123, 255, 0.4);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`;
