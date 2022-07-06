import React from "react";
import styled from "styled-components";
import { ImgAnime } from "../../images";
import { mediaQuery } from "../../styles/constants/mediaQuery";

export const CardAnime = () => (
  <Container>
    <div className="item-anime">
      <img src={ImgAnime} alt="image" />
      <div className="hover-effect">
        <h3>Titulo del anime</h3>
        <p>
          Lorem ipsum, Magnam asperiores, quam doloremque deleniti amet facere
          dolore tempore natus dignissimos voluptates illo animi doloribus! Quis
          sint eveniet, quibusdam in amet error, quibusdam in amet error bla bla
          bla bla
        </p>
      </div>
    </div>
  </Container>
);

const Container = styled.div`
  .item-anime {
    position: relative;
    margin: 1rem;
    border-radius: 1rem;
    width: 16rem;
    height: 22rem;
    overflow: hidden;
    transform: scale(1);
    transition: transform 0.5s cubic-bezier(0.34, 1.61, 0.7, 1);
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    ${mediaQuery.minTablet} {
      width: 22em;
      height: 13em;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .hover-effect {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: translateY(100%);
      -webkit-transition: transform ease-in-out 0.5s;
      transition: transform ease-in-out 0.5s;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      color: setColor(light);
      opacity: 0;
      padding: 0.7em;

      p {
        font-size: small;
        height: auto;
        width: 95%;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    &:hover {
      .hover-effect {
        opacity: 5;
        background: rgb(0, 0, 0);
        background: linear-gradient(
          2deg,
          rgba(0, 0, 0, 1) 0%,
          rgba(25, 25, 42, 0.6685049019607843) 30%,
          rgba(255, 255, 255, 0) 42%
        );
        transform: translateY(0%);
        ${mediaQuery.minTablet} {
          background: linear-gradient(
            2deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(25, 25, 42, 0.6685049019607843) 30%,
            rgba(255, 255, 255, 0) 72%
          );
        }
      }
    }
  }
`;
