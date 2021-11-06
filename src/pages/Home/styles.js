import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding: 4rem 4rem 6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 4rem 2rem 6rem;
  }
`;

export const HomeSelectLocation = styled.div`
  width: 100%;
  max-width: 60rem;
  margin-bottom: 4rem;
`;

export const SelectLocationHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;

  h5 {
    display: inline-block;
    margin-bottom: 1rem;
    font-size: 2.8rem;
    text-align: center;
  }
`;

export const HomeInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;

  button {
    font-size: 1.6rem;
    padding: 1rem 2rem;
    margin-left: -1rem;
    border: none;
    cursor: pointer;

    &:disabled {
      cursor: wait;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const ErrorWrapper = styled.div`
  padding: 4rem 0;

  p {
    font-size: 1.8rem;
  }
`;

export const HomeWeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
  margin-bottom: 4rem;

  h2 {
    font-size: 10rem;
  }

  & > div {
    h4 {
      font-size: 4rem;
    }

    p {
      font-size: 1.6rem;
      color: #ddd;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-size: 4.8rem;
    }

    & > div {
      h4 {
        font-size: 2rem;
      }

      p {
        font-size: 1.4rem;
        color: #ddd;
      }
    }
  }
`;

export const HomeButonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-top: 2rem;

  button {
    width: 18rem;
    padding: 1rem 2rem;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
    gap: 2rem;

    button {
      width: 100%;
    }
  }
`;
