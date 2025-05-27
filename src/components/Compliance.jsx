import React from "react";
import Globally from "./compliance/Globally";
import Control from "./compliance/Control";
import Resources from "./compliance/Resources";

const Compliance = () => {
  return (
    <div>
      <Globally />
          <Control />
          <Resources/>
    </div>
  );
};

export default Compliance;
