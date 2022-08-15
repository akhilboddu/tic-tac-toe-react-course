import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.isWinningCell ? props.theme.colors.yellow : props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  border: none;
  width: 10rem;
  height: 10rem;
  border-radius: 2.5rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.cream};
  cursor: pointer;
  padding: 3rem;

  .markedItem {
      path {
        fill: ${(props) => props.theme.colors.primary};
      }
  }
  .outlineIcon {
    path {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
    }
  }

  &:hover {
    .outlineIcon {
      path {
        stroke-width: 2;
      }
    }
  }
`;
