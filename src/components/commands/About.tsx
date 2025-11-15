import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Abdannasser Mbarki</HighlightSpan>.
      </p>
      <p>
        I'm a <HighlightAlt>Software engineer</HighlightAlt> based in Tunisia.
      </p>
      <p>
        I am passionate about reverse engineering, software developpment and <br />
        agentic coding. I also enjoy coding, automating tasks and playing CTFs.
      </p>
    </AboutWrapper>
  );
};

export default About;
