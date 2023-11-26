
import "./Header.css"

const Header=(props)=>{
  const {date,setDate}=props;
  const chanHandler=(e)=>{
     setDate(e.target.value)
  }
    return <div className="header">
    <img src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"></img>
    <input onChange={chanHandler} value={date} type="date"/>
    </div>
  }
  export default Header;