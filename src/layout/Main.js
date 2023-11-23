import Header from "./Header";
import PageBody from "./PageBody";
import Footer from "./Footer";

const Main = (prop) => {
  const {data}=prop;
  return (
    <div className="container">
      <Header />
      <PageBody data={data} />
      <Footer />
    </div>
  );
};
export default Main;
