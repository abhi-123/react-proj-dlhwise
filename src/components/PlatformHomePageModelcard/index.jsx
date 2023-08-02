import React from "react";

import { Img, Text } from "components";

const PlatformHomePageModelcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[200px] sm:h-auto object-cover rounded-tl-sm rounded-tr-sm w-full"
          src="images/img_3dviewerrectangle.png"
          alt="3dviewerrectang"
        />
        <div className="border border-blue_gray-600 border-solid flex flex-col items-center justify-end mt-0.5 p-[3px] rounded-bl-[3px] rounded-br-[3px] w-full">
          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="md:h-6 h-9 relative w-[38%]">
                <Text
                  className="absolute left-[0] text-base text-white-A700 top-[0]"
                  size="txtPoppinsMedium16"
                >
                  {props?.username}
                </Text>
                <div className="absolute bottom-[0] flex flex-row items-start justify-evenly left-[0] w-[87%]">
                  <div className="bg-blue_gray-100 h-[13px] rounded-md w-[13px]"></div>
                  <Text
                    className="text-[9.5px] text-white-A700"
                    size="txtPoppinsRegular95"
                  >
                    {props?.creatorname}
                  </Text>
                </div>
                <div className="absolute flex flex-row items-start justify-evenly right-[0] top-[11%] w-[34%]">
                  <Img
                    className="h-2.5 w-2.5"
                    src="images/img_1565103likelike.svg"
                    alt="1565103likelike"
                  />
                  <Text
                    className="text-[10px] text-center text-white-A700"
                    size="txtPoppinsLight10"
                  >
                    {props?.zipcode}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-end justify-start w-[43%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[18px] items-end justify-start pl-[3px] py-[3px] w-full"
                  style={{
                    backgroundImage: "url('images/img_modelquality.svg')",
                  }}
                >
                  {!!props?.ploslogo20201 ? (
                    <Img
                      className="h-[5px] md:h-auto mb-1.5 object-cover rounded-[1px] w-[8%]"
                      alt="ploslogo20201"
                      src="props?.ploslogo20201"
                    />
                  ) : null}
                </div>
                <Text className="text-white-A700 text-xs" size="txtCourier12">
                  {props?.price}
                </Text>
              </div>
            </div>
            <div className="flex flex-row items-end justify-evenly w-full">
              <Text
                className="sm:flex-1 leading-[12.00px] text-[10px] text-white-A700 w-[81%] sm:w-full"
                size="txtPoppinsLight10"
              >
                {props?.description}
              </Text>
              <div className="h-[23px] md:h-[27px] mt-[13px] relative w-1/5">
                <Text
                  className="absolute left-[0] text-[7px] text-white-A700 top-[0]"
                  size="txtPoppinsExtraLight7"
                >
                  {props?.licensetypes}
                </Text>
                <Img
                  className="absolute bottom-[0] h-3.5 inset-x-[0] mx-auto w-[50px]"
                  src="images/img_frame1177.svg"
                  alt="frame1177"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PlatformHomePageModelcard.defaultProps = {
  username: "Pigeon",
  creatorname: "creator_name",
  zipcode: "1620",
  price: "$1200.00",
  description:
    "This text is sample text. This is where a short description of the model will be. I think this should provide sufficient space",
  licensetypes: "License Types",
};

export default PlatformHomePageModelcard;
