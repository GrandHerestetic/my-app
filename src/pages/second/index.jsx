import Note from "../../components/record";
import style from "./style.module.css";
import logout from "../../assets/logout.svg";
import search from "../../assets/search.svg";

const SecondPage = () => {
  return (
    <div className={style.app}>
      <div className={style.navbar}>
        <p className={style.logo}>Logo</p>
        <a href="#" className={style.link_1}>
          <p>Calendar</p>
        </a>
        <a href="#" className={style.link_2}>
          <p>Project Report</p>
        </a>
        <div className={style.logOut}>
          <img src={logout} alt="" />
          <p>Log Out</p>
        </div>
      </div>
      <div className={style.subHeader}>
        <div className={style.filterByName}>
          <div>
            <img src={search} alt="" />
          </div>
          <input placeholder="Search by Name..." />
        </div>
        <div className={style.icon}>
          <img src="" alt="" />
        </div>
        <p className={style.personalInfoName}>Mr.President</p>
        <p className={style.personalInfoPosition}>Managing Director</p>
      </div>
      <div className={style.records}>
        <div className={style.subTitle}>
          <p className={style.Title}>Total Contact</p>
          <button className={style.btn}>Add+</button>
        </div>
        <div className={style.titles}>
          <p className={style.t}>Client</p>
          <p className={style.t}>Client name</p>
          <p className={style.t}>TRN/PPSN</p>
          <p className={style.t}>Year end</p>
          <p className={style.t}>ARD</p>
          <p className={style.t}>Company Number</p>
          <p className={style.t}>Email</p>
          <p className={style.t}>Phone Number</p>
          <p className={style.t}>Company address</p>
          <p className={style.t}>Action</p>
        </div>
        <Note row="3" />
        <Note row="4" />
        <Note row="5" />
        <Note row="6" />
        <Note row="7" />
        <Note row="8" />
        <Note row="9" />
        <div className={style.pagination}></div>
      </div>
    </div>
  );
};

export default SecondPage;
