import React from "react";

import { Text } from "components";

const UploadFormOneStackpersonallicense = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute h-[84px] md:h-[86px] inset-[0] justify-center m-auto w-full">
          <div className="bg-white-A700_0c border border-blue_gray-600 border-solid h-[86px] m-auto rounded-[3px] w-full"></div>
          <div className="absolute bg-gray-900 border border-blue_gray-600 border-solid h-4 inset-y-[0] left-[2%] my-auto rounded-[50%] w-4"></div>
        </div>
        <Text
          className="absolute left-[8%] text-lg text-white-A700 top-[0]"
          size="txtPoppinsLight18"
        >
          {props?.username}
        </Text>
        <Text
          className="absolute bottom-[2%] leading-[14.00px] right-[2%] text-white-A700 text-xs w-[90%] sm:w-full"
          size="txtTimesRoman12"
        >
          {props?.userdescription}
        </Text>
      </div>
    </>
  );
};

UploadFormOneStackpersonallicense.defaultProps = {
  username: "Editorial License",
  userdescription:
    "You covenant, represent, and warrant that this is your original work and contains no intellectual property or other rights of any kind of which you are not the exclusive owner.",
};

export default UploadFormOneStackpersonallicense;
