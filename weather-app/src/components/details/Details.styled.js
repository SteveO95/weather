import styled from "styled-components";

export const ForecastCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }

  h3 {
    margin-bottom: 10px;
    font-size: 1.5rem;
  }

  p {
    margin: 5px 0;
    font-size: 1rem;
    color: #555;
  }

  img {
    width: 80px;
    height: 80px;
    margin: 10px 0;
  }
`;
