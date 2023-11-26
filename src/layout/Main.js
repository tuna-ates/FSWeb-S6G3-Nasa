import Header from "./Header";
import PageBody from "./PageBody";
import Footer from "./Footer";

const Main = (prop) => {
  const {data,date,setDate,setRandom}=prop;
  return (
   data&& <div className="container">
      <Header setRandom={setRandom} date={date} setDate={setDate} />
      <PageBody data={data} />
      <Footer />
    </div>
  );
};
export default Main;
