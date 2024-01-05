import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css/normalize.css";

import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import { Suggest } from "@blueprintjs/select";
import { InputGroup } from "@blueprintjs/core";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="bp-5">
      <div style={{ display: "flex" }}>
        <InputGroup placeholder="Placeholder text" />
        <InputGroup placeholder="Placeholder text" />
        <InputGroup placeholder="Placeholder text" />
      </div>
      <div style={{ display: "flex" }}>
        <Suggest
          popoverProps={{ minimal: true }}
          items={["a", "b", "c"]}
          itemRenderer={(item, { handleClick }) => {
            return <div onClick={handleClick}>{item}</div>;
          }}
          onItemSelect={(item) => console.log(item)}
          itemPredicate={(query, item) => item.includes(query)}
          inputValueRenderer={(item) => item}
          inputProps={{
            placeholder: "Type to search",
          }}
        />
        <InputGroup placeholder="Placeholder text" />
        <InputGroup placeholder="Placeholder text" />
      </div>
    </div>
  </React.StrictMode>
);
