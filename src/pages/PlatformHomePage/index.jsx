import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SeekBar, Text } from "components";
import PlatformHomePageColumnmodelformats from "components/PlatformHomePageColumnmodelformats";
import PlatformHomePageModelcard from "components/PlatformHomePageModelcard";
import PlatformHomePageSlider from "components/PlatformHomePageSlider";

const PlatformHomePagePage = () => {
  const navigate = useNavigate();

  const platformHomePageModelcardPropList = [
    {},
    {},
    {
      description:
        "This text is sample text. This is where a short description of the model will be. I think this should provide sufficient space.",
    },
    {},
    {},
    {},
    {},
    {},
    {
      description:
        "This text is sample text. This is where a short description of the model will be. I think this should provide sufficient space.",
    },
    {},
    {},
    {},
  ];

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-start mx-auto py-9 w-full">
        <div className="flex flex-col justify-start mb-1 w-full">
          <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[78px] md:px-5 w-full">
            <Img
              className="md:flex-1 h-11 sm:h-auto mb-0.5 object-cover w-[13%] md:w-full"
              src="images/img_bioslinewhite.png"
              alt="bioslinewhite"
            />
            <div className="flex flex-row items-start justify-between md:ml-[0] ml-[321px] md:mt-0 mt-2.5 w-[317px]">
              <Button
                className="common-pointer bg-transparent cursor-pointer font-medium min-w-[95px] py-1.5 text-base text-center text-indigo-400"
                onClick={() => navigate("/plarform")}
              >
                Home page
              </Button>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16"
                >
                  Platform
                </Text>
                <Line className="bg-white-A700 h-px w-full" />
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer font-medium min-w-[73px] py-1.5 text-base text-center text-indigo-400"
                onClick={() => navigate("/aboutus")}
              >
                About Us
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start mb-0.5 md:ml-[0] ml-[172px] w-[9%] md:w-full">
              <Button className="border border-indigo-400 border-solid cursor-pointer font-medium min-w-[100px] py-2.5 rounded-lg text-base text-center text-indigo-100">
                Log In
              </Button>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start mb-0.5 ml-6 md:ml-[0] w-[9%] md:w-full">
              <Button className="bg-blue-A700 cursor-pointer font-medium min-w-[100px] py-2.5 rounded-lg text-base text-center text-white-A700">
                Sign Up
              </Button>
            </div>
          </header>
          <div className="flex flex-col items-start justify-start max-w-[1425px] mt-[65px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-auto md:w-full">
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Biosphere
              </Text>
              <div className="flex flex-col gap-1 items-start justify-start w-[60px]">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16"
                >
                  Biomes
                </Text>
                <Line className="bg-white-A700 h-px w-full" />
              </div>
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Ecosystems
              </Text>
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Communities
              </Text>
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Organisms
              </Text>
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Organ systems
              </Text>
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Organs
              </Text>
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Tissues
              </Text>
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Cells
              </Text>
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Biotechnology
              </Text>
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Macromolecules
              </Text>
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Small Molecules
              </Text>
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Atoms
              </Text>
            </div>
            <Img
              className="h-px ml-2.5 md:ml-[0] mt-3"
              src="images/img_group.svg"
              alt="group"
            />
            <div className="flex flex-row gap-2 items-center justify-start md:ml-[0] ml-[3px] w-[22%] md:w-full">
              <div className="bg-blue_gray-900 border border-indigo-200 border-solid flex flex-col items-start justify-start p-1 rounded-[3px] w-[92%]">
                <Img
                  className="h-[22px] mb-[3px] ml-2 md:ml-[0] w-[23px]"
                  src="images/img_search.svg"
                  alt="search"
                />
              </div>
              <Img
                className="h-[19px] w-[19px]"
                src="images/img_menu.svg"
                alt="menu"
              />
            </div>
            <List
              className="flex flex-col gap-1.5 items-center mt-2.5 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row gap-2 items-center justify-between w-full">
                <div className="bg-white-A700_0c border border-blue_gray-600 border-solid flex md:flex-1 flex-col items-start justify-start mb-1 pb-3 px-3 rounded-[3px] w-1/5 md:w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtPoppinsLight16"
                  >
                    Filter
                  </Text>
                  <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5 w-auto">
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtPoppinsSemiBold12"
                    >
                      Model Quality
                    </Text>
                    <Img
                      className="h-[27px] w-[143px]"
                      src="images/img_component1variant3.svg"
                      alt="component1varia"
                    />
                  </div>
                  <Text
                    className="mt-3 text-white-A700 text-xs"
                    size="txtPoppinsSemiBold12"
                  >
                    Price ($)
                  </Text>
                  <PlatformHomePageSlider className="font-courier h-[33px] md:ml-[0] ml-[15px] mt-1 pb-[9px] pt-[5px] px-10 sm:px-5 relative w-[200px]" />
                  <div className="flex flex-col font-poppins gap-0.5 items-start justify-start mt-1.5 w-[251px]">
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtPoppinsSemiBold12"
                    >
                      Common Names
                    </Text>
                    <div className="border border-blue_gray-600 border-solid flex flex-col items-center justify-end p-0.5 rounded-sm w-full">
                      <Img
                        className="h-1 mt-[93px]"
                        src="images/img_component2.svg"
                        alt="componentTwo"
                      />
                    </div>
                  </div>
                  <PlatformHomePageColumnmodelformats className="flex flex-col font-poppins gap-px items-start justify-start mt-3.5 w-[251px]" />
                  <div className="flex flex-col font-poppins gap-0.5 items-start justify-start mt-[15px] w-[251px]">
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtPoppinsSemiBold12"
                    >
                      Model License Type{" "}
                    </Text>
                    <div className="flex md:h-[101px] h-[115px] justify-end pt-3.5 relative w-full">
                      <div className="border border-blue_gray-600 border-solid h-[101px] mt-auto mx-auto rounded-sm w-full"></div>
                      <Img
                        className="absolute bottom-[2%] h-1 inset-x-[0] mx-auto"
                        src="images/img_component2.svg"
                        alt="componentFour"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col font-poppins gap-0.5 items-start justify-start mt-[3px] w-[251px]">
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtPoppinsSemiBold12"
                    >
                      Bioprocess
                    </Text>
                    <div className="border border-blue_gray-600 border-solid flex flex-col items-center justify-end p-0.5 rounded-sm w-full">
                      <Img
                        className="h-1 mt-[93px]"
                        src="images/img_component2.svg"
                        alt="componentFive"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col font-poppins gap-px items-start justify-start mb-[17px] mt-3.5 w-[251px]">
                    <Text
                      className="text-white-A700 text-xs w-auto"
                      size="txtPoppinsSemiBold12"
                    >
                      Animated
                    </Text>
                    <div className="border border-blue_gray-600 border-solid flex flex-col h-[101px] md:h-auto items-center justify-center px-[5px] rounded-sm w-[251px]">
                      <Img
                        className="h-1 w-[18px]"
                        src="images/img_component2.svg"
                        alt="componentSix"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[81%] md:w-full">
                  <div className="gap-1.5 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                    {platformHomePageModelcardPropList.map((props, index) => (
                      <React.Fragment key={`PlatformHomePageModelcard${index}`}>
                        <PlatformHomePageModelcard
                          className="flex flex-1 flex-col items-center justify-start pb-0.5 rounded-sm w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 gap-1.5 md:gap-5 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
                {new Array(10).fill({}).map((props, index) => (
                  <React.Fragment key={`PlatformHomePageModelcard${index}`}>
                    <PlatformHomePageModelcard
                      className="flex flex-1 flex-col items-center justify-start pb-0.5 rounded-sm w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </List>
            <div className="flex flex-row items-start justify-center md:ml-[0] ml-[613px] mt-[50px] w-[15%] md:w-full">
              <Img
                className="h-8 mt-0.5"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <Button className="bg-transparent cursor-pointer min-w-[26px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                1
              </Button>
              <Button className="bg-transparent cursor-pointer min-w-[26px] ml-0.5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                2
              </Button>
              <Button className="bg-transparent cursor-pointer min-w-[26px] ml-0.5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                3
              </Button>
              <Button className="bg-transparent cursor-pointer min-w-[26px] ml-0.5 text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl">
                4
              </Button>
              <Img
                className="h-8 mt-0.5"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
          <footer className="flex items-center justify-center mt-[45px] md:px-5 w-full">
            <div className="bg-blue_gray-900 flex flex-col md:gap-10 gap-[84px] items-start justify-end pb-10 md:px-10 sm:px-5 px-[178px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-col gap-8 h-[98px] md:h-auto items-start justify-start w-[116px]">
                  <Img
                    className="h-[34px] md:h-auto object-cover w-[114px] sm:w-full"
                    src="images/img_bioslinewhite.png"
                    alt="bioslinewhite_One"
                  />
                  <div className="flex flex-row gap-3 items-start justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_icon24linkedin.svg"
                      alt="icon24linkedin"
                    />
                    <Img
                      className="h-8 w-8"
                      src="images/img_twitter21.svg"
                      alt="twitterTwentyOne"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 h-[132px] md:h-auto items-center justify-start md:ml-[0] ml-[620px] w-[164px]">
                  <div className="flex flex-col gap-2 h-[60px] md:h-auto items-center justify-start w-[164px]">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsMedium16"
                    >
                      Contacts
                    </Text>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14"
                    >
                      Partnerships
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 h-14 md:h-auto items-center justify-start w-[164px]">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14"
                    >
                      Media
                    </Text>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14"
                    >
                      Inquiries
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-3 h-[148px] md:h-auto items-center justify-start ml-5 md:ml-[0] w-[164px]">
                  <div className="flex flex-col gap-2 h-[88px] md:h-auto items-center justify-start w-[164px]">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsMedium16"
                    >
                      Address
                    </Text>
                    <div className="flex flex-col gap-2 h-12 md:h-auto items-center justify-start w-[164px]">
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14"
                      >
                        Biological Information
                      </Text>
                      <Text
                        className="text-sm text-white-A700 w-auto"
                        size="txtPoppinsRegular14"
                      >
                        OS Inc.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 h-12 md:h-auto items-center justify-start w-[164px]">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14"
                    >
                      Palm Harbor, Florida
                    </Text>
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPoppinsRegular14"
                    >
                      USA
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 gap-[337px] items-center justify-between w-full">
                <Text
                  className="text-white-A700 text-xs w-auto"
                  size="txtPoppinsRegular12"
                >
                  © 2021 Biological Information OS Inc. All Rights Reserved
                </Text>
                <div className="flex flex-1 flex-row sm:gap-10 items-center justify-between w-full">
                  <a
                    href="javascript:"
                    className="text-white-A700 text-xs w-auto"
                  >
                    <Text size="txtPoppinsRegular12">Terms and Conditions</Text>
                  </a>
                  <Text
                    className="text-white-A700 text-xs w-auto"
                    size="txtPoppinsRegular12"
                  >
                    Privacy Statement
                  </Text>
                  <Text
                    className="text-white-A700 text-xs w-auto"
                    size="txtPoppinsRegular12"
                  >
                    Contact us at inquiry
                  </Text>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PlatformHomePagePage;
