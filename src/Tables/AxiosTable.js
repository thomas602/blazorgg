import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import AccountWithProfileIcon from "./AccountWithProfileIcon";
import styles from "./AxiosTable.module.css";

const AxiosTable = () => {
  //1 - Configuro los hooks
  const [players, setPlayers] = useState([]);
  //2 - Función para mostrar los datos con axios
  const baseURL = "https://blazorgg-backend.azurewebsites.net/api/Players";

  const getData = async () => {
    await axios.get(baseURL).then((response) => {
      const data = response.data;
      setPlayers(data);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  //3 - Defino las columnas
  players.forEach((element) => {
    element.iconAndName = {
      name: element.accountName,
      profileIconUrl: element.profileIconUrl,
    };
  });
  const columns = [
    {
      name: "ranking",
      label: "#",
      options: {
        customBodyRender: (rowIndex, dataIndex) => dataIndex.rowIndex + 1,
      },
    },
    {
      name: "iconAndName",
      label: "Account",
      options: {
        customBodyRender: (value) => (
          <AccountWithProfileIcon
            imageUrl={value.profileIconUrl}
            name={value.name}
          />
        ),
      },
    },
    {
      name: "userName",
      label: "Name",
    },
    {
      name: "rank",
      label: "Rank",
    },
    {
      name: "leaguePoints",
      label: "LP",
    },
    {
      name: "wins",
      label: "Wins",
    },
    {
      name: "losses",
      label: "Losses",
    },
    {
      name: "winrate",
      label: "Winrate",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => `${value}%`,
      },
    },
    {
      name: "totalGames",
      label: "Total Games",
    },
  ];
  //4 - Renderizo la DataTable
  const options = {
    selectableRowsHideCheckboxes: true,
  };
  return (
    <MUIDataTable
      title={"Players"}
      data={players}
      columns={columns}
      options={options}
      className={styles.center}
    ></MUIDataTable>
  );
};

export default AxiosTable;
