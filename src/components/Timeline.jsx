import styled from "styled-components";

const Timeline = () => {
  return (
    <Section>
      <div className="container" id="timeline">
        <h1 className="title">Timeline</h1>
        <p className="subtitle">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
        <StyledTimeline>
          <div className="straightLine"></div>
          <div className="timeline">
            <div>
              <h1>Hackathon Announcement</h1>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div>1</div>
            <div>
              <h1>November 18, 2023</h1>
            </div>
          </div>
          <div className="straightLine"></div>
          <div className="timeline">
            <div>
              <h1>November 18, 2023</h1>
            </div>
            <div>2</div>
            <div>
              <h1>Teams Registration begins</h1>
              <p>
                Interested team can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
          </div>
          <div className="straightLine"></div>
          <div className="timeline">
            <div>
              <h1>Teams Registration ends</h1>
              <p>Interested participants are no longer Allowed to register</p>
            </div>
            <div>3</div>
            <div>
              <h1>November 18, 2023</h1>
            </div>
          </div>
          <div className="straightLine"></div>
          <div className="timeline">
            <div>
              <h1>November 18, 2023</h1>
            </div>
            <div>4</div>
            <div>
              <h1>Announcement of accepted teams and ideas</h1>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
          </div>
          <div className="straightLine"></div>
          <div className="timeline">
            <div>
              <h1>Getlinked Hackathon 1.0 Officially Begins</h1>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div>5</div>
            <div>
              <h1>November 18, 2023</h1>
            </div>
          </div>
          <div className="straightLine"></div>
          <div className="timeline">
            <div>
              <h1>November 18, 2023</h1>
            </div>
            <div>6</div>
            <div>
              <h1>Demo Day</h1>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </StyledTimeline>
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
      width: 35%;
      margin: 0.5rem auto 0;
      font-size: 0.8rem;
      line-height: 27.5px;
      text-align: center;
    }
  }
`;

const StyledTimeline = styled.div`
  width: 90%;
  margin: 4rem auto 0;
  .straightLine {
    margin: 0 auto;
    background-color: #d434fe;
    height: 4rem;
    width: 3px;
  }
  .timeline {
    display: flex;
    align-items: center;
    gap: 3rem;
    h1 {
      color: #d434fe;
      font-size: 1.1rem;
    }
    p {
      margin-top: 0.8rem;
      font-size: 0.8rem;
      line-height: 20px;
    }

    div {
      &:nth-child(1) {
        width: 45%;
        text-align: right;
      }
      &:nth-child(2) {
        background-image: linear-gradient(to right, #d434fe 30%, #903aff);
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:nth-child(3) {
        width: 45%;
        text-align: left;
      }
    }
  }
`;

export default Timeline;
