import styled from "styled-components";

const IconWrap = styled.img`
  width: ${(props) => (props.iconMobile ? "7wh" : "60px")};
  height: ${(props) => (props.iconMobile ? "7vh" : "60px")};
  // margin-right: 10px;
  display: flex;
`;

export default IconWrap;
