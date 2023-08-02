import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Switch, Text } from "components";
import UploadFormOneColumn from "components/UploadFormOneColumn";
import UploadFormOneStackpersonallicense from "components/UploadFormOneStackpersonallicense";

const UploadFormOnePage = () => {
  const navigate = useNavigate();

  const uploadFormOneStackpersonallicensePropList = [
    {},
    { username: "Standard License" },
    { username: "Commercial License" },
  ];

  return (
    <>
      <div className="flex flex-col font-poppins items-center justify-end mx-auto pl-[51px] pr-[57px] md:px-10 sm:px-5 py-[34px] w-auto sm:w-full md:w-full">
        <div className="bg-gray-900 border border-blue_gray-600 border-solid flex flex-col items-center justify-end max-w-[1110px] mx-auto md:px-5 rounded w-full">
          <div className="flex flex-col gap-[15px] items-start justify-end w-full">
            <div className="border border-blue_gray-600 border-solid flex flex-col justify-start p-1 w-full">
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px] w-[32%] md:w-full">
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
                    className="h-3.5 ml-0.5 w-3.5"
                    src="images/img_reply.svg"
                    alt="reply"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-1 pt-[3px] w-[350px]">
                  <div className="flex flex-col gap-2.5 h-[42px] md:h-auto items-start justify-start w-[135px]">
                    <Text
                      className="text-lg text-white-A700 w-auto"
                      size="txtPoppinsExtraLight18"
                    >
                      Content Owner
                    </Text>
                    <div className="flex flex-row items-start justify-evenly w-full">
                      <div className="bg-blue_gray-100 h-3.5 my-0.5 rounded-[50%] w-3.5"></div>
                      <Text
                        className="text-blue_gray-100 text-lg"
                        size="txtPoppinsRegular18"
                      >
                        creator_name
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-[38px] w-[154px]"
                    src="images/img_frame_white_a700.svg"
                    alt="frame"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-2 ml-1 md:ml-[0] mr-[34px] mt-0.5 w-[97%] md:w-full">
                <div className="flex flex-col h-[797px] md:h-auto items-start justify-end md:mt-0 mt-1.5 w-3.5">
                  <div className="flex flex-col h-[797px] md:h-auto items-end justify-end w-3.5">
                    <div className="h-[797px] md:h-[86px] pl-1 pr-[4.14px] relative w-3.5">
                      <div className="absolute bottom-[0] md:h-3.5 h-[21px] right-[1%] w-[72%]">
                        <Text
                          className="absolute left-[0] text-center text-sm text-white-A700 top-[0] w-[7px]"
                          size="txtPoppinsExtraLight14"
                        >
                          1.
                        </Text>
                        <Img
                          className="absolute bottom-[0] h-3.5 inset-x-[0] mx-auto w-2.5"
                          src="images/img_plus.svg"
                          alt="plus"
                        />
                        <Text
                          className="absolute bottom-[0] right-[0] text-center text-sm text-white-A700 w-auto"
                          size="txtPoppinsExtraLight14"
                        >
                          1.
                        </Text>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col gap-[46px] h-[86px] md:h-auto items-center justify-start left-[0] w-[11px]">
                        <Text
                          className="text-center text-sm text-white-A700 w-auto"
                          size="txtPoppinsExtraLight14"
                        >
                          2.
                        </Text>
                        <Text
                          className="text-center text-sm text-white-A700 w-auto"
                          size="txtPoppinsExtraLight14"
                        >
                          3.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-[33%] md:w-full">
                  <div className="flex flex-row items-start justify-center pb-14 w-[71%] md:w-full">
                    <div className="bg-white-A700_0c border border-blue_gray-600 border-solid flex flex-col items-center justify-end mt-2 px-[11px] rounded w-[238px]">
                      <div className="bg-white-A700_0c border border-blue_gray-600 border-dashed flex flex-col items-start justify-end sm:px-5 px-[26px] py-[30px] rounded w-full">
                        <Text
                          className="leading-[20.00px] max-w-[164px] md:max-w-full text-base text-center text-white-A700"
                          size="txtPoppinsLight16"
                        >
                          Upload Model File(s) here
                        </Text>
                        <div className="flex flex-col items-center justify-start w-[31px]">
                          <Img
                            className="h-[30px] w-[31px]"
                            src="images/img_arrowleft_indigo_400.svg"
                            alt="arrowleft"
                          />
                        </div>
                      </div>
                    </div>
                    <Text
                      className="ml-1 text-center text-red-A700 text-sm"
                      size="txtPoppinsExtraLight14RedA700"
                    >
                      *
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="leading-[18.00px] ml-1.5 md:ml-[0] text-[10px] text-center text-white-A700"
                      size="txtPoppinsRegular10"
                    >
                      <span className="text-white-A700 font-poppins font-normal">
                        We support{" "}
                      </span>
                      <span className="text-white-A700 font-poppins font-normal italic">
                        FBX, OBJ, Cinema 4D, Lightwave, Maya, Blender,{" "}
                      </span>
                      <span className="text-white-A700 font-poppins font-normal">
                        and
                      </span>
                      <span className="text-white-A700 font-poppins font-normal italic">
                        {" "}
                        3DS Max{" "}
                      </span>
                      <span className="text-white-A700 font-poppins font-normal">
                        <>
                          {" "}
                          files.
                          <br />
                          You may also upload an archive like .png, gif,{" "}
                        </>
                      </span>
                      <span className="text-white-A700 font-poppins font-normal italic">
                        ZIP
                      </span>
                      <span className="text-white-A700 font-poppins font-normal">
                        ,{" "}
                      </span>
                      <span className="text-white-A700 font-poppins font-normal italic">
                        RAR
                      </span>
                      <span className="text-white-A700 font-poppins font-normal">
                        , or{" "}
                      </span>
                      <span className="text-white-A700 font-poppins font-normal italic">
                        7z{" "}
                      </span>
                      <span className="text-white-A700 font-poppins font-normal">
                        containing your textures, materials, & mesh.
                      </span>
                    </Text>
                    <List
                      className="flex flex-col gap-[45px] items-start mt-0.5 w-[350px] md:w-full"
                      orientation="vertical"
                    >
                      <UploadFormOneColumn className="bg-blue_gray-100_0c border border-blue_gray-600 border-solid flex flex-col items-center justify-start p-1 rounded-bl-[3px] rounded-br-[3px] rounded-tr-[3px] w-full" />
                      <UploadFormOneColumn
                        className="bg-blue_gray-100_0c border border-blue_gray-600 border-solid flex flex-col items-center justify-start p-1 rounded-[3px] w-full"
                        imagename="aspergillus_niger(2023v.2).obj"
                        distance="001S"
                        language=".OBJ (Wavefront)"
                        filesize="102.1Mb"
                      />
                    </List>
                    <Line className="bg-blue_gray-600 h-px md:ml-[0] ml-[25px] mt-3 w-[86%]" />
                    <div className="flex flex-col gap-1.5 items-start justify-start mt-2.5 w-full">
                      <div className="bg-white-A700_0c border border-blue_gray-600 border-solid h-[174px] md:h-[91px] pb-0.5 px-0.5 relative rounded w-full">
                        <div className="absolute flex flex-col items-start justify-start left-[2%] top-[0] w-[67%]">
                          <div className="md:h-6 h-[25px] relative w-[88%]">
                            <Text
                              className="absolute right-[0] text-center text-red-A700 text-sm top-[0]"
                              size="txtPoppinsExtraLight14RedA700"
                            >
                              *
                            </Text>
                            <Text
                              className="absolute bottom-[0] inset-x-[0] mx-auto text-center text-lg text-white-A700 w-max"
                              size="txtPoppinsExtraLight18"
                            >
                              General Specifications
                            </Text>
                          </div>
                          <div className="flex flex-row items-end justify-between w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-center text-white-A700 text-xs"
                                size="txtPoppinsLight12WhiteA700"
                              >
                                Scene
                              </Text>
                              <Text
                                className="ml-0.5 md:ml-[0] text-[10px] text-white-A700"
                                size="txtPoppinsLight10"
                              >
                                Real-World Scale
                              </Text>
                            </div>
                            <div className="h-[15px] md:h-[29px] mt-3.5 px-[3px] relative w-3.5">
                              <div className="absolute bg-blue_gray-800 h-2.5 inset-x-[0] mx-auto rounded-[3px] top-[14%] w-full"></div>
                              <Text
                                className="absolute h-full inset-[0] m-auto text-[10px] text-center text-white-A700 w-max"
                                size="txtPoppinsLight10"
                              >
                                1:1
                              </Text>
                            </div>
                            <Text
                              className="mt-3.5 text-[10px] text-white-A700"
                              size="txtPoppinsRegular10"
                            >
                              Units
                            </Text>
                            <List
                              className="sm:flex-col flex-row gap-[7px] grid grid-cols-3 mt-[15px]"
                              orientation="horizontal"
                            >
                              <div className="h-[13px] relative w-full">
                                <Text
                                  className="absolute h-full inset-[0] justify-center m-auto text-[8px] text-center text-white-A700 w-max"
                                  size="txtPoppinsLight8"
                                >
                                  m
                                </Text>
                                <div className="absolute bg-blue_gray-800_3f h-2.5 inset-x-[0] mx-auto rounded-[3px] top-[0] w-full"></div>
                              </div>
                              <div className="h-[13px] relative w-full">
                                <Text
                                  className="absolute h-full inset-[0] justify-center m-auto text-[8px] text-center text-white-A700 w-max"
                                  size="txtPoppinsLight8"
                                >
                                  cm
                                </Text>
                                <div className="absolute bg-blue_gray-800_3f h-2.5 inset-x-[0] mx-auto rounded-[3px] top-[0] w-full"></div>
                              </div>
                              <div className="h-[13px] relative w-full">
                                <Text
                                  className="absolute h-full inset-y-[0] left-[0] my-auto text-[8px] text-center text-white-A700"
                                  size="txtPoppinsLight8"
                                >
                                  mm
                                </Text>
                                <div className="absolute bg-blue_gray-800_3f h-2.5 inset-x-[0] mx-auto rounded-[3px] top-[0] w-full"></div>
                              </div>
                            </List>
                          </div>
                          <div className="flex flex-row items-start justify-start md:ml-[0] ml-[3px] w-[97%] md:w-full">
                            <Text
                              className="text-[10px] text-white-A700"
                              size="txtPoppinsRegular10"
                            >
                              Organized
                            </Text>
                            <div className="md:h-3.5 h-[15px] ml-[7px] px-[3px] relative w-5">
                              <div className="absolute bg-blue_gray-800 h-3.5 inset-x-[0] mx-auto rounded-[3px] top-[0] w-full"></div>
                              <Text
                                className="absolute h-max inset-[0] m-auto text-[10px] text-center text-white-A700 w-max"
                                size="txtPoppinsLight10"
                              >
                                Yes
                              </Text>
                            </div>
                            <Text
                              className="ml-[45px] text-[10px] text-white-A700"
                              size="txtPoppinsRegular10"
                            >
                              General Dimensions
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-start mt-1 w-1/5 md:w-full">
                            <Text
                              className="text-white-A700 text-xs"
                              size="txtPoppinsLight12WhiteA700"
                            >
                              PBR
                            </Text>
                            <div className="md:h-4 h-[15px] ml-1 mt-0.5 px-[3px] relative w-5">
                              <div className="absolute bg-blue_gray-800_3f h-3.5 inset-x-[0] mx-auto rounded-[3px] top-[0] w-full"></div>
                              <Text
                                className="absolute h-max inset-[0] m-auto text-[10px] text-center text-white-A700 w-max"
                                size="txtPoppinsLight10"
                              >
                                No
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[22%] flex flex-row gap-[13px] items-end justify-between left-[2%] w-[59%]">
                          <div className="flex flex-col relative w-[49%]">
                            <Text
                              className="mx-auto text-center text-white-A700 text-xs"
                              size="txtPoppinsLight12WhiteA700"
                            >
                              Model Geometry
                            </Text>
                            <Text
                              className="mt-[-NaNpx] text-[10px] text-center text-white-A700 z-[1]"
                              size="txtPoppinsLight10"
                            >
                              Vertices
                            </Text>
                            <div className="md:h-[17px] h-[18px] ml-auto mr-3.5 mt-[-1.95px] px-[3px] w-[41px] z-[1]">
                              <div className="absolute bg-blue_gray-800 h-3.5 inset-x-[0] mx-auto rounded-[3px] top-[8%] w-full"></div>
                              <Text
                                className="absolute h-full inset-[0] m-auto text-center text-white-A700 text-xs w-max"
                                size="txtPoppinsLight12WhiteA700"
                              >
                                70,109
                              </Text>
                            </div>
                          </div>
                          <div className="h-4 md:h-[31px] mt-4 relative w-[46%]">
                            <Text
                              className="absolute bottom-[0] inset-x-[0] mx-auto text-[10px] text-center text-white-A700 w-max"
                              size="txtPoppinsLight10"
                            >
                              Quads & Triangles
                            </Text>
                            <div className="absolute bg-blue_gray-800 h-3.5 inset-x-[0] mx-auto rounded-[3px] top-[0] w-full"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-[1%] flex flex-row items-center justify-start left-[2%] w-[77%]">
                          <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
                            <Text
                              className="text-[10px] text-center text-white-A700"
                              size="txtPoppinsLight10"
                            >
                              Edges
                            </Text>
                            <Text
                              className="text-[10px] text-center text-white-A700"
                              size="txtPoppinsLight10"
                            >
                              Faces
                            </Text>
                          </div>
                          <div className="flex flex-col ml-1 relative w-[18%]">
                            <div className="h-[18px] mx-auto px-[3px] w-[46px]">
                              <div className="absolute bg-blue_gray-800 h-3.5 inset-x-[0] mx-auto rounded-[3px] top-[8%] w-full"></div>
                              <Text
                                className="absolute h-full inset-[0] m-auto text-center text-white-A700 text-xs w-max"
                                size="txtPoppinsLight12WhiteA700"
                              >
                                94,005
                              </Text>
                            </div>
                            <div className="h-[18px] mt-[-0.99px] px-[3px] w-[43px] z-[1]">
                              <div className="absolute bg-blue_gray-800 h-3.5 inset-x-[0] mx-auto rounded-[3px] top-[8%] w-full"></div>
                              <Text
                                className="absolute h-full inset-[0] m-auto text-center text-white-A700 text-xs w-max"
                                size="txtPoppinsLight12WhiteA700"
                              >
                                24,702
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start ml-8 w-[59%]">
                            <div className="flex flex-row items-start justify-evenly w-full">
                              <Text
                                className="mt-0.5 text-[10px] text-center text-white-A700"
                                size="txtPoppinsLight10"
                              >
                                Triangles
                              </Text>
                              <div className="h-[18px] px-[3px] relative w-[42px]">
                                <div className="absolute bg-blue_gray-800 h-3.5 inset-x-[0] mx-auto rounded-[3px] top-[8%] w-full"></div>
                                <Text
                                  className="absolute h-full inset-[0] m-auto text-center text-white-A700 text-xs w-max"
                                  size="txtPoppinsLight12WhiteA700"
                                >
                                  10,506
                                </Text>
                              </div>
                              <Text
                                className="text-[10px] text-center text-white-A700"
                                size="txtPoppinsLight10"
                              >
                                Polygons
                              </Text>
                            </div>
                            <div className="flex flex-row items-start justify-start w-[48%] md:w-full">
                              <Text
                                className="text-[10px] text-center text-white-A700"
                                size="txtPoppinsLight10"
                              >
                                Quads
                              </Text>
                              <div className="h-[18px] ml-1 px-[3px] relative w-[38px]">
                                <div className="absolute bg-blue_gray-800 h-3.5 inset-x-[0] mx-auto rounded-[3px] top-[8%] w-full"></div>
                                <Text
                                  className="absolute h-full inset-[0] m-auto text-center text-white-A700 text-xs w-max"
                                  size="txtPoppinsLight12WhiteA700"
                                >
                                  9,428
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[22%] h-4 md:h-[15px] right-[19%] w-[14%]">
                          <Text
                            className="absolute bottom-[0] inset-x-[0] mx-auto text-[10px] text-center text-white-A700 w-max"
                            size="txtPoppinsLight10"
                          >
                            Polygons
                          </Text>
                          <div className="absolute bg-blue_gray-800 h-3.5 inset-x-[0] mx-auto rounded-[3px] top-[0] w-full"></div>
                        </div>
                        <div className="absolute flex flex-col gap-1 h-14 md:h-auto items-start justify-start right-[20%] top-[31%] w-auto">
                          <div className="h-[18px] px-[3px] relative w-8">
                            <div className="absolute bg-blue_gray-800 h-3.5 inset-[0] m-auto rounded-[3px] w-full"></div>
                            <Text
                              className="absolute h-full inset-[0] m-auto text-center text-white-A700 text-xs w-max"
                              size="txtPoppinsLight12WhiteA700"
                            >
                              L 0.0
                            </Text>
                          </div>
                          <div className="h-[18px] px-[3px] relative w-[38px]">
                            <div className="absolute bg-blue_gray-800 h-3.5 inset-[0] m-auto rounded-[3px] w-full"></div>
                            <Text
                              className="absolute h-full inset-[0] m-auto text-center text-white-A700 text-xs w-max"
                              size="txtPoppinsLight12WhiteA700"
                            >
                              W 0.0
                            </Text>
                          </div>
                          <div className="h-[18px] px-[3px] relative w-[35px]">
                            <div className="absolute bg-blue_gray-800 h-3.5 inset-[0] m-auto rounded-[3px] w-full"></div>
                            <Text
                              className="absolute h-full inset-[0] m-auto text-center text-white-A700 text-xs w-max"
                              size="txtPoppinsLight12WhiteA700"
                            >
                              H 0.0
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[13%] h-[18px] px-[3px] right-[12%] w-[27px]">
                          <div className="absolute bg-blue_gray-800 bottom-[8%] h-3.5 inset-x-[0] mx-auto rounded-[3px] w-full"></div>
                          <Text
                            className="absolute h-full inset-[0] m-auto text-center text-white-A700 text-xs w-max"
                            size="txtPoppinsLight12WhiteA700"
                          >
                            n/a
                          </Text>
                        </div>
                      </div>
                      <div className="h-10 md:h-[25px] relative w-[85%]">
                        <Text
                          className="absolute inset-x-[0] mx-auto text-lg text-white-A700 top-[0] w-max"
                          size="txtPoppinsExtraLight18"
                        >
                          Scientific Reference Data Type(s)
                        </Text>
                        <Text
                          className="absolute bottom-[0] left-[0] text-[10px] text-white-A700"
                          size="txtPoppinsLight10"
                        >
                          Select type of imaging data used to model scene
                        </Text>
                        <Text
                          className="absolute right-[0] text-center text-red-A700 text-sm top-[0]"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                    </div>
                    <Button className="bg-white-A700_19 cursor-pointer font-light min-w-[131px] outline outline-[0.5px] outline-blue_gray-600 py-0.5 rounded-[3px] text-[10px] text-center text-white-A700">
                      multi-select
                    </Button>
                    <div className="flex flex-row gap-[-1px] items-start justify-between mt-[7px] w-[328px]">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtPoppinsExtraLight18"
                      >
                        Scientific Reference Data & Citations
                      </Text>
                      <Text
                        className="text-center text-red-A700 text-sm w-auto"
                        size="txtPoppinsExtraLight14RedA700"
                      >
                        *
                      </Text>
                    </div>
                    <div className="flex flex-row items-start justify-start mt-[5px] w-[29%] md:w-full">
                      <Switch
                        onColor="#004dff"
                        offColor="#ffffff19"
                        onHandleColor="#505082"
                        offHandleColor="#505082"
                        value={true}
                        className="outline outline-[0.5px] outline-blue_gray-600 w-[22%]"
                      />
                      <Text
                        className="ml-0.5 text-[10px] text-center text-white-A700"
                        size="txtPoppinsLight10"
                      >
                        visible to public
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-between w-[209px]">
                      <div className="flex flex-col gap-[-1px] h-[37px] md:h-auto items-start justify-start w-[110px]">
                        <Text
                          className="text-[10px] text-center text-white-A700 w-auto"
                          size="txtPoppinsExtraLight10"
                        >
                          Data URL
                        </Text>
                        <div className="bg-white-A700_19 h-5 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-full"></div>
                      </div>
                      <Text
                        className="text-[10px] text-white-A700 w-auto"
                        size="txtPoppinsLight10"
                      >
                        or
                      </Text>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[10px] text-center text-white-A700"
                          size="txtPoppinsExtraLight10"
                        >
                          Data File
                        </Text>
                        <div className="flex h-5 justify-end relative w-full">
                          <div className="flex flex-row h-full items-start justify-evenly mb-0.5 mt-auto mx-auto w-[90%]">
                            <Text
                              className="text-[8px] text-center text-white-A700"
                              size="txtPoppinsLight8"
                            >
                              Upload Docs
                            </Text>
                            <Img
                              className="h-1.5"
                              src="images/img_call.svg"
                              alt="call"
                            />
                          </div>
                          <Input
                            name="photogrammetry_Two"
                            placeholder=""
                            className="justify-center md:h-auto p-0 sm:h-auto w-full"
                            wrapClassName="absolute bg-blue_gray-800 flex h-5 inset-[0] m-auto rounded-[3px] w-full"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="leading-[14.00px] mt-[3px] text-[10px] text-white-A700 w-[66%] sm:w-full"
                      size="txtPoppinsLight10"
                    >
                      Why, how, and where was data used. What methodology was
                      used to integrate to it.
                    </Text>
                    <div className="flex flex-row gap-2.5 items-center justify-between mt-[5px] w-[209px]">
                      <div className="flex flex-row gap-2.5 h-5 md:h-auto items-center justify-end w-[131px]">
                        <div className="bg-white-A700_19 h-5 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[84%]"></div>
                        <Text
                          className="text-[10px] text-white-A700 w-auto"
                          size="txtPoppinsLight10"
                        >
                          or
                        </Text>
                      </div>
                      <div className="flex flex-col h-5 md:h-auto items-center justify-end w-[68px]">
                        <div className="bg-blue_gray-800 flex flex-col h-5 md:h-auto items-center justify-center px-0.5 rounded-[3px] w-[68px]">
                          <div className="h-3 relative w-4/5">
                            <Text
                              className="m-auto text-[8px] text-center text-white-A700 w-auto"
                              size="txtPoppinsLight8"
                            >
                              Upload Docs
                            </Text>
                            <Img
                              className="absolute h-1.5 right-[0] top-[0] w-2"
                              src="images/img_call.svg"
                              alt="call_One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-2.5 mt-[5px] w-2.5"
                      src="images/img_plus_blue_a700.svg"
                      alt="plus_One"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-start ml-2 md:ml-[0] w-[65%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-1.5 md:ml-[0] pb-0.5 w-full">
                    <Text
                      className="md:mt-0 mt-0.5 text-center text-sm text-white-A700"
                      size="txtPoppinsExtraLight14"
                    >
                      4.
                    </Text>
                    <div className="flex flex-col gap-0.5 items-start justify-start md:ml-[0] ml-[3px] w-[250px]">
                      <div className="flex flex-row gap-[-137px] items-start justify-between w-full">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsExtraLight18"
                        >
                          Model Name
                        </Text>
                        <Text
                          className="text-center text-red-A700 text-sm w-auto"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                      <Text
                        className="text-[10px] text-white-A700 w-full"
                        size="txtPoppinsLight10"
                      >
                        <span className="text-white-A700 font-poppins text-left font-light">
                          Common name of{" "}
                        </span>
                        <span className="text-white-A700 font-poppins text-left font-normal">
                          3D model, scene, or animation
                        </span>
                      </Text>
                      <Input
                        name="rectangle4050"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="bg-white-A700_19 flex h-5 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-2/5"
                      ></Input>
                    </div>
                    <Text
                      className="ml-20 md:ml-[0] md:mt-0 mt-0.5 text-center text-sm text-white-A700"
                      size="txtPoppinsExtraLight14"
                    >
                      6.
                    </Text>
                    <div className="flex flex-col gap-[3px] items-start justify-start md:ml-[0] ml-[3px] w-[327px]">
                      <div className="flex flex-row items-start justify-between w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsExtraLight18"
                        >
                          Scientific Collaboration
                        </Text>
                        <Text
                          className="text-center text-red-A700 text-sm w-auto"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] h-3.5 md:h-auto items-center justify-start w-full">
                        <Button className="bg-blue_gray-600_33 border border-indigo-400 border-solid cursor-pointer font-light h-3.5 rounded-[3px] text-[8px] text-center text-white-A700 w-[77px]">
                          No Collaboration{" "}
                        </Button>
                        <Button className="bg-blue_gray-600_33 border border-indigo-400 border-solid cursor-pointer font-light h-3.5 rounded-[3px] text-[8px] text-center text-white-A700 w-[83px]">
                          Community Driven
                        </Button>
                        <Button className="bg-blue_gray-600_33 border border-indigo-400 border-solid cursor-pointer font-light h-3.5 rounded-[3px] text-[8px] text-center text-white-A700 w-[145px]">
                          Academic Research Collaboration
                        </Button>
                      </div>
                      <Text
                        className="leading-[11.00px] max-w-[327px] md:max-w-full text-[10px] text-white-A700"
                        size="txtPoppinsLight10"
                      >
                        Models with research, lab, or organization collaboration
                        must upload docs detailing purpose, roles, methodology,
                        & references{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly ml-1.5 md:ml-[0] mt-2 w-[99%] md:w-full">
                    <Text
                      className="md:mt-0 mt-0.5 text-center text-sm text-white-A700"
                      size="txtPoppinsExtraLight14"
                    >
                      5.
                    </Text>
                    <div className="flex flex-col gap-0.5 items-start justify-start mb-0.5 w-[312px]">
                      <div className="flex flex-row h-[21px] md:h-auto items-start justify-start w-auto">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsExtraLight18"
                        >
                          Scientific Name
                        </Text>
                        <Text
                          className="text-center text-red-A700 text-sm w-auto"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                      <Text
                        className="text-[10px] text-white-A700 w-full"
                        size="txtPoppinsLight10"
                      >
                        Input Binomial Nomenclature, Scientific Name, or
                        Official Name
                      </Text>
                    </div>
                    <Text
                      className="md:mt-0 mt-0.5 text-center text-sm text-white-A700"
                      size="txtPoppinsExtraLight14"
                    >
                      7.
                    </Text>
                    <div className="flex flex-col items-center justify-start md:mt-0 mt-[3px] w-[30%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtPoppinsExtraLight18"
                        >
                          Collaborator(s)
                        </Text>
                        <div className="flex flex-row items-start justify-evenly ml-0.5 md:ml-[0] w-[99%] md:w-full">
                          <Text
                            className="text-[10px] text-white-A700"
                            size="txtPoppinsLight10"
                          >
                            <span className="text-white-A700 font-poppins text-left font-light">
                              Name{" "}
                            </span>
                            <span className="text-white-A700 font-poppins text-left text-[8px] font-light">
                              (person/org/
                            </span>
                            <span className="text-white-A700 font-poppins text-left text-[8px] font-light">
                              username)
                            </span>
                          </Text>
                          <Text
                            className="mt-0.5 text-[10px] text-white-A700"
                            size="txtPoppinsLight10"
                          >
                            <span className="text-white-A700 font-poppins text-left font-light">
                              Email{" "}
                            </span>
                            <span className="text-white-A700 font-poppins text-left text-[8px] font-light">
                              (institute pref.)
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="md:mt-0 mt-[23px] text-[10px] text-white-A700"
                      size="txtPoppinsLight10"
                    >
                      Social URL
                    </Text>
                    <Text
                      className="md:mt-0 mt-6 text-[10px] text-white-A700"
                      size="txtPoppinsLight10"
                    >
                      Sci Collab
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[21px] w-[95%] md:w-full">
                    <div className="bg-white-A700_19 h-5 mb-[66px] rounded-[3px] w-[17%]"></div>
                    <Img
                      className="h-3.5 md:ml-[0] ml-[217px] md:mt-0 mt-5 w-3.5"
                      src="images/img_plus.svg"
                      alt="plus_Two"
                    />
                    <div className="flex flex-col gap-px items-center justify-center w-[313px]">
                      <div className="md:h-5 h-[33px] pr-[7px] relative w-full">
                        <Text
                          className="absolute bottom-[0] right-[4%] text-[10px] text-white-A700"
                          size="txtPoppinsLight10"
                        >
                          <span className="text-white-A700 font-poppins text-left font-light">
                            Collaboration Description{" "}
                          </span>
                          <span className="text-white-A700 font-poppins text-left text-[8px] font-light">
                            (who, why, what, how)
                          </span>
                        </Text>
                        <div className="absolute md:h-5 h-[33px] inset-y-[0] left-[0] my-auto w-[35%]">
                          <Text
                            className="absolute bottom-[0] left-[0] text-[10px] text-white-A700"
                            size="txtPoppinsLight10"
                          >
                            Role
                          </Text>
                          <div className="absolute bg-white-A700_19 h-5 inset-x-[0] mx-auto outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] top-[0] w-full"></div>
                        </div>
                        <div className="absolute flex flex-row items-start justify-between right-[21%] top-[0] w-[62%]">
                          <div className="bg-white-A700_19 h-5 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[47%]"></div>
                          <div className="bg-white-A700_19 h-5 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[31%]"></div>
                          <div className="h-[15px] md:h-[18px] mt-1 px-[3px] relative w-5">
                            <div className="absolute bg-blue_gray-800_3f h-3.5 inset-x-[0] mx-auto rounded-[3px] top-[0] w-full"></div>
                            <Text
                              className="absolute h-max inset-[0] m-auto text-[10px] text-center text-white-A700 w-max"
                              size="txtPoppinsLight10"
                            >
                              No
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[5px] items-start justify-between w-full">
                        <div className="flex flex-col gap-[21px] h-[51px] md:h-auto items-start justify-start w-20">
                          <div className="bg-white-A700_19 h-5 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-full"></div>
                          <Img
                            className="h-2.5 w-2.5"
                            src="images/img_plus_blue_a700.svg"
                            alt="plus_Three"
                          />
                        </div>
                        <div className="bg-white-A700_19 h-10 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[73%]"></div>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-blue_gray-600 h-px mt-[11px] mx-auto w-[87%]" />
                  <div className="sm:h-[131px] h-[158px] md:h-[465px] mt-0.5 relative w-[97%] md:w-full">
                    <Text
                      className="absolute left-[0] text-[22px] sm:text-lg text-white-A700 md:text-xl top-[0]"
                      size="txtPoppinsExtraLight22"
                    >
                      Scene Info
                    </Text>
                    <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-evenly mx-auto w-full">
                      <div className="flex flex-col md:gap-10 gap-20 h-[120px] md:h-auto items-center justify-start md:mt-0 mt-1.5 w-4">
                        <Text
                          className="text-center text-sm text-white-A700 w-auto"
                          size="txtPoppinsExtraLight14"
                        >
                          <span className="text-white-A700 font-poppins font-light">
                            8
                          </span>
                          <span className="text-white-A700 font-poppins text-[10px] font-light">
                            a
                          </span>
                        </Text>
                        <Text
                          className="text-center text-sm text-white-A700 w-auto"
                          size="txtPoppinsExtraLight14"
                        >
                          <span className="text-white-A700 font-poppins font-light">
                            8
                          </span>
                          <span className="text-white-A700 font-poppins text-[10px] font-light">
                            b
                          </span>
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-0.5 w-[37%] md:w-full">
                        <div className="flex flex-row h-[22px] md:h-auto items-start justify-start w-auto">
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtPoppinsExtraLight18"
                          >
                            Scene Organization
                          </Text>
                          <Text
                            className="text-center text-red-A700 text-sm w-auto"
                            size="txtPoppinsExtraLight14RedA700"
                          >
                            *
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[3px] mt-1 text-[10px] text-white-A700"
                          size="txtPoppinsLight10"
                        >
                          Scene Organization Methodology & Description
                        </Text>
                        <Input
                          name="rectangle4069"
                          placeholder=""
                          className="p-0 w-full"
                          wrapClassName="bg-white-A700_19 flex h-[50px] md:ml-[0] ml-[3px] outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[99%]"
                        ></Input>
                        <div className="flex flex-row gap-1.5 h-[18px] md:h-auto items-center justify-end mt-3 w-[135px]">
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtPoppinsExtraLight18"
                          >
                            UV Mapping
                          </Text>
                          <Switch
                            onColor="#004dff"
                            offColor="#ffffff19"
                            onHandleColor="#505082"
                            offHandleColor="#505082"
                            value={true}
                            className="outline outline-[0.5px] outline-blue_gray-600 w-[17%]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-[5px] h-[39px] md:h-auto items-start justify-start md:mt-0 mt-11 w-[68px]">
                        <Text
                          className="text-[10px] text-white-A700 w-auto"
                          size="txtPoppinsLight10"
                        >
                          and/or
                        </Text>
                        <div className="flex flex-col h-5 md:h-auto items-center justify-end w-[68px]">
                          <div className="bg-blue_gray-800 flex flex-col h-5 md:h-auto items-center justify-center px-0.5 rounded-[3px] w-[68px]">
                            <div className="h-3 relative w-4/5">
                              <Text
                                className="m-auto text-[8px] text-center text-white-A700 w-auto"
                                size="txtPoppinsLight8"
                              >
                                Upload Docs
                              </Text>
                              <Img
                                className="absolute h-1.5 right-[0] top-[0] w-2"
                                src="images/img_call.svg"
                                alt="call_Two"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="md:mt-0 mt-[5px] text-center text-sm text-white-A700"
                        size="txtPoppinsExtraLight14"
                      >
                        9.
                      </Text>
                      <div className="flex flex-col gap-0.5 items-start justify-start w-[301px]">
                        <div className="flex flex-row h-6 md:h-auto items-end justify-start pt-[11px] w-[94px]">
                          <Text
                            className="text-lg text-white-A700 w-auto"
                            size="txtPoppinsExtraLight18"
                          >
                            AI used
                          </Text>
                          <Text
                            className="text-center text-red-A700 text-sm w-auto"
                            size="txtPoppinsExtraLight14RedA700"
                          >
                            *
                          </Text>
                          <Switch
                            onColor="#004dff"
                            offColor="#ffffff19"
                            onHandleColor="#505082"
                            offHandleColor="#505082"
                            value={false}
                            className="outline outline-[0.5px] outline-blue_gray-600 w-[24%]"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between w-[225px]">
                          <Text
                            className="text-[10px] text-white-A700 w-auto"
                            size="txtPoppinsLight10"
                          >
                            Select Use
                          </Text>
                          <Text
                            className="text-[10px] text-white-A700 w-auto"
                            size="txtPoppinsLight10"
                          >
                            Model/Software Name
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[49px] h-5 md:h-auto items-center justify-start w-full">
                          <Button
                            className="bg-white-A700_19 cursor-pointer flex items-center justify-center min-w-[103px] outline outline-[0.5px] outline-blue_gray-600 pr-[34px] py-0.5 rounded-[3px]"
                            leftIcon={
                              <Img
                                className="h-[15px] mt-px mr-1"
                                src="images/img_icon_24_chevron_up.svg"
                                alt="Icon/24/chevron up"
                              />
                            }
                          >
                            <div className="font-light sm:pr-5 text-[10px] text-center text-white-A700">
                              select use
                            </div>
                          </Button>
                          <div className="bg-white-A700_19 h-5 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[63%]"></div>
                        </div>
                        <Text
                          className="text-[10px] text-white-A700 w-auto"
                          size="txtPoppinsLight10"
                        >
                          Description & Methodology
                        </Text>
                        <div className="flex flex-row gap-[5px] h-[49px] md:h-auto items-start justify-start w-full">
                          <div className="bg-white-A700_19 h-[49px] outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[63%]"></div>
                          <Text
                            className="text-[10px] text-white-A700 w-auto"
                            size="txtPoppinsLight10"
                          >
                            and/or
                          </Text>
                          <div className="flex flex-col h-5 md:h-auto items-center justify-end w-[68px]">
                            <div className="bg-blue_gray-800 flex flex-col h-5 md:h-auto items-center justify-center px-0.5 rounded-[3px] w-[68px]">
                              <div className="h-3 relative w-4/5">
                                <Text
                                  className="m-auto text-[8px] text-center text-white-A700 w-auto"
                                  size="txtPoppinsLight8"
                                >
                                  Upload Docs
                                </Text>
                                <Img
                                  className="absolute h-1.5 right-[0] top-[0] w-2"
                                  src="images/img_call.svg"
                                  alt="call_Three"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mt-0.5 w-[99%] md:w-full">
                    <div className="md:h-20 sm:h-[101px] h-[129px] md:mt-0 mt-[99px] pr-[2.14px] relative w-[18px]">
                      <div className="absolute flex flex-col md:gap-10 gap-[61px] h-[101px] md:h-auto items-start justify-end left-[0] top-[0] w-4">
                        <Text
                          className="text-center text-sm text-white-A700 w-auto"
                          size="txtPoppinsExtraLight14"
                        >
                          <span className="text-white-A700 font-poppins font-light">
                            8
                          </span>
                          <span className="text-white-A700 font-poppins text-[10px] font-light">
                            c
                          </span>
                        </Text>
                        <Text
                          className="text-center text-sm text-white-A700 w-auto"
                          size="txtPoppinsExtraLight14"
                        >
                          <span className="text-white-A700 font-poppins font-light">
                            8
                          </span>
                          <span className="text-white-A700 font-poppins text-[10px] font-light">
                            d
                          </span>
                        </Text>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[67px] items-center justify-start left-[0] w-[78%] md:w-full">
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_plus.svg"
                          alt="plus_Four"
                        />
                        <Img
                          className="h-3.5 w-3.5"
                          src="images/img_plus.svg"
                          alt="plus_Five"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[29%] md:w-full">
                      <Button className="bg-white-A700_19 cursor-pointer font-light min-w-[156px] ml-0.5 md:ml-[0] outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] text-[10px] text-center text-white-A700">
                        select
                      </Button>
                      <Text
                        className="ml-0.5 md:ml-[0] mt-1 text-[10px] text-white-A700"
                        size="txtPoppinsLight10"
                      >
                        UV Description
                      </Text>
                      <Input
                        name="rectangle4064"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="bg-white-A700_19 flex h-[50px] ml-0.5 md:ml-[0] outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[99%]"
                      ></Input>
                      <div className="flex flex-row gap-[-1px] h-[23px] md:h-auto items-center justify-end mt-[7px] pb-[3px] w-[99px]">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsExtraLight18"
                        >
                          Material(s)
                        </Text>
                        <Text
                          className="text-center text-red-A700 text-sm w-auto"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[27px] h-3.5 md:h-auto items-center justify-start mt-[3px] w-[156px]">
                        <Text
                          className="text-[10px] text-white-A700 w-auto"
                          size="txtPoppinsLight10"
                        >
                          Material name
                        </Text>
                        <Text
                          className="text-[10px] text-white-A700 w-auto"
                          size="txtPoppinsLight10"
                        >
                          Description
                        </Text>
                      </div>
                      <Img
                        className="h-5 mt-[3px] w-[190px]"
                        src="images/img_frame_white_a700_20x190.svg"
                        alt="frame_One"
                      />
                      <Img
                        className="h-2.5 mt-[5px] w-2.5"
                        src="images/img_plus_blue_a700.svg"
                        alt="plus_Six"
                      />
                      <div className="flex flex-row gap-[-1px] h-[22px] md:h-auto items-start justify-start mt-1 w-[92px]">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsExtraLight18"
                        >
                          Texture(s)
                        </Text>
                        <Text
                          className="text-center text-red-A700 text-sm w-auto"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[31px] h-3.5 md:h-auto items-center justify-start mt-[3px] w-[156px]">
                        <Text
                          className="text-[10px] text-white-A700 w-auto"
                          size="txtPoppinsLight10"
                        >
                          Texture name
                        </Text>
                        <Text
                          className="text-[10px] text-white-A700 w-auto"
                          size="txtPoppinsLight10"
                        >
                          Description
                        </Text>
                      </div>
                      <Img
                        className="h-5 mt-[3px] w-[190px]"
                        src="images/img_frame_white_a700_20x190.svg"
                        alt="frame_Two"
                      />
                    </div>
                    <div className="flex flex-col items-end justify-start md:mt-0 mt-[9px] pt-0.5 w-[23%] md:w-full">
                      <Text
                        className="text-[10px] text-center text-white-A700"
                        size="txtPoppinsExtraLight10"
                      >
                        10a
                      </Text>
                      <div className="flex flex-col h-5 md:h-auto items-center justify-start mt-2.5 w-[108px]">
                        <div className="flex flex-row gap-[5px] h-5 md:h-auto items-center justify-start w-[108px]">
                          <Text
                            className="text-[10px] text-white-A700 w-auto"
                            size="txtPoppinsLight10"
                          >
                            and/or
                          </Text>
                          <Button
                            className="bg-blue_gray-800 cursor-pointer flex h-5 items-center justify-center pl-[7px] py-1 rounded-[3px] w-[68px]"
                            rightIcon={
                              <div className="mt-px mb-0.5 ml-0.5 outline-indigo-400 outline-[0.5px] outline">
                                <Img src="images/img_call.svg" alt="call" />
                              </div>
                            }
                          >
                            <div className="font-light text-[8px] text-center text-white-A700">
                              Upload Docs
                            </div>
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start mt-[49px] w-[97%] md:w-full">
                        <div className="flex flex-row gap-[76px] h-7 md:h-auto items-start justify-start w-[146px]">
                          <div className="flex flex-col h-7 md:h-auto items-center justify-end w-[51px]">
                            <Text
                              className="text-[10px] text-white-A700 w-auto"
                              size="txtPoppinsLight10"
                            >
                              Resolution
                            </Text>
                          </div>
                          <Text
                            className="text-[10px] text-center text-white-A700 w-auto"
                            size="txtPoppinsExtraLight10"
                          >
                            10b
                          </Text>
                        </div>
                        <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start mt-[3px] w-[127px]">
                          <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-end w-[27px]">
                            <div className="bg-white-A700_19 h-5 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-5"></div>
                            <Text
                              className="text-[8px] text-center text-white-A700 w-auto"
                              size="txtPoppinsLight8"
                            >
                              X
                            </Text>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-5 md:h-auto items-center justify-end w-[98px]"
                            style={{
                              backgroundImage:
                                "url('images/img_frame_blue_gray_800.svg')",
                            }}
                          >
                            <div className="flex flex-row gap-0.5 h-3 md:h-auto items-center justify-start w-[61px]">
                              <Text
                                className="text-[8px] text-center text-white-A700 w-auto"
                                size="txtPoppinsLight8"
                              >
                                Upload Docs
                              </Text>
                              <Img
                                className="h-1.5 w-2"
                                src="images/img_call.svg"
                                alt="call_Four"
                              />
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-3.5 md:ml-[0] ml-[132px] mt-[7px] w-3.5"
                          src="images/img_plus.svg"
                          alt="plus_Seven"
                        />
                        <Text
                          className="mt-[21px] text-[10px] text-white-A700"
                          size="txtPoppinsLight10"
                        >
                          Resolution
                        </Text>
                        <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-start mt-0.5 w-[127px]">
                          <div className="flex flex-row gap-0.5 h-5 md:h-auto items-center justify-end w-[27px]">
                            <div className="bg-white-A700_19 h-5 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-5"></div>
                            <Text
                              className="text-[8px] text-center text-white-A700 w-auto"
                              size="txtPoppinsLight8"
                            >
                              X
                            </Text>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-5 md:h-auto items-center justify-end w-[98px]"
                            style={{
                              backgroundImage:
                                "url('images/img_frame_blue_gray_800.svg')",
                            }}
                          >
                            <div className="flex flex-row gap-0.5 h-3 md:h-auto items-center justify-start w-[61px]">
                              <Text
                                className="text-[8px] text-center text-white-A700 w-auto"
                                size="txtPoppinsLight8"
                              >
                                Upload Docs
                              </Text>
                              <Img
                                className="h-1.5 w-2"
                                src="images/img_call.svg"
                                alt="call_Five"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[9px] w-[46%] md:w-full">
                      <div className="flex flex-row gap-[5px] h-[18px] md:h-auto items-center justify-end w-[93px]">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsExtraLight18"
                        >
                          Rigging
                        </Text>
                        <Switch
                          onColor="#004dff"
                          offColor="#ffffff19"
                          onHandleColor="#505082"
                          offHandleColor="#505082"
                          value={true}
                          className="outline outline-[0.5px] outline-blue_gray-600 w-[24%]"
                        />
                      </div>
                      <Text
                        className="mt-1 text-[10px] text-white-A700"
                        size="txtPoppinsLight10"
                      >
                        Description & Methodology
                      </Text>
                      <div className="flex flex-row gap-[5px] items-start justify-between w-[301px]">
                        <div className="bg-white-A700_19 h-[50px] outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[63%]"></div>
                        <Text
                          className="text-[10px] text-white-A700 w-auto"
                          size="txtPoppinsLight10"
                        >
                          and/or
                        </Text>
                        <div className="flex flex-col h-5 md:h-auto items-center justify-end w-[68px]">
                          <div className="bg-blue_gray-800 flex flex-col h-5 md:h-auto items-center justify-center px-0.5 rounded-[3px] w-[68px]">
                            <div className="h-3 relative w-4/5">
                              <Text
                                className="m-auto text-[8px] text-center text-white-A700 w-auto"
                                size="txtPoppinsLight8"
                              >
                                Upload Docs
                              </Text>
                              <Img
                                className="absolute h-1.5 right-[0] top-[0] w-2"
                                src="images/img_call.svg"
                                alt="call_Six"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-2 h-[18px] md:h-auto items-start justify-start mt-2.5 w-[143px]">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsExtraLight18"
                        >
                          Animation(s)
                        </Text>
                        <Switch
                          onColor="#004dff"
                          offColor="#ffffff19"
                          onHandleColor="#505082"
                          offHandleColor="#505082"
                          value={true}
                          className="outline outline-[0.5px] outline-blue_gray-600 w-[16%]"
                        />
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-between w-[301px]">
                        <div className="flex flex-row gap-[27px] h-3.5 md:h-auto items-center justify-start w-[174px]">
                          <Text
                            className="text-[10px] text-white-A700 w-auto"
                            size="txtPoppinsLight10"
                          >
                            Animation name
                          </Text>
                          <Text
                            className="text-[10px] text-white-A700 w-auto"
                            size="txtPoppinsLight10"
                          >
                            Total Frames
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[57px] h-3.5 md:h-auto items-center justify-start w-[117px]">
                          <Text
                            className="text-[10px] text-white-A700 w-auto"
                            size="txtPoppinsLight10"
                          >
                            FPS
                          </Text>
                          <Text
                            className="text-[10px] text-white-A700 w-auto"
                            size="txtPoppinsLight10"
                          >
                            Duration
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-5 mt-0.5 w-[300px]"
                        src="images/img_frame_white_a700_20x300.svg"
                        alt="frame_Three"
                      />
                      <Text
                        className="mt-[3px] text-[10px] text-white-A700"
                        size="txtPoppinsLight10"
                      >
                        Animation Technology, Methodology, & Description
                      </Text>
                      <div className="flex flex-row gap-2.5 items-start justify-between w-[311px]">
                        <div className="bg-white-A700_19 h-[38px] outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[61%]"></div>
                        <Text
                          className="text-[10px] text-white-A700 w-auto"
                          size="txtPoppinsLight10"
                        >
                          and/or
                        </Text>
                        <div className="flex flex-col h-5 md:h-auto items-center justify-end w-[68px]">
                          <div className="bg-blue_gray-800 flex flex-col h-5 md:h-auto items-center justify-center px-0.5 rounded-[3px] w-[68px]">
                            <div className="h-3 relative w-4/5">
                              <Text
                                className="m-auto text-[8px] text-center text-white-A700 w-auto"
                                size="txtPoppinsLight8"
                              >
                                Upload Docs
                              </Text>
                              <Img
                                className="absolute h-1.5 right-[0] top-[0] w-2"
                                src="images/img_call.svg"
                                alt="call_Seven"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="h-2.5 mt-[5px] w-2.5"
                        src="images/img_plus_blue_a700.svg"
                        alt="plus_Eight"
                      />
                    </div>
                  </div>
                  <Img
                    className="h-2.5 ml-5 md:ml-[0] mt-[5px] w-2.5"
                    src="images/img_plus_blue_a700.svg"
                    alt="plus_Nine"
                  />
                  <div className="flex flex-row gap-[3px] items-start justify-between ml-1.5 md:ml-[0] mt-1.5 w-[233px]">
                    <Text
                      className="text-center text-sm text-white-A700 w-auto"
                      size="txtPoppinsExtraLight14"
                    >
                      11.
                    </Text>
                    <div className="flex flex-col items-start justify-start">
                      <div className="h-6 relative w-full">
                        <Text
                          className="absolute h-full inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                          size="txtPoppinsExtraLight18"
                        >
                          Hardware Requirements
                        </Text>
                        <Text
                          className="absolute right-[0] text-center text-red-A700 text-sm top-[0]"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                      <Text
                        className="text-[10px] text-white-A700"
                        size="txtPoppinsLight10"
                      >
                        Description
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 h-9 ml-5 md:ml-[0] mr-[458px] mt-0.5 outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[31%]"></div>
                  <div className="flex flex-row gap-1 items-start justify-between ml-0.5 md:ml-[0] mt-[7px] pt-[3px] w-56">
                    <Text
                      className="text-center text-sm text-white-A700 w-auto"
                      size="txtPoppinsExtraLight14"
                    >
                      12.
                    </Text>
                    <div className="flex flex-col gap-0.5 items-start justify-start w-[206px]">
                      <div className="flex flex-row gap-[-2px] h-5 md:h-auto items-center justify-end w-full">
                        <Text
                          className="text-lg text-white-A700 w-auto"
                          size="txtPoppinsExtraLight18"
                        >
                          Scene Description
                        </Text>
                        <Text
                          className="text-center text-red-A700 text-sm w-auto"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                      <Text
                        className="text-[10px] text-white-A700 w-full"
                        size="txtPoppinsExtraLight10"
                      >
                        Objective and/or Purpose of Scene/Model
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700_19 h-[131px] md:ml-[0] ml-[21px] mr-[9px] outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-[96%]"></div>
                </div>
              </div>
            </div>
            <div className="h-32 md:h-[273px] sm:pr-5 pr-[31px] relative w-full">
              <div className="bg-white-A700_0c border border-blue_gray-600 border-solid flex md:flex-col flex-row md:gap-5 h-full items-start justify-start m-auto pb-[7px] px-[7px] w-[97%]">
                <Text
                  className="md:mt-0 mt-[5px] text-center text-sm text-white-A700"
                  size="txtPoppinsExtraLight14"
                >
                  13.
                </Text>
                <Text
                  className="mb-[90px] md:ml-[0] ml-[3px] md:mt-0 mt-[3px] text-lg text-white-A700"
                  size="txtPoppinsExtraLight18"
                >
                  Licensing Selection
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] text-center text-red-A700 text-sm"
                  size="txtPoppinsExtraLight14RedA700"
                >
                  *
                </Text>
                <Img
                  className="h-1.5 md:ml-[0] ml-[754px] md:mt-0 mt-[41px]"
                  src="images/img_reply_blue_gray_600.svg"
                  alt="reply_One"
                />
                <Text
                  className="ml-1 md:ml-[0] md:mt-0 mt-[27px] text-center text-red-A700 text-sm"
                  size="txtPoppinsExtraLight14RedA700"
                >
                  *
                </Text>
              </div>
              <div className="absolute flex md:flex-col flex-row gap-[-25px] h-full inset-[0] items-start justify-between m-auto max-w-[1079px] px-[9px] py-[31px] w-full">
                <List
                  className="md:flex-1 sm:flex-col flex-row md:gap-2.5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-between w-auto md:w-full"
                  orientation="horizontal"
                >
                  {uploadFormOneStackpersonallicensePropList.map(
                    (props, index) => (
                      <React.Fragment
                        key={`UploadFormOneStackpersonallicense${index}`}
                      >
                        <UploadFormOneStackpersonallicense
                          className="h-[86px] relative w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ),
                  )}
                </List>
                <Img
                  className="h-[23px] w-[18px]"
                  src="images/img_frame_blue_gray_800_23x18.svg"
                  alt="frame_Four"
                />
              </div>
            </div>
            <div className="sm:h-[101px] h-[102px] md:h-[352px] relative w-full">
              <div className="absolute sm:h-[101px] h-[102px] md:h-[352px] inset-[0] justify-center m-auto w-full">
                <div className="absolute sm:h-[101px] h-[102px] md:h-[237px] inset-[0] justify-center m-auto w-full">
                  <div className="absolute bg-white-A700_0c border border-blue_gray-600 border-solid flex md:flex-col flex-row gap-[7px] h-max inset-[0] items-start justify-center m-auto rounded-bl rounded-br w-[99%]">
                    <div className="flex flex-row items-start justify-start ml-1 md:ml-[0] w-[16%] md:w-full">
                      <Text
                        className="mt-1.5 text-center text-sm text-white-A700"
                        size="txtPoppinsExtraLight14"
                      >
                        14.
                      </Text>
                      <div className="md:h-14 h-[82px] ml-1 relative w-[89%]">
                        <Text
                          className="absolute inset-x-[0] mx-auto text-lg text-white-A700 top-[2%] w-max"
                          size="txtPoppinsExtraLight18"
                        >
                          Product Preview
                        </Text>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] leading-[14.00px] mx-auto text-[10px] text-white-A700 w-full"
                          size="txtPoppinsLight10"
                        >
                          Input Scene renders (minimum of 1080p) (81 PPI)) &
                          videos (if animated) for marketplace display
                        </Text>
                        <Text
                          className="absolute right-[0] text-center text-red-A700 text-sm top-[0]"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                    </div>
                    <div className="sm:h-[151px] md:h-[49px] h-[91px] md:mt-0 mt-1 relative w-[46%] md:w-full">
                      <div className="absolute bottom-[16%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[95%]">
                        <List
                          className="flex flex-col gap-1.5 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-start justify-start my-0 w-full">
                            <div
                              className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-[15px] items-center justify-end sm:mt-0 mt-1.5 p-0.5 w-[3%] sm:w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group59.svg')",
                              }}
                            >
                              <div className="flex flex-col items-center justify-start mt-0.5 w-[72%] md:w-full">
                                <Img
                                  className="h-1 w-1"
                                  src="images/img_vector_indigo_400.svg"
                                  alt="vector"
                                />
                                <div className="flex flex-row items-center justify-evenly w-full">
                                  <Img
                                    className="h-0.5 w-0.5"
                                    src="images/img_vector_indigo_400_2x2.svg"
                                    alt="vector_One"
                                  />
                                  <Img
                                    className="h-0.5 w-px"
                                    src="images/img_vector_indigo_400_2x1.svg"
                                    alt="vector_Two"
                                  />
                                  <Img
                                    className="h-0.5 w-px"
                                    src="images/img_vector_2x1.svg"
                                    alt="vector_Three"
                                  />
                                </div>
                              </div>
                            </div>
                            <Text
                              className="sm:ml-[0] ml-[7px] sm:mt-0 mt-2.5 text-[10px] text-white-A700"
                              size="txtPoppinsLight10"
                            >
                              aspergillus_niger(2023v.2).png
                            </Text>
                            <Text
                              className="sm:ml-[0] ml-[202px] text-center text-white-A700 text-xs"
                              size="txtPoppinsLight12WhiteA700"
                            >
                              Private
                            </Text>
                            <Text
                              className="mb-[7px] ml-3 sm:ml-[0] text-center text-white-A700 text-xs"
                              size="txtPoppinsLight12WhiteA700"
                            >
                              Public
                            </Text>
                          </div>
                          <div className="flex md:flex-1 flex-row gap-2 items-start justify-start mr-[282px] my-0 w-[39%] md:w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-end mb-[3px] p-0.5 w-[7%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group59.svg')",
                              }}
                            >
                              <div className="flex flex-col items-center justify-start mt-0.5 w-[72%] md:w-full">
                                <Img
                                  className="h-1 w-1"
                                  src="images/img_vector_indigo_400.svg"
                                  alt="vector"
                                />
                                <div className="flex flex-row items-center justify-evenly w-full">
                                  <Img
                                    className="h-0.5 w-0.5"
                                    src="images/img_vector_indigo_400_2x2.svg"
                                    alt="vector_One"
                                  />
                                  <Img
                                    className="h-0.5 w-px"
                                    src="images/img_vector_indigo_400_2x1.svg"
                                    alt="vector_Two"
                                  />
                                  <Img
                                    className="h-0.5 w-px"
                                    src="images/img_vector_2x1.svg"
                                    alt="vector_Three"
                                  />
                                </div>
                              </div>
                            </div>
                            <Text
                              className="mt-[3px] text-[10px] text-white-A700"
                              size="txtPoppinsLight10"
                            >
                              aspergillus_niger(2023v.2).mov4
                            </Text>
                          </div>
                        </List>
                      </div>
                      <div className="absolute h-[25px] right-[0] top-[0] w-[29%]">
                        <Text
                          className="absolute h-full inset-y-[0] my-auto right-[0] text-lg text-white-A700"
                          size="txtPoppinsExtraLight18"
                        >
                          Who can See?
                        </Text>
                        <Text
                          className="absolute bottom-[0] left-[0] text-center text-sm text-white-A700"
                          size="txtPoppinsExtraLight14"
                        >
                          15.
                        </Text>
                      </div>
                      <div className="absolute bottom-[0] flex h-5 justify-end right-[16%] w-5">
                        <Text
                          className="mb-0.5 mt-auto mx-auto text-[8px] text-center text-white-A700"
                          size="txtPoppinsLight8"
                        >
                          -
                        </Text>
                        <div className="absolute bg-white-A700_19 h-5 inset-[0] justify-center m-auto outline outline-[0.5px] outline-blue_gray-600 rounded-[3px] w-5"></div>
                      </div>
                      <div className="absolute bg-white-A700_19 bottom-[0] h-5 outline outline-[0.5px] outline-blue_gray-600 right-[9%] rounded-[3px] w-5"></div>
                      <Text
                        className="absolute bottom-[22%] right-[0] text-lg text-white-A700"
                        size="txtPoppinsExtraLight18"
                      >
                        Age Restricted
                      </Text>
                      <div className="absolute flex flex-row items-start justify-evenly left-[0] top-[8%] w-[13%]">
                        <Text
                          className="text-[8px] text-center text-white-A700"
                          size="txtPoppinsLight8"
                        >
                          Upload Docs
                        </Text>
                        <Img
                          className="h-1.5"
                          src="images/img_reply_blue_gray_600.svg"
                          alt="reply_Two"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-start md:mt-0 my-0.5 w-[31%] md:w-full">
                      <div className="flex flex-row gap-[19px] items-start justify-start w-[38%] md:w-full">
                        <Text
                          className="text-center text-red-A700 text-sm"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                        <Text
                          className="mt-1 text-center text-lg text-white-A700"
                          size="txtPoppinsExtraLight18"
                        >
                          Availability
                        </Text>
                        <Text
                          className="text-center text-red-A700 text-sm"
                          size="txtPoppinsExtraLight14RedA700"
                        >
                          *
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px] w-[91%] md:w-full">
                        <div className="flex flex-row gap-[19px] items-start justify-start ml-0.5 md:ml-[0] w-[24%] md:w-full">
                          <Text
                            className="text-center text-white-A700 text-xs"
                            size="txtPoppinsLight12WhiteA700"
                          >
                            Free
                          </Text>
                          <Text
                            className="text-center text-white-A700 text-xs"
                            size="txtPoppinsLight12WhiteA700"
                          >
                            Paid
                          </Text>
                        </div>
                        <div className="flex flex-row items-end justify-between mt-[3px] w-full">
                          <Text
                            className="mt-4 text-lg text-white-A700"
                            size="txtPoppinsExtraLight18"
                          >
                            $
                          </Text>
                          <div className="md:h-[25px] h-[39px] mb-1 relative w-[23%]">
                            <Text
                              className="absolute left-[0] text-sm text-white-A700 top-[0]"
                              size="txtPoppinsExtraLight14"
                            >
                              Price
                            </Text>
                            <div className="absolute bg-white-A700_19 bottom-[0] h-5 outline outline-[0.5px] outline-blue_gray-600 right-[0] rounded-[3px] w-[89%]"></div>
                          </div>
                          <Text
                            className="mb-0.5 mt-[23px] text-center text-white-A700 text-xs"
                            size="txtPoppinsLight12WhiteA700"
                          >
                            Yes
                          </Text>
                          <Text
                            className="mb-0.5 mt-[23px] text-center text-white-A700 text-xs"
                            size="txtPoppinsLight12WhiteA700"
                          >
                            Ask at a later date
                          </Text>
                          <Text
                            className="mb-0.5 mt-[23px] text-center text-white-A700 text-xs"
                            size="txtPoppinsLight12WhiteA700"
                          >
                            No
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="absolute bottom-[0] right-[40%] text-white-A700 text-xs"
                    size="txtPoppinsExtraLight12"
                  >
                    years old
                  </Text>
                  <Text
                    className="absolute leading-[16.00px] right-[0] text-base text-white-A700 top-[15%] w-1/4 sm:w-full"
                    size="txtPoppinsExtraLight16"
                  >
                    Would you like to allow Biological Information OS Inc. to
                    integrate your model in later platform features?
                  </Text>
                </div>
                <div className="absolute flex flex-col gap-[5px] h-max inset-[0] items-start justify-start m-auto max-w-[1061px] pl-[177px] pr-[49px] md:px-10 sm:px-5 w-full">
                  <div className="bg-blue_gray-800 h-5 rounded-[3px] w-[9%]"></div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[73%] md:w-full">
                    <div className="h-5 md:mt-0 mt-0.5 outline outline-[1px] outline-indigo-400 rounded-[3px] w-5"></div>
                    <div className="bg-blue_gray-800_3f h-3.5 mb-2 md:ml-[0] ml-[362px] rounded-[3px] w-[8%]"></div>
                    <div className="bg-blue_gray-800_3f h-3.5 mb-2 ml-1.5 md:ml-[0] rounded-[3px] w-[8%]"></div>
                    <div className="bg-blue_gray-800_3f h-3.5 mb-2 md:ml-[0] ml-[43px] rounded-[3px] w-[6%]"></div>
                    <div className="bg-blue_gray-800_3f h-3.5 mb-2 ml-2.5 md:ml-[0] rounded-[3px] w-[6%]"></div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-full">
                    <div className="h-5 mb-3 outline outline-[1px] outline-indigo-400 rounded-[3px] w-5"></div>
                    <div className="bg-blue_gray-800_3f h-3.5 md:ml-[0] ml-[614px] md:mt-0 mt-[18px] rounded-[3px] w-[5%]"></div>
                    <div className="bg-blue_gray-800_3f h-3.5 ml-2.5 md:ml-[0] md:mt-0 mt-[18px] rounded-[3px] w-[14%]"></div>
                    <div className="bg-blue_gray-800_3f h-3.5 ml-2.5 md:ml-[0] md:mt-0 mt-[18px] rounded-[3px] w-[5%]"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex md:flex-col flex-row gap-[-1px] inset-x-[0] items-center justify-between max-w-[1110px] mx-auto w-full">
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-0.5 items-center justify-between w-[404px] sm:w-full">
                  <Button className="bg-gradient  border border-blue_gray-600 border-solid cursor-pointer min-w-[190px] py-[7px] rounded-tl rounded-tr text-center text-lg text-white-A700">
                    3D File Information
                  </Button>
                  <Button
                    className="common-pointer bg-white-A700_0c border border-blue_gray-600 border-solid cursor-pointer min-w-[212px] py-[7px] rounded-tl rounded-tr text-center text-lg text-white-A700"
                    onClick={() => navigate("/uploadform")}
                  >
                    Scientific Information
                  </Button>
                </div>
                <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start w-[61%] md:w-full">
                  <Img
                    className="h-14 w-14"
                    src="images/img_plus.svg"
                    alt="plus_Ten"
                  />
                  <Text
                    className="md:ml-[0] ml-[417px] text-center text-sm text-white-A700"
                    size="txtPoppinsLight14"
                  >
                    1/15 Filled-in
                  </Text>
                  <div className="md:h-[42px] h-[46px] md:ml-[0] ml-[17px] relative w-[100px]">
                    <div className="absolute bg-amber-A400 border border-blue_gray-600 border-solid h-[42px] inset-x-[0] mx-auto rounded-tl-[5px] rounded-tr-[5px] top-[0] w-full"></div>
                    <Text
                      className="absolute bottom-[-1%] inset-x-[0] mx-auto text-blue_gray-900_01 text-center text-xl w-max"
                      size="txtPoppinsExtraLight20"
                    >
                      Publish
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadFormOnePage;
