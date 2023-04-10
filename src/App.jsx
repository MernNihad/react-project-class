import React, { useState } from "react";
import Card from "./component/Card";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("klkl");
  const [link, setLink] = useState("fgf");
  const [subTitle, setSubTitle] = useState("fdf");
  const [description, setDescription] = useState("dfdfd");
  const [value, setValue] = useState([]);
  let url = "https://api.publicapis.org/entries";
  axios.get(`${url}`).then((response) => {
    const { count, entries } = response.data;
    setValue(entries);
  });

  return (
    <div className="container">
      <div className="row">
        {value.map((response) => (
          <Card
            className={""}
            title={response.API}
            sub_title={response.Category}
            description={response.Description}
            link={response.Link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
