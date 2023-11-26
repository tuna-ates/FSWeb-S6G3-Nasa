import Images from "./Images";
import Videos from "./Videos";
import "./pageBody.css"

const PageBody=(prop)=>{

  const {data}=prop;
    return <div className="pageBody">
   <h2 className="title">{data.title}</h2>
   {data.media_type==="image"? <Images img={data.url}/>: <Videos data={data.url}/>}
      <div className="dateAndcopyright">
       <p>{data.date}</p>
       <p>{data.copyright}</p>
      </div>
      <div className="explanation">
        {data.explanation};
      </div>
    </div>
  }
  export default PageBody;