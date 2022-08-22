import AxiosTable from "../Tables/AxiosTable";
import styles from "./Main.module.css";
import axios from "axios";

function Main(props) {
  const baseURL = "https://blazorgg-backend.azurewebsites.net/api/Players";
  function UpdatePlayers() {
    axios
      .post(`${baseURL}/update-players`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    window.location.reload(false);
  }

  return (
    <div className={styles.center}>
      <button className={styles.btn} onClick={UpdatePlayers}>
        Update
      </button>
      <AxiosTable />
    </div>
  );
}

export default Main;
