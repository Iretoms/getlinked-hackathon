import styled from "styled-components";
import bigCup from "../assets/bigCup.png";
import goldMedal from "../assets/goldMedal.png";
import silverMedal from "../assets/silverMedal.png";
import bronzeMedal from "../assets/bronzeMedal.png";

const Prices = () => {
  return (
    <Section>
      <div className="title">
        <div>
          <h1>Prizes and</h1>
          <h1>Rewards</h1>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
      </div>
      <Trophy>
        <article className="cupTrophy">
          <img src={bigCup} alt="cup" />
        </article>
        <article className="medals">
          <div className="medal">
            <img src={silverMedal} alt="silver" />
            <h1>2nd</h1>
            <p>Runner</p>
            <h1 className="price">N300,000</h1>
          </div>
          <div className="medal">
            <img src={goldMedal} alt="silver" />
            <h1>1st</h1>
            <p>Runner</p>
            <h1 className="price">N400,000</h1>
          </div>
          <div className="medal">
            <img src={bronzeMedal} alt="silver" />
            <h1>3rd</h1>
            <p>Runner</p>
            <h1 className="price">N150,000</h1>
          </div>
        </article>
      </Trophy>
    </Section>
  );
};

const Section = styled.section`
  padding: 3rem 0;
  position: relative;
  width: 100%;
  min-height: 100vh;
  border-bottom: 0.1px solid rgba(225, 225, 225, 0.18);
  .title {
    width: 88%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    div {
      width: 40%;
      h1 {
        font-family: "Clash Display", sans-serif;
        font-size: 1.8rem;
        &:nth-child(2) {
          color: #d434fe;
        }
      }
      p {
        width: 80%;
        margin-top: 1rem;
        font-size: 0.8rem;
        line-height: 20px;
      }
    }
  }
`;

const Trophy = styled.div`
  width: 88%;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  align-items: flex-end;
  .cupTrophy {
    img {
      width: 33rem;
      height: 28rem;
    }
  }
  .medals {
    display: flex;
    gap: 1rem;
    .medal {
      background-color: rgba(212, 52, 254, 0.1);
      padding-top: 6rem;
      text-align: center;
      width: 10rem;
      height: 12rem;
      position: relative;
      border: 1px solid #d434fe;
      border-radius: 5px;
      img {
        position: absolute;
        top: -4rem;
        right: 1.1rem;
        width: 8rem;
        height: 8rem;
      }
      .price {
        margin-top: 0.5rem;
        color: #d434fe;
      }
      &:nth-child(2) {
        background-color: rgba(144, 58, 255, 0.1);
        padding-top: 5rem;
        margin-top: 1rem;
        border-color: #903aff;
        img {
          width: 14rem;
          height: 14rem;
          top: -10rem;
          right: -2rem;
        }
        .price {
          margin-top: 1rem;
          color: #903aff;
        }
      }
    }
  }
`;

export default Prices;
