import React from "react";
import Image from "next/image";

import blade1 from "../../../../Images/Image/blade1.png";
import blade2 from "../../../../Images/Image/blade2.png";
import dronebody from "../../../../Images/Image/dronebody.png";
import "./droneprops.css";

const DronProps = () => {
  return (
    <div className="relative">

      <div id="dronecontainer" className=" lg:left-[-20%] left-[-10px] 2xl:left-[-200px]">
      {/* <Image width={200} height={200} src={blade1} alt="Propeler" /> */}
        <Image
          // width={200}
          // height={200}
          src={dronebody}
          alt="Propeler"
          id="dronebody"
        />
        <div className="prop_CW" id="prop1">
        <Image
          // width={200}
          // height={200}
          src={blade1}
          alt="Propeler"
          style={{transform:"rotate(15deg)",width:"100%"}}
        />
        </div>

        <div className="prop_CCW" id="prop2">
        <Image
          // width={200}
          // height={200}
          src={blade2}
          alt="Propeler"
          className="hovCCW"
          style={{ transform:"rotate(58deg)",width:"100%"}}
        />
          
        </div>
        <div className="prop_CCW" id="prop3">
        <Image
          // width={200}
          // height={200}
          src={blade2}
          alt="Propeler"
          className="hovCCW"
          style={{transform:"rotate(195deg)",width:"100%"}}
        />
          
        </div>
        <div className="prop_CW" id="prop4">
        <Image
          // width={200}
          // height={200}
          src={blade1}
          alt="Propeler"
          // id="dronebody"
          className="hovCCW"
          style={{ transform:"rotate(280deg)",width:"100%"}}
        />
          {/* <img
            src="/wireframe bundle/blade CW.png"
            style={{ width: "100%", transform: "rotate(280deg)" }}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default DronProps;
