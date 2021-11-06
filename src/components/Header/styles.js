import styled from 'styled-components';

export const ContainerHeader = styled.header`
  height: 7rem;

  nav {
    width: 100%;
    height: 100%;
    padding: 0 4rem;
  }

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    font-size: 1.6rem;
    list-style: none;

    li {
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        padding: 0.5rem;
      }
    }
  }
`;
