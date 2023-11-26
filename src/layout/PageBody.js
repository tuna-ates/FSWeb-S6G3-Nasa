import styled from "styled-components";
import Images from "./Images";
import Videos from "./Videos";
import "./pageBody.css";

const Container = styled.div`
  border-bottom: 2px solid red;
  flex-grow: 1;
  height: auto;
  flex-wrap: wrap;
  margin: 5rem 20rem;
  border: 2px solid white;
  border-radius: 2rem;
  background-color: rgb(34, 32, 32);
  color: white;
  padding: 1rem 0;
`;
const Title = styled.h2`
  text-align: center;
  color: ${(props) => (props.type === "video" ? "red" : "green")};
`;
const DateAndCopyright = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 3rem;
  font-size: large;
  &:hover {
    background: gray;
  }
`;
const Info = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;
const CriticalInfo = styled(Info)`
  color: red;
`;
const PageBody = (prop) => {
  const { data } = prop;
  return (
    <Container>
      <Title type={data.media_type}>{data.title}</Title>
      {data.media_type === "image" ? (
        <Images img={data.url} />
      ) : (
        <Videos data={data.url} />
      )}
      <DateAndCopyright className="dateAndcopyright">
        <Info>{data.date}</Info>
        <CriticalInfo>{data.copyright}</CriticalInfo>
      </DateAndCopyright>
      <div className="explanation">{data.explanation};</div>
    </Container>
  );
};
export default PageBody;
