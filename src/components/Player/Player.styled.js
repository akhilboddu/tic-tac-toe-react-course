import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6rem;

  ${(props) => props.theme.media.mobile} {
    flex-direction: row;
    margin: 4rem;
  }
`;

export const AvatarWrapper = styled.div`
  div {
    display: flex;
    width: 10rem;
    height: 10rem;
    filter: ${(props) => (props.isPlayerActive ? "" : "grayscale(100%)")};

    ${(props) => props.theme.media.mobile} {
      width: 8rem;
      height: 8rem;
    }
  }
`;
