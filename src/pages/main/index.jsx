import style from "./style.module.css";
import eye from "../../assets/eye-2.svg";
import { NavLink } from "react-router-dom";

const MainPage = (props) => {
  return (
    <div className={style.App}>
      <div className={style.title}>
        <p className={style.logo}>{props.title}</p>
        <p className={style.subtitle}>Welcome to CRM system</p>
        <p className={style.subtitle}>Sign to your account</p>
        <p>Today is {props.day}</p>
      </div>
      <form className={style.form}>
        <p>Login</p>
        <input type="text"></input>
        <p>Password</p>
        <img src={eye} alt="" className={style.eye} />
        <input type="text"></input>
        <NavLink to="/main">
          <button className={style.submition}>Sign Up</button>
        </NavLink>
      </form>
    </div>
  );
};

export default MainPage;
