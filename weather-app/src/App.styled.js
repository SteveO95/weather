import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: ${(props) => props.bgcolor};
  min-height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  /* margin: 0 auto;
  padding: 2rem; */
  text-align: center;
  transition: background-color 1s ease;

  @media (max-width: 768px) {
    padding: 15px;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Container = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  /* align-items: flex-start; */
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;
export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;
export const ErrorMessage = styled.p`
  color: #ff6347;
  font-size: 1.2rem;
  background-color: #ffffff;
  padding: 10px 15px;
`;

export const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
