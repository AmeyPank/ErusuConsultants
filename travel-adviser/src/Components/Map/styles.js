import { css } from "@emotion/react";

export const paper = css`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
`;

export const mapContainer = css`
  height: 85vh;
  width: 100%;
`;

export const markerContainer = css`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  
  &:hover {
    z-index: 2;
  }
`;

export const pointer = css`
  cursor: pointer;
`;
