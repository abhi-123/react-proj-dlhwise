import React from "react";

import { Button, Img, Text } from "components";

const UploadFormOneColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
          <div className="flex flex-row items-start justify-start w-full">
            <Img
              className="h-[26px] mt-0.5 rounded-[3px] w-[26px]"
              src="images/img_1619000objobj.svg"
              alt="1619000objobj"
            />
            <Text
              className="ml-[5px] mt-[9px] text-white-A700 text-xs"
              size="txtPoppinsLight12WhiteA700"
            >
              {props?.imagename}
            </Text>
            <Text
              className="ml-[62px] text-[10px] text-center text-white-A700"
              size="txtPoppinsLight10"
            >
              {props?.modelid}
            </Text>
            <Text
              className="ml-[5px] text-[10px] text-white-A700"
              size="txtPoppinsMedium10"
            >
              {props?.distance}
            </Text>
          </div>
          <div className="flex flex-row items-center justify-between mt-1 w-[96%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[98px]">
              <Button className="bg-white-A700_19 cursor-pointer font-light font-poppins min-w-[98px] outline outline-[0.5px] outline-blue_gray-600 py-0.5 rounded-[3px] text-[10px] text-center text-white-A700">
                {props?.filetype}
              </Button>
            </div>
            <Button className="bg-white-A700_19 cursor-pointer font-light font-poppins min-w-[98px] outline outline-[0.5px] outline-blue_gray-600 py-0.5 rounded-[3px] text-[10px] text-center text-white-A700">
              {props?.selecttype}
            </Button>
          </div>
          <div className="flex flex-row items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start mt-0.5 w-[18%]">
              <div className="md:h-3.5 h-[15px] px-[3px] relative w-7">
                <div className="absolute bg-blue_gray-800 h-3.5 inset-x-[0] mx-auto rounded-[3px] top-[0] w-full"></div>
                <Text
                  className="absolute bottom-[6%] inset-x-[0] mx-auto text-[10px] text-center text-white-A700 w-max"
                  size="txtPoppinsLight10"
                >
                  {props?.language}
                </Text>
              </div>
              <div className="flex flex-col items-center justify-center w-auto">
                <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                  <Text
                    className="text-[10px] text-center text-white-A700 w-auto"
                    size="txtPoppinsLight10"
                  >
                    {props?.size}
                  </Text>
                  <Text
                    className="text-center text-white-A700 text-xs w-auto"
                    size="txtPoppinsLight12WhiteA700"
                  >
                    {props?.filesize}
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-[34px] mb-0.5 ml-[51px] relative w-[31%]">
              <div className="bg-white-A700_19 h-5 mb-[undefinedpx] mt-auto mx-auto outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-full z-[1]"></div>
              <Text
                className="mb-[-0.05px] text-[10px] text-white-A700 z-[1]"
                size="txtPoppinsLight10"
              >
                {props?.renderingsoftware}
              </Text>
            </div>
            <div className="h-[34px] mb-0.5 ml-2.5 relative w-[13%]">
              <div className="bg-white-A700_19 h-5 mb-[undefinedpx] mt-auto mx-auto outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-full z-[1]"></div>
              <Text
                className="mb-[-0.78px] text-[10px] text-white-A700 z-[1]"
                size="txtPoppinsLight10"
              >
                {props?.version}
              </Text>
            </div>
            <Text
              className="ml-[47px] mt-[25px] text-[8px] text-white-A700_a2 underline"
              size="txtPoppinsLight8WhiteA700a2"
            >
              {props?.delete}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

UploadFormOneColumn.defaultProps = {
  imagename: "stem_surface(2023v.2).png",
  modelid: "Model ID",
  distance: "001M",
  filetype: "select file type",
  selecttype: "select type",
  language: ".png ",
  size: "Size",
  filesize: "20Mb",
  renderingsoftware: "Rendering Software",
  version: "Version",
  delete: "Delete",
};

export default UploadFormOneColumn;
