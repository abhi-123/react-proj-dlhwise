import React from "react";

import { Img, SeekBar, Text } from "components";

const PlatformHomePageSlider = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row items-center justify-between mb-[-12px] mt-auto mx-auto w-[71%] md:w-full z-[1]">
          <div className="flex flex-col items-center justify-start pb-3 w-[16%]">
            <div className="h-5 md:h-[19px] pb-[0.41px] relative w-[22px]">
              <Img
                className="absolute h-[19px] inset-x-[0] mx-auto top-[0] w-[22px]"
                src="images/img_volume.svg"
                alt="volume"
              />
              <Text
                className="absolute bottom-[-3%] right-[5%] text-[10px] text-center text-white-A700"
                size="txtCourier10"
              >
                {props?.knobmaxvalue}
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start pb-3 w-[16%]">
            <div className="h-5 md:h-[19px] pb-[0.41px] relative w-[22px]">
              <Img
                className="absolute h-[19px] inset-x-[0] mx-auto top-[0] w-[22px]"
                src="images/img_volume.svg"
                alt="volume_One"
              />
              <Text
                className="absolute bottom-[-3%] inset-x-[0] mx-auto text-[10px] text-center text-white-A700 w-max"
                size="txtCourier10"
              >
                {props?.knobminvalue}
              </Text>
            </div>
          </div>
        </div>
        <SeekBar
          inputValue={[0, 0]}
          trackColors={["#004dff6c", "#004dff", "#004dff6c"]}
          thumbClassName="h-3 outline-black-900_19 outline-[1px] outline bg-white-A700 shadow-bs w-3 flex mb-[undefinedpx] z-[1] justify-center items-center rounded-[50%]"
          className="flex h-3 mt-auto mx-auto rounded-sm w-full"
          trackClassName="h-[3px] flex mb-[undefinedpx] z-[1] rounded-sm w-full"
        />{" "}
      </div>
    </>
  );
};

PlatformHomePageSlider.defaultProps = {
  knobmaxvalue: "60",
  knobminvalue: "300",
};

export default PlatformHomePageSlider;
