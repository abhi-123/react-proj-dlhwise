import React from "react";

import { Text } from "components";

const MyProfilePageRowmodelfile = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="ml-[7px] text-center text-white-A700 text-xl"
          size="txtPoppinsRegular20"
        >
          {props?.collectiontext}
        </Text>
        <div className="h-[21px] ml-[5px] relative w-[10%]">
          <div className="absolute h-4 inset-[0] justify-center m-auto shadow-bs1 w-full"></div>
          <Text
            className="absolute h-full inset-[0] justify-center m-auto text-center text-sm text-white-A700 w-max"
            size="txtPoppinsRegular14"
          >
            {props?.twelvetext}
          </Text>
        </div>
      </div>
    </>
  );
};

MyProfilePageRowmodelfile.defaultProps = {
  collectiontext: "Collection",
  twelvetext: "12",
};

export default MyProfilePageRowmodelfile;
