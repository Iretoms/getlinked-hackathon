import styled from "styled-components";
import sponsors from "../assets/sponsors.png";

const Partners = () => {
  return (
    <Section>
      <div className="container">
        <h1 className="title">Partners and Sponsors</h1>
        <p className="subtitle">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its parthers and sponsors
        </p>
        <Sponsors>
          <img src={sponsors} alt="sponsors" />
        </Sponsors>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  border-bottom: 0.1px solid rgba(225, 225, 225, 0.18);
  .container {
    padding: 3rem 0;
    width: 88%;
    margin: 0 auto;
    .title {
      font-family: "Clash Display", sans-serif;
      font-size: 1.8rem;
      text-align: center;
    }
    .subtitle {
      width: 40%;
      margin: 0.5rem auto 0;
      font-size: 0.8rem;
      line-height: 27.5px;
      text-align: center;
    }
  }
`;

const Sponsors = styled.div`
  width: 100%;
  padding: 7rem 0;
  margin: 3rem auto 0;
  border: 1px solid #d434fe;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 45rem;
    height: 15rem;
  }
`;

export default Partners;
