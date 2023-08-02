import React from "react";

import { Img, Text } from "components";

const MyProfilePageModelcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[225px] sm:h-auto object-cover rounded-tl-sm rounded-tr-sm w-full"
          src="images/img_3dviewerrectangle.png"
          alt="3dviewerrectang"
        />
        <div className="md:h-[86px] h-[90px] mt-0.5 pb-[5px] relative w-full">
          <div className="h-[84px] mx-auto w-full">
            <div className="absolute border border-blue_gray-600 border-solid h-[84px] inset-[0] justify-center m-auto rounded-bl-[3px] rounded-br-[3px] w-full"></div>
            <Text
              className="absolute left-[2%] text-base text-white-A700 top-[2%]"
              size="txtPoppinsMedium16"
            >
              {props?.username}
            </Text>
          </div>
          <Text
            className="absolute bottom-[13%] leading-[12.00px] left-[2%] text-[10px] text-white-A700 w-[67%] sm:w-full"
            size="txtPoppinsLight10"
          >
            {props?.userdescription}
          </Text>
          <div className="absolute bottom-[9%] flex flex-col gap-3.5 items-end justify-start right-[2%] w-[18%]">
            <Text className="text-white-A700 text-xs" size="txtCourier12">
              {props?.userprice}
            </Text>
            <div className="flex flex-col items-center justify-start w-[87%] md:w-full">
              <Text
                className="text-[7px] text-white-A700"
                size="txtPoppinsExtraLight7"
              >
                {props?.licensetypes}
              </Text>
              <Img
                className="h-3.5 w-[50px]"
                src="images/img_frame1177_19.svg"
                alt="frame1177"
              />
            </div>
          </div>
          <div className="absolute flex flex-row items-start justify-start left-[2%] top-[28%] w-[27%]">
            <div className="bg-blue_gray-100 h-[13px] rounded-md w-[13px]"></div>
            <Text
              className="ml-1 text-[9.5px] text-white-A700"
              size="txtPoppinsRegular95"
            >
              {props?.usercreatorname}
            </Text>
          </div>
          <Img
            className="absolute h-[22px] right-[3%] top-[7%] w-[134px]"
            src="images/img_mediumrankicons.svg"
            alt="mediumrankicons"
          />
        </div>
      </div>
    </>
  );
};

MyProfilePageModelcard.defaultProps = {
  username: "Pigeon",
  userdescription:
    "This text is sample text. This is where a short description of the model will be. I think this should provide sufficient space",
  userprice: "$1200.00",
  licensetypes: "License Types",
  usercreatorname: "creator_name",
};

export default MyProfilePageModelcard;
