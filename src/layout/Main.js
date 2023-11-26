import Header from "./Header";
import PageBody from "./PageBody";
import Footer from "./Footer";

const Main = (prop) => {
  const {data,date,setDate}=prop;
  return (
    <div className="container">
      <Header date={date} setDate={setDate} />
      <PageBody data={data} />
      <Footer />
    </div>
  );
};
export default Main;
