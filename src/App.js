import "./App.css";
import axios from "axios";
import React from "react";
import AxiosTable from "./Tables/AxiosTable";

const baseURL = "https://blazorgg-backend.azurewebsites.net/api/Players";

function App() {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
  if (!post) return null;

  return <AxiosTable />;
}

export default App;
