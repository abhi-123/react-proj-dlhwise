import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Switch, Text } from "components";

const UploadFormPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-start mx-auto p-[15px] w-full">
        <div className="bg-gray-900 border border-blue_gray-600 border-solid md:h-[1158px] h-[1305px] sm:h-[695px] max-w-[1110px] mx-auto p-[11px] md:px-5 relative rounded w-full">
          <div className="absolute md:h-[1158px] sm:h-[695px] h-[934px] inset-x-[0] mx-auto top-[1%] w-[97%] md:w-full">
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[376px] w-full">
              <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                <Button
                  className="common-pointer bg-white-A700_0c border border-blue_gray-600 border-solid cursor-pointer min-w-[190px] py-[7px] rounded-tl rounded-tr text-center text-lg text-white-A700"
                  onClick={() => navigate("/uploadformone")}
                >
                  3D File Information
                </Button>
                <Button className="bg-gradient  border border-blue_gray-600 border-solid cursor-pointer min-w-[212px] ml-0.5 md:ml-[0] py-[7px] rounded-tl rounded-tr text-center text-lg text-white-A700">
                  Scientific Information
                </Button>
                <Text
                  className="md:ml-[0] ml-[475px] md:mt-0 my-2.5 text-center text-sm text-white-A700"
                  size="txtPoppinsLight14"
                >
                  1/6 Filled-in
                </Text>
                <Button className="bg-amber-A400 border border-blue_gray-600 border-solid cursor-pointer font-light h-[42px] md:ml-[0] ml-[19px] py-1.5 rounded-tl-[5px] rounded-tr-[5px] text-blue_gray-900_01 text-center text-xl w-[100px]">
                  Publish
                </Button>
              </header>
              <div className="bg-white-A700_0c border border-blue_gray-600 border-solid sm:h-[277px] h-[508px] md:h-[565px] mt-0.5 p-1 relative w-full">
                <div className="absolute h-[275px] md:h-[563px] inset-x-[0] mx-auto top-[1%] w-[98%] md:w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex md:flex-col flex-row gap-[22px] items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start mb-[15px] w-[34%] md:w-full">
                        <div className="flex flex-row items-start justify-start w-[34%] md:w-full">
                          <Text
                            className="text-[10px] text-white-A700"
                            size="txtPoppinsLight10"
                          >
                            Content ID:
                          </Text>
                          <Text
                            className="ml-[5px] text-[10px] text-white-A700"
                            size="txtPoppinsMedium10"
                          >
                            A009301
                          </Text>
                          <Img
                            className="h-3 ml-[5px] w-3"
                            src="images/img_3434107holiday.svg"
                            alt="3434107holiday"
                          />
                        </div>
                        <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                          <div className="md:h-[27px] h-[75px] relative w-[52%]">
                            <div className="absolute md:h-[27px] h-[53px] left-[0] top-[0] w-[84%]">
                              <Text
                                className="absolute left-[0] text-lg text-white-A700 top-[0]"
                                size="txtPoppinsExtraLight18"
                              >
                                Content Owner
                              </Text>
                              <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-evenly mx-auto w-full">
                                <div className="bg-blue_gray-100 h-3.5 mb-2.5 mt-0.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="text-blue_gray-100 text-lg"
                                  size="txtPoppinsRegular18"
                                >
                                  creator_name
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="absolute bottom-[0] inset-x-[0] mx-auto text-lg text-white-A700 w-max"
                              size="txtPoppinsExtraLight18"
                            >
                              Model Biocomplexity
                            </Text>
                          </div>
                          <Img
                            className="h-[38px] rounded-md w-[154px]"
                            src="images/img_frame27075.svg"
                            alt="frame27075"
                          />
                        </div>
                        <Text
                          className="ml-0.5 md:ml-[0] text-[10px] text-white-A700"
                          size="txtPoppinsLight10"
                        >
                          Select Primary Layer
                        </Text>
                        <div className="md:h-[102px] h-[27px] mt-[76px] relative w-[82%]">
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-lg text-white-A700 w-max"
                            size="txtPoppinsExtraLight18"
                          >
                            Bioprocess / Molecular Function
                          </Text>
                          <Text
                            className="absolute right-[0] text-center text-red-A700 text-sm top-[0]"
                            size="txtPoppinsExtraLight14RedA700"
                          >
                            *
                          </Text>
                        </div>
                        <Text
                          className="leading-[14.00px] text-[10px] text-white-A700 w-[87%] sm:w-full"
                          size="txtPoppinsLight10"
                        >
                          Input GO ID, PUBMED ID, or other OBO Ontology
                          vocabulary for name of process depicted
                        </Text>
                        <div className="flex flex-row items-start justify-start mt-[3px] w-4/5 md:w-full">
                          <div className="bg-white-A700_19 h-5 rounded-[3px] w-2/5"></div>
                          <Text
                            className="bg-blue_gray-800 h-3.5 justify-center mb-1.5 ml-[7px] pt-0.5 px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                            size="txtPoppinsLight8"
                          >
                            Glycosylation
                          </Text>
                          <Text
                            className="bg-blue_gray-800 h-3.5 justify-center mb-1.5 ml-0.5 pt-0.5 px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                            size="txtPoppinsLight8"
                          >
                            Eukaryotic Transcription
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[71px] w-[65%] md:w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-[73%] md:w-full">
                          <div className="h-9 relative w-[58%] sm:w-full">
                            <Text
                              className="leading-[18.00px] m-auto text-lg text-white-A700 w-full"
                              size="txtPoppinsExtraLight18"
                            >
                              Model Biological Structures & Components
                            </Text>
                            <Text
                              className="absolute bottom-[8%] left-[41%] text-center text-red-A700 text-sm"
                              size="txtPoppinsExtraLight14RedA700"
                            >
                              *
                            </Text>
                          </div>
                          <Text
                            className="sm:ml-[0] ml-[73px] sm:mt-0 mt-[21px] text-[10px] text-white-A700"
                            size="txtPoppinsLight10"
                          >
                            Journal
                          </Text>
                          <Text
                            className="sm:ml-[0] ml-[75px] sm:mt-0 mt-5 text-[10px] text-white-A700"
                            size="txtPoppinsLight10"
                          >
                            Title
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row gap-[33px] items-start justify-between w-full">
                          <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[3px] w-[46%] md:w-full">
                            <Text
                              className="leading-[14.00px] text-[10px] text-white-A700 w-full"
                              size="txtPoppinsLight10"
                            >
                              Input biological structures & components (primary
                              then secondary layers) used to compose the scene
                            </Text>
                            <List
                              className="flex flex-col gap-[9px] ml-10 md:ml-[0] mt-1 w-[83%]"
                              orientation="vertical"
                            >
                              <div className="flex flex-row gap-2.5 items-start justify-start w-[90%] md:w-full">
                                <div className="bg-white-A700_19 h-5 rounded-[3px] w-[45%]"></div>
                                <Text
                                  className="mt-1 text-[10px] text-center text-white-A700"
                                  size="txtPoppinsLight10"
                                >
                                  or
                                </Text>
                                <Button
                                  className="bg-blue_gray-800 cursor-pointer flex h-5 items-center justify-center p-1 rounded-[3px] w-[92px]"
                                  rightIcon={
                                    <div className="mt-px mb-[3px] ml-0.5 outline-indigo-400 outline-[0.5px] outline">
                                      <Img
                                        src="images/img_call.svg"
                                        alt="call"
                                      />
                                    </div>
                                  }
                                >
                                  <div className="font-light text-[8px] text-center text-white-A700">
                                    Upload .csv or .xlsx
                                  </div>
                                </Button>
                              </div>
                              <div className="flex flex-row items-start justify-end w-[87%] md:w-full">
                                <div className="bg-white-A700_19 h-5 rounded-[3px] w-[47%]"></div>
                                <Text
                                  className="ml-1 mt-1 text-[10px] text-center text-white-A700"
                                  size="txtPoppinsLight10"
                                >
                                  or
                                </Text>
                                <Button
                                  className="bg-blue_gray-800 cursor-pointer flex h-5 items-center justify-center ml-2.5 p-1 rounded-[3px] w-[92px]"
                                  rightIcon={
                                    <div className="mt-px mb-[3px] ml-0.5 outline-indigo-400 outline-[0.5px] outline">
                                      <Img
                                        src="images/img_call.svg"
                                        alt="call"
                                      />
                                    </div>
                                  }
                                >
                                  <div className="font-light text-[8px] text-center text-white-A700">
                                    Upload .csv or .xlsx
                                  </div>
                                </Button>
                              </div>
                              <div className="flex flex-row items-start justify-end w-[88%] md:w-full">
                                <div className="bg-white-A700_19 h-5 rounded-[3px] w-[46%]"></div>
                                <Text
                                  className="ml-1.5 mt-1 text-[10px] text-center text-white-A700"
                                  size="txtPoppinsLight10"
                                >
                                  or
                                </Text>
                                <Button
                                  className="bg-blue_gray-800 cursor-pointer flex h-5 items-center justify-center ml-2.5 p-1 rounded-[3px] w-[92px]"
                                  rightIcon={
                                    <div className="mt-px mb-[3px] ml-0.5 outline-indigo-400 outline-[0.5px] outline">
                                      <Img
                                        src="images/img_call.svg"
                                        alt="call"
                                      />
                                    </div>
                                  }
                                >
                                  <div className="font-light text-[8px] text-center text-white-A700">
                                    Upload .csv or .xlsx
                                  </div>
                                </Button>
                              </div>
                              <div className="flex flex-row gap-2.5 items-start justify-start w-[90%] md:w-full">
                                <div className="bg-white-A700_19 h-5 rounded-[3px] w-[45%]"></div>
                                <Text
                                  className="mt-1 text-[10px] text-center text-white-A700"
                                  size="txtPoppinsLight10"
                                >
                                  or
                                </Text>
                                <Button
                                  className="bg-blue_gray-800 cursor-pointer flex h-5 items-center justify-center p-1 rounded-[3px] w-[92px]"
                                  rightIcon={
                                    <div className="mt-px mb-[3px] ml-0.5 outline-indigo-400 outline-[0.5px] outline">
                                      <Img
                                        src="images/img_call.svg"
                                        alt="call"
                                      />
                                    </div>
                                  }
                                >
                                  <div className="font-light text-[8px] text-center text-white-A700">
                                    Upload .csv or .xlsx
                                  </div>
                                </Button>
                              </div>
                              <div className="flex flex-row items-start justify-start w-[89%] md:w-full">
                                <div className="bg-white-A700_19 h-5 rounded-[3px] w-[46%]"></div>
                                <Text
                                  className="ml-[9px] mt-1 text-[10px] text-center text-white-A700"
                                  size="txtPoppinsLight10"
                                >
                                  or
                                </Text>
                                <Button
                                  className="bg-blue_gray-800 cursor-pointer flex h-5 items-center justify-center ml-2.5 p-1 rounded-[3px] w-[92px]"
                                  rightIcon={
                                    <div className="mt-px mb-[3px] ml-0.5 outline-indigo-400 outline-[0.5px] outline">
                                      <Img
                                        src="images/img_call.svg"
                                        alt="call"
                                      />
                                    </div>
                                  }
                                >
                                  <div className="font-light text-[8px] text-center text-white-A700">
                                    Upload .csv or .xlsx
                                  </div>
                                </Button>
                              </div>
                            </List>
                          </div>
                          <div className="flex md:flex-1 flex-col justify-start w-1/2 md:w-full">
                            <div className="flex flex-row items-center justify-evenly w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_plus.svg"
                                alt="plus"
                              />
                              <div className="bg-white-A700_19 h-5 rounded-[3px] w-[30%]"></div>
                              <div className="bg-white-A700_19 h-5 rounded-[3px] w-[30%]"></div>
                              <div className="bg-white-A700_19 h-5 rounded-[3px] w-[30%]"></div>
                            </div>
                            <Img
                              className="h-2.5 md:ml-[0] ml-[15px] mt-[5px] w-2.5"
                              src="images/img_plus_blue_a700.svg"
                              alt="plus_One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[1%] flex flex-col justify-start left-[0] w-[95%]">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[22px] w-[98%] md:w-full">
                      <div className="flex flex-col justify-start w-[30%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[180px] text-center text-red-A700 text-sm"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[159px] mt-[5px] text-[10px] text-white-A700"
                          size="txtPoppinsLight10"
                        >
                          Select Secondary Layer(s)
                        </Text>
                        <div className="flex flex-row gap-[42px] items-center justify-start w-[94%] md:w-full">
                          <Button className="bg-white-A700_19 cursor-pointer font-light min-w-[113px] outline outline-[0.5px] outline-blue_gray-600 py-0.5 rounded-[3px] text-[10px] text-center text-white-A700">
                            single select
                          </Button>
                          <Button
                            className="bg-white-A700_19 cursor-pointer flex items-center justify-center min-w-[113px] outline outline-[0.5px] outline-blue_gray-600 pr-[35px] py-0.5 rounded-[3px]"
                            leftIcon={
                              <Img
                                className="h-[15px] mt-px"
                                src="images/img_icon_24_chevron_up.svg"
                                alt="Icon/24/chevron up"
                              />
                            }
                          >
                            <div className="font-light sm:pr-5 text-[10px] text-center text-white-A700">
                              multi-select
                            </div>
                          </Button>
                        </div>
                        <div className="flex flex-row items-center justify-start md:ml-[0] ml-[11px] mt-1 w-[97%] md:w-full">
                          <Text
                            className="bg-blue_gray-800 h-3.5 justify-center pt-0.5 px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                            size="txtPoppinsLight8"
                          >
                            Organism
                          </Text>
                          <Text
                            className="bg-blue_gray-800 h-3.5 justify-center ml-[113px] pt-0.5 px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                            size="txtPoppinsLight8"
                          >
                            Community
                          </Text>
                          <Text
                            className="bg-blue_gray-800 h-3.5 justify-center ml-0.5 pt-0.5 px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                            size="txtPoppinsLight8"
                          >
                            Organ System
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[68px] md:mt-0 mt-1.5 text-center text-sm text-white-A700"
                        size="txtPoppinsExtraLight14"
                      >
                        3.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[341px] md:mt-0 mt-1.5 text-center text-sm text-white-A700"
                        size="txtPoppinsExtraLight14"
                      >
                        4.
                      </Text>
                      <div className="flex flex-col md:ml-[0] ml-[3px] md:mt-0 mt-0.5 relative w-[11%] md:w-full">
                        <Text
                          className="mx-auto text-lg text-white-A700"
                          size="txtPoppinsExtraLight18"
                        >
                          Published In
                        </Text>
                        <Text
                          className="ml-[38px] mt-[-0.01px] text-center text-red-A700 text-sm z-[1]"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                      <div className="md:h-[21px] h-[31px] md:ml-[0] ml-[5px] md:mt-0 mt-[9px] relative w-[8%] md:w-full">
                        <Text
                          className="absolute bottom-[0] left-[32%] text-center text-red-A700 text-sm"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                        <div className="absolute flex flex-row inset-x-[0] items-center justify-evenly mx-auto top-[0] w-full">
                          <Switch
                            onColor="#004dff"
                            offColor="#004dff"
                            onHandleColor="#505082"
                            offHandleColor="#505082"
                            value={true}
                            className="outline outline-[0.5px] outline-blue-A700 w-[31%]"
                          />
                          <Text
                            className="text-[10px] text-center text-white-A700"
                            size="txtPoppinsLight10"
                          >
                            Published
                          </Text>
                        </div>
                      </div>
                      <div className="md:h-[21px] h-[23px] md:ml-[0] ml-[38px] md:mt-0 mt-5 relative w-6">
                        <Text
                          className="absolute bottom-[0] left-[0] text-[10px] text-white-A700"
                          size="txtPoppinsLight10"
                        >
                          DOI
                        </Text>
                        <Text
                          className="absolute right-[0] text-center text-red-A700 text-sm top-[0]"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-end justify-end md:ml-[0] ml-[170px] w-[77%] md:w-full">
                      <div className="flex flex-col gap-3 justify-start w-[34%] md:w-full">
                        <div className="flex flex-row items-start justify-start mr-[7px] w-[98%] md:w-full">
                          <Text
                            className="bg-blue_gray-800 h-3.5 justify-center mt-[3px] pt-0.5 px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                            size="txtPoppinsLight8"
                          >
                            Organ
                          </Text>
                          <Text
                            className="bg-blue_gray-800 h-3.5 justify-center ml-0.5 mt-[3px] px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                            size="txtPoppinsLight8"
                          >
                            Tissue
                          </Text>
                          <Input
                            name="photogrammetry_Seven"
                            placeholder="Organism"
                            className="font-light md:h-auto p-0 placeholder:text-white-A700 sm:h-auto text-[8px] text-center text-white-A700 w-full"
                            wrapClassName="bg-blue_gray-800 mb-[3px] ml-[136px] pt-0.5 px-[3px] rounded-[3px] w-[19%]"
                          ></Input>
                        </div>
                        <Text
                          className="bg-blue_gray-800 h-3.5 justify-center md:ml-[0] ml-[201px] pt-0.5 px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                          size="txtPoppinsLight8"
                        >
                          Community
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[284px] md:mt-0 mt-[21px] text-center text-sm text-white-A700"
                        size="txtPoppinsExtraLight14"
                      >
                        5.
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[3px] md:mt-0 mt-4 text-lg text-white-A700"
                        size="txtPoppinsExtraLight18"
                      >
                        Reference Database(s)
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-1.5 items-start justify-end md:ml-[0] ml-[371px] w-[63%] md:w-full">
                      <div className="flex flex-col gap-3.5 items-start justify-start w-[83%] md:w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="bg-blue_gray-800 h-3.5 justify-center mt-[13px] pt-0.5 px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                            size="txtPoppinsLight8"
                          >
                            Organ System
                          </Text>
                          <Button className="bg-white-A700_19 cursor-pointer font-light mb-[7px] min-w-[156px] outline outline-[0.5px] outline-blue_gray-600 py-0.5 rounded-[3px] text-[10px] text-center text-white-A700">
                            multi-select
                          </Button>
                        </div>
                        <Text
                          className="bg-blue_gray-800 h-3.5 justify-center pt-0.5 px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                          size="txtPoppinsLight8"
                        >
                          Organ
                        </Text>
                        <Text
                          className="bg-blue_gray-800 h-3.5 justify-center px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                          size="txtPoppinsLight8"
                        >
                          Tissue
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[17%] md:w-full">
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Text
                            className="bg-blue_gray-800 h-3.5 justify-center px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                            size="txtPoppinsLight8"
                          >
                            NCBI
                          </Text>
                          <Text
                            className="bg-blue_gray-800 h-3.5 justify-center px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                            size="txtPoppinsLight8"
                          >
                            Human Cell Atlas
                          </Text>
                        </div>
                        <Text
                          className="bg-blue_gray-800 h-3.5 justify-center mt-[3px] px-[3px] rounded-[3px] text-[8px] text-center text-white-A700 w-auto"
                          size="txtPoppinsLight8"
                        >
                          Publications
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col md:gap-10 gap-[95px] items-start justify-start left-[1%] top-[15%]">
                  <Text
                    className="md:ml-[0] ml-[3px] text-center text-sm text-white-A700"
                    size="txtPoppinsExtraLight14"
                  >
                    1.
                  </Text>
                  <Text
                    className="text-center text-sm text-white-A700"
                    size="txtPoppinsExtraLight14"
                  >
                    2.
                  </Text>
                </div>
                <div className="absolute bottom-[4%] flex flex-col items-center justify-start left-[1%] w-[62%]">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-evenly w-full">
                    <Text
                      className="text-center text-sm text-white-A700"
                      size="txtPoppinsExtraLight14"
                    >
                      6.
                    </Text>
                    <Text
                      className="sm:flex-1 leading-[14.00px] sm:mt-0 mt-[3px] text-[10px] text-white-A700 w-[98%] sm:w-full"
                      size="txtPoppinsExtraLight10"
                    >
                      3D Model Goal & Methodology Overview (include any other
                      text, questions, intuitions, etc. about the modelled
                      process, structure, system, or function to better
                      contextualize or drive thought about your production .
                    </Text>
                  </div>
                  <div className="bg-white-A700_19 h-[147px] mt-1 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[95%]"></div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-14 left-[38%] top-[0] w-14"
              src="images/img_plus.svg"
              alt="plus_Two"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadFormPage;
