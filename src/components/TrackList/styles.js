import styled from 'styled-components';

export const TrackListHeading = styled.h4`
  font-size: 2.4rem;

  @media (max-width: 500px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const TrackListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  padding: 4rem 0;
`;

export const TrackListContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 2rem;

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
`;
