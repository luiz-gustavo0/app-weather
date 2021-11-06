import styled from 'styled-components';

export const Container = styled.section`
  padding: 6rem 4rem;

  h2 {
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 500px) {
    padding: 6rem 2rem;
    h2 {
      font-size: 2.8rem;
    }
  }
`;

export const Content = styled.div`
  background: #323232;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 2rem;
  background: #393939;

  & > div {
    font-size: 1.6rem;
    p {
      margin-bottom: 1rem;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    img {
      width: 2rem;
    }
  }
`;

export const TrackListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 2rem;
  flex-wrap: wrap;
`;

export const TrackListContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;

  img {
    width: 100%;
    max-width: 7rem;
    object-fit: cover;
  }

  & > div {
    font-size: 1.6rem;
    span {
      display: inline-block;
      margin-bottom: 0.8rem;
    }

    a {
      display: block;
      font-size: 1.6rem;
      text-decoration: none;
      color: #ddd;
      transition: all 0.2s ease;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 700px) {
    & > div {
      font-size: 1.4rem;

      a {
        font-size: 1.4rem;
      }
    }
  }
`;
