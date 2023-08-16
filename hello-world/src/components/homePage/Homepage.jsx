import MyHeader from "../common/MyHeader";
import MainBox from "../common/mainBox/mainBox";
import "./Main.scss";

const Homepage = () => {
  return (
    <div className="homeWidget">
      <MainBox/>
      <MainBox/>
      <MainBox/>
    </div>
  )
}

export default Homepage;
