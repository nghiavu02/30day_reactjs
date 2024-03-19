import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  width: 400px;
  margin: 0 auto;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
  }
  .card-img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
  .card-content {
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
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .user-img {
    width: 30px;
    height: 30px;
    background-color: #c4c4c4;
    object-fit: cover;
    border-radius: 50%;
  }
  .user-span {
    font-size: 16px;
    color: #333333;
    font-weight: 300;
  }
  .user-heart {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  .heart-span {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    color: ${(props) => props.theme.colors.blue};
  }
  .card-footer {
    height: 27px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-title {
    font-size: 18px;
    color: #000000;

    ${(props) =>
      props.red &&
      css`
        color: red;
      `};
    font-size: ${(props) => props.fontSize || 18}px;
    font-weight: 600;
  }
  .footer-span {
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
  }
`;

const Card3 = (props) => {
  return (
    <StyledCard
      secondary={props.secondary}
      fontSize={props.fontSize}
      red={props.red}
    >
      <div className="card-image">
        <img className="card-img" src={props.image} alt="image" />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img className="user-img" src={props.image} alt="avatar" />
            <span className="user-span text-[#7c3ea3]">@zndrson</span>
          </div>
          <div className="user-heart">
            <img className="" src="/coolicon.svg" alt="heart" />
            <span className="heart-span">256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="footer-title">Cosmic Perspective</h3>
          <span className="footer-span" secondary>
            12,000 PSL
          </span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card3;
