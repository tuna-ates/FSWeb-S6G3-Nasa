import { Button } from "reactstrap";
import styled from "styled-components";
//import "./Header.css"
const StyHeader = styled.div`
  border-bottom: 2px solid red;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  background-color: black;
  color: white;
  align-items: center;
`;
const HeaderImg = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

const Header = (props) => {
  const { date, setDate,setRandom} = props;
  const chanHandler = (e) => {
    setDate(e.target.value);
    setRandom(false);
  };
  const handleClick=()=>{
    setRandom(true);
  }
  return (
    <StyHeader className="header">
      <HeaderImg src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"></HeaderImg>
      <Button onClick={handleClick} color="primary">
       Random Pick
  </Button>
      <input onChange={chanHandler} value={date} type="date" />
    </StyHeader>
  );
};
export default Header;
