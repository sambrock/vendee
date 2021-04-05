import Header from "./layout/Header";
import Nav from "./layout/Nav";

const Page = ({ children }) => (
  <>
    <Nav />
    <div className="page-container">
      <Header />
      {children}
    </div>
  </>
)

export default Page;