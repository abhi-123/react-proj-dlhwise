import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SeekBar, Text } from "components";
import PlatformHomePageColumnmodelformats from "components/PlatformHomePageColumnmodelformats";
import PlatformHomePageModelcard from "components/PlatformHomePageModelcard";

const PlatformLoggedInPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-end mx-auto pt-[30px] w-full">
        <div className="flex flex-col justify-start w-full">
          <header className="flex flex-col items-center justify-center md:ml-[0] ml-[78px] md:px-5 w-full">
            <div className="flex flex-col gap-1.5 items-center justify-center w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                <Img
                  className="md:flex-1 h-[45px] sm:h-auto md:mt-0 my-[5px] object-cover w-[13%] md:w-full"
                  src="images/img_bioslinewhite.png"
                  alt="bioslinewhite"
                />
                <div className="flex flex-row gap-10 h-9 md:h-auto items-start justify-start mb-[3px] md:ml-[0] ml-[321px] md:mt-0 mt-4 w-auto">
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
                <Text
                  className="common-pointer mb-0.5 md:ml-[0] ml-[250px] md:mt-0 mt-7 text-base text-center text-indigo-400"
                  size="txtPoppinsLight16Indigo400"
                  onClick={() => navigate("/myprofilepage")}
                >
                  bio_boy
                </Text>
                <div className="flex flex-col h-[55px] items-center justify-start md:ml-[0] ml-[25px] w-[55px]">
                  <Img
                    className="h-[55px] md:h-auto rounded-[50%] w-[55px]"
                    src="images/img_rectangle4007.png"
                    alt="rectangle4007"
                  />
                </div>
              </div>
              <a className="mr-[3px] text-indigo-400 text-sm">
                <Text
                  className="common-pointer"
                  size="txtPoppinsRegular14Indigo400"
                  onClick={() => navigate("/")}
                >
                  Logout
                </Text>
              </a>
            </div>
          </header>
          <div className="flex flex-col items-start justify-start max-w-[1428px] mt-[35px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
              <Text
                className="text-base text-indigo-400 w-auto"
                size="txtPoppinsRegular16"
              >
                Biosphere
              </Text>
              <div className="flex flex-col items-start justify-start w-[60px]">
                <Text
                  className="text-base text-indigo-400 w-auto"
                  size="txtPoppinsMedium16Indigo400"
                >
                  Biomes
                </Text>
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
              <div className="flex flex-col gap-1 items-start justify-start w-[135px]">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16"
                >
                  Macromolecules
                </Text>
                <Line className="bg-white-A700 h-px w-full" />
              </div>
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
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[11px] mt-3 w-[56%] md:w-full">
              <Line className="bg-gray-900 h-px w-[11%]" />
              <Line className="bg-gray-900 h-px md:ml-[0] ml-[90px] w-[13%]" />
              <Line className="bg-gray-900 h-px md:ml-[0] ml-[15px] w-[14%]" />
              <Line className="bg-gray-900 h-px md:ml-[0] ml-[15px] w-[12%]" />
              <Line className="bg-gray-900 h-px md:ml-[0] ml-[15px] w-[26%]" />
              <Line className="bg-gray-900 h-px ml-4 md:ml-[0] w-[8%]" />
            </div>
            <div className="flex flex-row items-center justify-start ml-1 md:ml-[0] w-[22%] md:w-full">
              <div className="bg-blue_gray-900 border border-indigo-200 border-solid flex flex-col items-start justify-start p-1 rounded-[3px] w-[93%]">
                <Img
                  className="h-[22px] mb-[3px] ml-2 md:ml-[0] w-[23px]"
                  src="images/img_search.svg"
                  alt="search"
                />
              </div>
              <Img
                className="h-[19px] ml-[5px] w-[19px]"
                src="images/img_menu.svg"
                alt="menu"
              />
            </div>
            <List
              className="flex flex-col gap-[5px] items-center ml-1 md:ml-[0] mt-2.5 w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                <div className="bg-white-A700_0c border border-blue_gray-600 border-solid flex md:flex-1 flex-col items-center justify-start mb-0.5 pb-[13px] px-[13px] rounded-[3px] w-1/5 md:w-full">
                  <div className="flex flex-col gap-3.5 items-center justify-start mb-4 w-[99%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row items-center justify-start w-[22%] md:w-full">
                        <Text
                          className="text-base text-white-A700"
                          size="txtPoppinsRegular16WhiteA700"
                        >
                          Filter
                        </Text>
                        <div className="h-[13px] ml-1 shadow-bs1 w-[13px]"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-0.5 w-auto">
                        <Text
                          className="text-white-A700 text-xs w-auto"
                          size="txtPoppinsSemiBold12"
                        >
                          Model Quality
                        </Text>
                      </div>
                      <Text
                        className="mt-3.5 text-white-A700 text-xs"
                        size="txtPoppinsSemiBold12"
                      >
                        Price ($)
                      </Text>
                      <div className="font-courier h-[34px] ml-3.5 md:ml-[0] mt-[3px] pb-[9px] pt-[5px] px-10 sm:px-5 relative w-[200px]">
                        <div className="flex flex-row items-center justify-between mb-[-12px] mt-auto mx-auto w-[72%] md:w-full z-[1]">
                          <div className="flex flex-col items-center justify-start pb-2.5 w-[19%]">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[23px] items-center justify-start p-[3px] w-full"
                              style={{
                                backgroundImage: "url('images/img_volume.svg')",
                              }}
                            >
                              <Text
                                className="mb-[3px] text-[10px] text-center text-white-A700"
                                size="txtCourier10"
                              >
                                60
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start pb-[13px] w-[16%]">
                            <div className="h-5 md:h-[19px] relative w-full">
                              <Img
                                className="h-[19px] m-auto"
                                src="images/img_volume.svg"
                                alt="volume"
                              />
                              <Text
                                className="absolute inset-x-[0] mx-auto text-[10px] text-center text-white-A700 top-[10%] w-max"
                                size="txtCourier10"
                              >
                                300
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
                      <div className="flex flex-col font-poppins items-start justify-start mt-1.5 w-full">
                        <Text
                          className="text-white-A700 text-xs"
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
                      <div className="flex flex-col font-poppins md:gap-10 gap-[95px] items-center justify-start mt-[15px] w-full">
                        <Text
                          className="text-white-A700 text-xs"
                          size="txtPoppinsSemiBold12"
                        >
                          Model License Type{" "}
                        </Text>
                        <div className="flex flex-col items-center justify-start w-[8%] md:w-full">
                          <Img
                            className="h-1"
                            src="images/img_component2.svg"
                            alt="componentFour"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col font-poppins items-start justify-start mt-[18px] w-full">
                        <Text
                          className="text-white-A700 text-xs"
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
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-white-A700 text-xs"
                        size="txtPoppinsSemiBold12"
                      >
                        Animated
                      </Text>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[101px] items-center justify-end p-[3px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group6.svg')",
                        }}
                      >
                        <Img
                          className="h-1 mt-[91px]"
                          src="images/img_component2.svg"
                          alt="componentSix"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-4/5 md:w-full">
                  <div className="md:gap-5 gap-[5px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                    {new Array(12).fill({}).map((props, index) => (
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
              <div className="flex-1 md:gap-5 gap-[5px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center min-h-[auto] w-full">
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
            <div className="flex flex-row items-start justify-center md:ml-[0] ml-[590px] mt-[54px] w-[15%] md:w-full">
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
            <div className="bg-blue_gray-900 flex flex-col items-center justify-center p-[39px] sm:px-5 w-full">
              <div className="flex flex-col md:gap-10 gap-[84px] items-center justify-center w-4/5 md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-[11%] md:w-full">
                    <Img
                      className="h-[34px] md:h-auto ml-0.5 md:ml-[0] object-cover w-[99%] sm:w-full"
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
                  <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[620px] md:mt-0 mt-1 w-[9%] md:w-full">
                    <Text
                      className="text-base text-white-A700"
                      size="txtPoppinsMedium16"
                    >
                      Contacts
                    </Text>
                    <ul className="flex flex-col items-start justify-start w-full common-column-list">
                      <li>
                        <a
                          href="javascript:"
                          className="text-sm text-white-A700"
                        >
                          <Text size="txtPoppinsRegular14">Partnerships</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-[13px] text-sm text-white-A700"
                        >
                          <Text size="txtPoppinsRegular14">Media</Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="javascript:"
                          className="mt-4 text-sm text-white-A700"
                        >
                          <Text size="txtPoppinsRegular14">Inquiries</Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start ml-24 md:ml-[0] md:mt-0 mt-1 w-[15%] md:w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="text-base text-white-A700"
                        size="txtPoppinsMedium16"
                      >
                        Address
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <Text
                            className="text-sm text-white-A700"
                            size="txtPoppinsRegular14"
                          >
                            Biological Information
                          </Text>
                          <Text
                            className="text-sm text-white-A700"
                            size="txtPoppinsRegular14"
                          >
                            OS Inc.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-sm text-white-A700"
                        size="txtPoppinsRegular14"
                      >
                        Palm Harbor, Florida
                      </Text>
                      <Text
                        className="text-sm text-white-A700"
                        size="txtPoppinsRegular14"
                      >
                        USA
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="md:mt-0 mt-0.5 text-white-A700 text-xs"
                    size="txtPoppinsRegular12"
                  >
                    © 2023 Biological Information OS Inc. All Rights Reserved
                  </Text>
                  <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
                    <a
                      href="javascript:"
                      className="text-white-A700 text-xs w-auto"
                    >
                      <Text size="txtPoppinsRegular12">
                        Terms and Conditions
                      </Text>
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
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PlatformLoggedInPage;
