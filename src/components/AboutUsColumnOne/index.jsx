import React from "react";

import { Img, Text } from "components";

const AboutUsColumnOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-5 items-center justify-center w-[349px] md:w-full">
          <Img
            className="h-[465px] sm:h-auto object-cover rounded-bl-[30px] rounded-br-[30px] w-full"
            alt="rectangle4118"
            src="props?.userimage"
          />
          <div className="flex flex-col gap-[17px] items-center justify-end w-full">
            <div className="flex flex-col items-center justify-start w-[39%] md:w-full">
              <Text
                className="text-white-A700 text-xl"
                size="txtInterRegular20"
              >
                {props?.username}
              </Text>
              <Text
                className="mt-1.5 text-base text-white-A700"
                size="txtInterBold16"
              >
                {props?.usertitle}
              </Text>
              <div className="flex flex-row gap-3.5 items-center justify-center mt-[9px] w-[56%] md:w-full">
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_icon24linkedin.svg"
                  alt="icon24linkedin"
                />
                <Img
                  className="h-[30px] w-[30px]"
                  src="images/img_twitter21.svg"
                  alt="twitterTwentyOne"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="mb-[21px] text-base text-white-A700"
                size="txtInterBold16"
              >
                {props?.userbio}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AboutUsColumnOne.defaultProps = {
  userimage: "images/img_rectangle4118.png",
  username: "Adan Jackson",
  usertitle: "Founder & CEO",
  userbio: "BIO",
};

export default AboutUsColumnOne;
