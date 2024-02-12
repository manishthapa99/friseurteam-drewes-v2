import styled, { css, keyframes } from "styled-components";

export const TabHeaderContainer = styled.div`
  display: inline-block;
  flex-direction: row;
  width: 100%;
`;

export const StylizedTab = styled.button`
  color: #000000;
  width: 100%;
  text-align: left;
  padding: 20px 0px;
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  border-bottom-color: #393e46;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  ${(p) =>
    p.active &&
    css`
      color: #000000;
      font-weight: bold;
      animation: ${inset} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
  ${(p) => !p.active && p.inactiveStyle}
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 1.25rem;
  flex-direction: row;
  width: 100%;
  justify-content: left;
  padding-left: 0px;
`;

export const TabsHolder = styled.div`
  display: flex;
  padding-left: 20px;
  flex-direction: column;
`;
export const TabsMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  // margin-bottom: 800px;
  
`;


export const inactiveTab = {
  opacity: 0.65
};



const inset = keyframes`
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
  }
  0% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.0);
            box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.0);
  }
`;