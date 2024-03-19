import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  /* height: 400px; */
  width: 400px;
  margin: 0 auto;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  padding: 20px;
  width: calc(100% - 36px - 40px);
  /* display: block; */
  left: 50%;
  background-color: white;
  transform: translate(-50%, 50%);
  bottom: 0;
  z-index: 10;
  border-radius: 20px;
  /* display: flex; */
`;
const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin-bottom: 30px;
`;
const CardUser = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const UserName = styled.span`
  font-size: 16px;
  color: #333333;
  font-weight: 300;
`;
const UserImg = styled.img`
  width: 30px;
  height: 30px;
  background-color: #c4c4c4;
  object-fit: cover;
  border-radius: 50%;
`;
const UserHeart = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;
const HeartSpan = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #333333;
`;
const CardFooter = styled.div`
  height: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FooterTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  ${(props) =>
    props.red &&
    css`
      color: red;
    `}
`;
const FooterSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(
    86.88deg,
    #7d6aff 1.38%,
    #ffb86c 64.35%,
    #fc2872 119.91%
  );

  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `}
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;
const Card = (props) => {
  console.log(props.secondary);
  return (
    <StyledCard>
      <CardImage>
        <CardImg src={props.image} alt="image" />
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserImg src={props.image} alt="avatar" />
            <UserName>{props.username || "@zndrson"}</UserName>
          </CardUser>
          <UserHeart>
            <img src="/coolicon.svg" alt="heart" />
            <HeartSpan>256</HeartSpan>
          </UserHeart>
        </CardTop>
        <CardFooter>
          <FooterTitle red={props.red}>Cosmic Perspective</FooterTitle>
          <FooterSpan secondary={props.secondary}>12,000 PSL</FooterSpan>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
