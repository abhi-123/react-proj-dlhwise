import React from "react";

import { Button, Img, Line, Text } from "components";

const ModelShowpagePage = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-col flex-row font-poppins sm:gap-5 md:gap-5 items-start mx-auto overflow-auto w-full">
        <Img
          className="h-10 md:mt-0 mt-[536px]"
          src="images/img_arrowleft_white_a700.svg"
          alt="arrowleft"
        />
        <div className="bg-gray-900 border border-blue_gray-600 border-solid flex flex-col items-center justify-end md:ml-[0] ml-[30px] p-3 rounded-[18px] w-full">
          <div className="flex flex-col items-center justify-start max-w-[1045px] mx-auto my-2 md:px-5 w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="h-[1439px] md:h-[2388px] relative w-full">
                <div className="flex flex-col h-full items-end justify-start mt-[49px] mx-auto w-[99%]">
                  <div className="flex flex-row items-start justify-end w-[33%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[11%]">
                      <Img
                        className="h-3.5 w-3.5"
                        src="images/img_754666authora.svg"
                        alt="754666authora"
                      />
                      <Text
                        className="text-[8px] text-center text-white-A700"
                        size="txtPoppinsLight8"
                      >
                        Citations
                      </Text>
                    </div>
                    <Text
                      className="ml-44 mt-[3px] text-[10px] text-white-A700"
                      size="txtPoppinsLight10"
                    >
                      Content ID:
                    </Text>
                    <Text
                      className="ml-[5px] mt-0.5 text-[10px] text-white-A700"
                      size="txtPoppinsMedium10"
                    >
                      A009301
                    </Text>
                    <Img
                      className="h-3 ml-[5px] mt-1 w-3"
                      src="images/img_3434107holiday.svg"
                      alt="3434107holiday"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[304px] w-[58%] md:w-full">
                    <Img
                      className="h-6 sm:mt-0 mt-[195px] w-6"
                      src="images/img_bookmark.svg"
                      alt="bookmark"
                    />
                    <div className="flex flex-col md:gap-10 gap-[225px] justify-start">
                      <Line className="bg-blue_gray-600 h-px md:ml-[0] ml-[106px] w-3/4" />
                      <div className="flex flex-row gap-7 items-start justify-start w-[44%] md:w-full">
                        <Text
                          className="text-base text-white-A700"
                          size="txtCourier16"
                        >
                          $1200.00
                        </Text>
                        <Button
                          className="bg-white-A700_19 cursor-pointer flex items-center justify-center min-w-[78px] outline outline-[0.5px] outline-blue_gray-600 pr-[33px] py-0.5 rounded-[3px]"
                          leftIcon={
                            <Img
                              className="h-[15px] mt-px"
                              src="images/img_icon_24_chevron_up.svg"
                              alt="Icon/24/chevron up"
                            />
                          }
                        >
                          <div className="font-light font-poppins sm:pr-5 text-[10px] text-center text-white-A700">
                            select
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 items-start justify-start mt-[37px] w-full">
                    <Text
                      className="leading-[24.00px] text-white-A700 text-xs w-[66%] sm:w-full"
                      size="txtPoppinsLight12WhiteA700"
                    >
                      Hexokinases phosphorylate glucose to produce
                      glucose-6-phosphate, the first step in most glucose
                      metabolism pathways. This gene encodes a ubiquitous form
                      of hexokinase which localizes to the outer membrane of
                      mitochondria. Mutations in this gene have been associated
                      with hemolytic anemia due to hexokinase deficiency.
                    </Text>
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <Text
                        className="leading-[24.00px] text-white-A700 text-xs"
                        size="txtPoppinsLight12WhiteA700"
                      >
                        You will investigate biological concepts including the
                        chemical basis of life, cell structure and function,
                        metabolism, reproduction, genetics, evolution,
                        biological diversity and classification, plant structure
                        and function, animal structure and function and ecology.
                      </Text>
                      <div className="flex flex-col items-center justify-start md:mt-0 mt-0.5">
                        <div className="bg-indigo-200 flex flex-col items-center justify-start p-[7px] rounded-lg w-full">
                          <Text
                            className="text-base text-center text-white-A700"
                            size="txtPoppinsMedium16"
                          >
                            abstract
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex md:flex-col flex-row gap-3 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-col md:gap-10 gap-[71px] justify-start w-[65%] md:w-full">
                      <div className="flex flex-col items-start justify-start ml-1.5 md:ml-[0] w-full">
                        <div className="h-[565px] relative w-[665px] md:w-full">
                          <Img
                            className="h-[565px] m-auto object-cover rounded-tl-[3px] rounded-tr-[3px] w-full"
                            src="images/img_3dviewerrectangle.png"
                            alt="frame27160"
                          />
                          <div className="absolute bottom-[0] flex flex-row gap-[118px] inset-x-[0] items-center justify-between mx-auto w-auto">
                            <Img
                              className="h-[30px] w-[41px]"
                              src="images/img_arrowleft.svg"
                              alt="arrowleft_One"
                            />
                            <Text
                              className="text-center text-sm text-white-A700 w-auto"
                              size="txtPoppinsRegular14"
                            >
                              1 / 4
                            </Text>
                            <Img
                              className="h-[30px] w-[41px]"
                              src="images/img_arrowright.svg"
                              alt="arrowright"
                            />
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-between mt-2 w-[477px] sm:w-full">
                          <div className="flex flex-row items-center justify-between w-[366px]">
                            <Text
                              className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl w-auto"
                              size="txtPoppinsLight24"
                            >
                              Hexokinase
                            </Text>
                            <Img
                              className="h-[25px] w-[23px]"
                              src="images/img_5362349eyesee.svg"
                              alt="5362349eyesee"
                            />
                          </div>
                          <div className="flex flex-row gap-[45px] h-[22px] md:h-auto items-center justify-start w-[105px]">
                            <Text
                              className="text-center text-sm text-white-A700 w-auto"
                              size="txtPoppinsLight14"
                            >
                              1620
                            </Text>
                            <Text
                              className="text-center text-sm text-white-A700 w-auto"
                              size="txtPoppinsLight14"
                            >
                              1620
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="italic text-center text-white-A700 text-xl"
                          size="txtPoppinsLightItalic20"
                        >
                          Saccharomyces cerevisiae
                        </Text>
                        <div className="flex flex-row gap-[15px] h-[25px] md:h-auto items-start justify-start ml-0.5 md:ml-[0] mt-0.5 w-[155px]">
                          <Text
                            className="text-center text-sm text-white-A700 w-auto"
                            size="txtPoppinsLight14"
                          >
                            Description
                          </Text>
                          <div className="flex flex-row gap-1.5 h-[25px] md:h-auto items-center justify-start w-[61px]">
                            <Img
                              className="h-[25px] w-[25px]"
                              src="images/img_3278978bubble.svg"
                              alt="3278978bubble"
                            />
                            <Text
                              className="text-center text-sm text-white-A700 w-auto"
                              size="txtPoppinsLight14"
                            >
                              1620
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="mt-56 text-base text-center text-white-A700"
                          size="txtPoppinsRegular16WhiteA700"
                        >
                          Imaging Reference Data Information
                        </Text>
                        <Text
                          className="mt-[90px] text-base text-center text-white-A700"
                          size="txtPoppinsRegular16WhiteA700"
                        >
                          Citations & other References
                        </Text>
                        <div className="flex flex-col gap-[55px] items-start justify-start ml-0.5 md:ml-[0] mt-[71px] w-auto">
                          <Text
                            className="text-base text-center text-white-A700 w-auto"
                            size="txtPoppinsLight16"
                          >
                            UV Mapping
                          </Text>
                          <Text
                            className="text-base text-center text-white-A700 w-auto"
                            size="txtPoppinsLight16"
                          >
                            Surface
                          </Text>
                          <Text
                            className="text-base text-center text-white-A700 w-auto"
                            size="txtPoppinsLight16"
                          >
                            Rigging
                          </Text>
                          <Text
                            className="text-base text-center text-white-A700 w-auto"
                            size="txtPoppinsLight16"
                          >
                            Animations
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="text-base text-center text-white-A700"
                        size="txtPoppinsLight16"
                      >
                        Comments
                      </Text>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[18px] items-center justify-start md:mt-0 mt-[5px] w-[35%] md:w-full">
                      <div className="flex flex-col gap-[17px] justify-start w-full">
                        <div className="flex flex-row gap-[5px] items-start justify-start w-[46%] md:w-full">
                          <div className="bg-blue_gray-100 h-6 mb-0.5 rounded-[50%] w-6"></div>
                          <Text
                            className="text-blue_gray-100 text-lg"
                            size="txtPoppinsRegular18"
                          >
                            creator_name
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px] w-[99%] md:w-full">
                          <div className="bg-white-A700_0c border border-blue_gray-600 border-solid flex flex-col items-center justify-start p-2.5 rounded w-full">
                            <div className="flex flex-col items-start justify-start mb-[17px] mt-[31px] w-[99%] md:w-full">
                              <Text
                                className="text-center text-sm text-white-A700"
                                size="txtPoppinsBold14"
                              >
                                Reference Information
                              </Text>
                              <Text
                                className="mt-[47px] text-center text-sm text-white-A700"
                                size="txtPoppinsBold14"
                              >
                                Scientific Collaboration
                              </Text>
                              <Text
                                className="mt-[27px] text-center text-sm text-white-A700"
                                size="txtPoppinsBold14"
                              >
                                Biocomplexity
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[5px] mt-[5px] text-[10px] text-center text-white-A700"
                                size="txtPoppinsLight10"
                              >
                                Primary
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[5px] mt-3.5 text-[10px] text-center text-white-A700"
                                size="txtPoppinsLight10"
                              >
                                Secondary
                              </Text>
                              <Text
                                className="mt-[25px] text-center text-sm text-white-A700"
                                size="txtPoppinsBold14"
                              >
                                Bioprocesses
                              </Text>
                              <Text
                                className="mt-[69px] text-base text-center text-white-A700"
                                size="txtPoppinsBold16"
                              >
                                General Specifications
                              </Text>
                              <Text
                                className="mt-[106px] text-base text-center text-white-A700"
                                size="txtPoppinsBold16"
                              >
                                Hardware Requirements
                              </Text>
                              <div className="flex flex-row items-start justify-between mt-[39px] w-full">
                                <Text
                                  className="mb-5 text-base text-center text-white-A700"
                                  size="txtPoppinsLight16"
                                >
                                  Licensing
                                </Text>
                                <div className="flex flex-row gap-[5px] h-[22px] md:h-auto items-center justify-start mt-[22px] w-[104px]">
                                  <Img
                                    className="h-[18px] w-[18px]"
                                    src="images/img_183802arrowdo.svg"
                                    alt="183802arrowdo"
                                  />
                                  <Text
                                    className="text-base text-center text-white-A700 w-auto"
                                    size="txtPoppinsLight16"
                                  >
                                    Download
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="mt-1 text-base text-center text-white-A700"
                            size="txtPoppinsLight16"
                          >
                            Collaborators
                          </Text>
                          <Text
                            className="mt-[58px] text-base text-center text-white-A700"
                            size="txtPoppinsLight16"
                          >
                            Publication
                          </Text>
                        </div>
                      </div>
                      <div className="bg-blue_gray-900 border border-blue_gray-600 border-solid flex flex-col gap-2 items-start justify-start pl-[12.61px] pr-[10.51px] py-2 rounded-[16px] w-[350px]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="italic text-center text-gray-100_02 text-xs underline w-full"
                            size="txtPoppinsMediumItalic12"
                          >
                            The Equilibria of isomerase and...
                          </Text>
                          <Text
                            className="text-[10px] text-blue_gray-200 text-center w-full"
                            size="txtPoppinsRegular10Bluegray200"
                          >
                            J. Biol. Chem., 1943
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between w-full">
                          <Img
                            className="h-[136px] md:h-auto object-cover rounded-[10px] w-[92px]"
                            src="images/img_9f7813d474524.png"
                            alt="9f7813d474524"
                          />
                          <div className="flex flex-col gap-2 items-start justify-end w-[219px]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-base text-white-A700 w-full"
                                size="txtPoppinsMedium16"
                              >
                                Otto Fritz Meyerhof
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-200 w-[67px]"
                                size="txtPoppinsRegular10Bluegray200"
                              >
                                Meyerhof Lab
                              </Text>
                              <Text
                                className="text-[10px] text-blue_gray-200 w-[129px]"
                                size="txtPoppinsRegular10Bluegray200"
                              >
                                University of Pennsylvania
                              </Text>
                            </div>
                            <div className="flex flex-col gap-1 items-start justify-start">
                              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                                <Text
                                  className="text-blue_gray-200 text-xs w-auto"
                                  size="txtPoppinsRegular12Bluegray200"
                                >
                                  Total Grants:{" "}
                                </Text>
                                <Text
                                  className="text-gray-100_02 text-xs w-auto"
                                  size="txtPoppinsRegular12Gray10002"
                                >
                                  ?
                                </Text>
                              </div>
                              <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                <Text
                                  className="text-blue_gray-200 text-xs w-auto"
                                  size="txtPoppinsRegular12Bluegray200"
                                >
                                  Funded By:
                                </Text>
                                <Img
                                  className="h-[19px] md:h-auto object-cover rounded-sm w-[19px]"
                                  src="images/img_image10.png"
                                  alt="imageTen"
                                />
                              </div>
                              <div className="flex flex-row gap-1 items-center justify-start">
                                <Text
                                  className="text-blue_gray-200 text-xs w-auto"
                                  size="txtPoppinsRegular12Bluegray200"
                                >
                                  Partnerships:
                                </Text>
                                <Text
                                  className="text-gray-100_02 text-xs w-auto"
                                  size="txtPoppinsRegular12Gray10002"
                                >
                                  Rockefeller Foundation
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700_0c border border-blue_gray-600 border-solid flex flex-col items-start justify-start mt-1 p-[7px] rounded w-full">
                <div className="flex flex-col items-center justify-start mb-24 md:ml-[0] ml-[3px] w-[16%] md:w-full">
                  <div className="flex flex-row gap-[5px] items-center justify-start w-full">
                    <div className="bg-blue_gray-100 h-6 rounded-[50%] w-6"></div>
                    <Text
                      className="text-blue_gray-100 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      creator_name
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row sm:gap-10 items-start justify-between mt-[9px] w-[54%] md:w-full">
                <Button className="bg-white-A700_0c border border-blue_gray-600 border-solid cursor-pointer font-light mb-[22px] min-w-[183px] py-[15px] rounded text-base text-center text-white-A700">
                  Comment on Model
                </Button>
                <Button className="bg-white-A700_0c border border-blue_gray-600 border-solid cursor-pointer font-light min-w-[107px] mt-[22px] py-[15px] rounded text-base text-center text-white-A700">
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Img
          className="h-10 md:ml-[0] ml-[30px] md:mt-0 mt-[536px]"
          src="images/img_arrowright_white_a700.svg"
          alt="arrowright_One"
        />
      </div>
    </>
  );
};

export default ModelShowpagePage;
