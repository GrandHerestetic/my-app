import style from "./style.module.css";
import trash from "../assets/trash.svg";
import pen from "../assets/pen.svg";

const Note = (props) => {
  return (
    <div
      className={style.record}
      style={{ gridRowStart: props.row, gridRowEnd: props.row }}
    >
      <p className={style.t}><input type="checkbox"/>Client</p>
      <p className={style.t}>Client name</p>
      <p className={style.t}>TRN/PPSN</p>
      <p className={style.t}>Year end</p>
      <p className={style.t}>ARD</p>
      <p className={style.t}>Company Number</p>
      <p className={style.t}>Email</p>
      <p className={style.t}>Phone Number</p>
      <p className={style.t}>Company address</p>
      <p className={style.image}>
        <img src={pen} alt="" />
        <img src={trash} alt="" />
      </p>
    </div>
  );
};

export default Note;
