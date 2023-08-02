import React from "react";

import { Img, Text } from "components";

const PlatformHomePageColumnmodelformats = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-white-A700 text-xs w-auto"
          size="txtPoppinsSemiBold12"
        >
          {props?.modelformats}
        </Text>
        <div className="flex flex-col gap-[-6px] h-[121px] md:h-auto items-center justify-end w-[251px] md:w-full">
          <div className="border border-blue_gray-600 border-solid h-[121px] rounded-sm w-full"></div>
          <Img
            className="h-1 w-[18px]"
            src="images/img_component2.svg"
            alt="componentThree"
          />
        </div>
      </div>
    </>
  );
};

PlatformHomePageColumnmodelformats.defaultProps = {
  modelformats: "Model Formats",
};

export default PlatformHomePageColumnmodelformats;
