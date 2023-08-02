import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import MyProfilePageModelcard from "components/MyProfilePageModelcard";
import MyProfilePageRowmodelfile from "components/MyProfilePageRowmodelfile";

const MyProfilePagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-yellow-100 flex flex-col font-poppins items-center justify-end mx-auto pt-[13px] w-full">
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start max-w-[1392px] mx-auto md:px-5 w-full">
            <header className="bg-gray-900 flex flex-col items-center justify-center rounded-[19px] w-full">
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 h-[55px] md:h-auto items-end justify-between max-w-[1290px] mt-[23px] mx-auto w-full">
                <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 h-[45px] md:h-auto items-center justify-between max-w-[804px] pt-[13.2px] w-full">
                  <Img
                    className="sm:flex-1 h-[38px] md:h-auto object-cover w-[150px] sm:w-full"
                    src="images/img_bioslinewhite.png"
                    alt="bioslinewhite"
                  />
                  <div className="flex flex-row gap-10 h-[30px] md:h-auto items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-indigo-400 w-auto"
                        size="txtPoppinsMedium16Indigo400"
                      >
                        Home page
                      </Text>
                    </div>
                    <Button
                      className="common-pointer bg-transparent cursor-pointer font-medium min-w-[69px] py-[3px] text-base text-center text-indigo-400"
                      onClick={() => navigate("/platformloggedin")}
                    >
                      Platform
                    </Button>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-base text-indigo-400 w-auto"
                        size="txtPoppinsMedium16Indigo400"
                      >
                        About Us
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="text-base text-center text-white-A700"
                  size="txtPoppinsLight16"
                >
                  bio_boy
                </Text>
                <Img
                  className="h-[55px] md:h-auto rounded-[50%] w-[55px]"
                  src="images/img_rectangle4007.png"
                  alt="rectangle4007"
                />
              </div>
              <Line className="bg-white-A700 h-px md:ml-[0] ml-[1197px] mr-[131px] mt-0.5 w-[5%]" />
              <a className="md:ml-[0] ml-[1290px] mr-[54px] text-indigo-400 text-sm">
                <Text
                  className="common-pointer"
                  size="txtPoppinsRegular14Indigo400"
                  onClick={() => navigate("/")}
                >
                  Logout
                </Text>
              </a>
            </header>
            <div className="flex md:flex-col flex-row md:gap-[54px] items-start justify-between mt-[26px] w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[47%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
                  size="txtPoppinsRegular30"
                >
                  My Account
                </Text>
                <div className="flex md:flex-col flex-row gap-[7px] items-start justify-between mt-1.5 w-full">
                  <Img
                    className="h-[69px] md:h-auto md:mt-0 mt-1 rounded-[50%] w-[69px]"
                    src="images/img_rectangle4007_69x69.png"
                    alt="rectangle4007_One"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start">
                    <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                      <div className="md:h-[30px] h-[52px] relative w-[21%]">
                        <Text
                          className="absolute left-[0] text-[22px] text-blue_gray-900 sm:text-lg md:text-xl top-[0]"
                          size="txtPoppinsMedium22"
                        >
                          bio_boy
                        </Text>
                        <Text
                          className="absolute bottom-[0] inset-x-[0] mx-auto text-base text-blue_gray-900 w-max"
                          size="txtPoppinsRegular16Bluegray900"
                        >
                          Thomas Haley
                        </Text>
                      </div>
                      <Img
                        className="h-5 mt-6 w-5"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start w-3/5 md:w-full">
                      <div className="h-[18px] px-[3px] relative w-[37px]">
                        <div className="absolute bg-amber-A400 bottom-[1%] h-[17px] inset-x-[0] mx-auto rounded-[3px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] m-auto text-blue_gray-900 text-center text-xs w-max"
                          size="txtPoppinsLight12"
                        >
                          Seller
                        </Text>
                      </div>
                      <div className="h-[18px] ml-[5px] px-[3px] relative w-[49px]">
                        <div className="absolute bg-amber-A400 bottom-[0] h-[17px] inset-x-[0] mx-auto rounded-[3px] w-full"></div>
                        <Text
                          className="absolute h-full inset-[0] m-auto text-blue_gray-900 text-center text-xs w-max"
                          size="txtPoppinsLight12"
                        >
                          Affiliate
                        </Text>
                      </div>
                      <Text
                        className="ml-[58px] mt-0.5 text-blue_gray-900 text-xs underline"
                        size="txtPoppinsRegular12Bluegray900"
                      >
                        Field of Study
                      </Text>
                      <Text
                        className="ml-[5px] text-base text-blue_gray-900"
                        size="txtPoppinsRegular16Bluegray900"
                      >
                        Microbiology
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="leading-[24.00px] mt-0.5 text-base text-blue_gray-900 w-full"
                  size="txtPoppinsRegular16Bluegray900"
                >
                  We will investigate biological concepts including the chemical
                  basis of life, cell structure and function, metabolism,
                  reproduction, genetics, evolution, biological diversity and
                  classification, plant structure and function, animal structure
                  and function and ecology from the perspective of microbiology.
                </Text>
                <div className="flex flex-row items-center justify-between mt-[30px] w-[51%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtPoppinsLight16Bluegray900"
                  >
                    Views
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtPoppinsLight16Bluegray900"
                  >
                    Comments
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[15px] w-[49%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtPoppinsLight16Bluegray900"
                  >
                    Downloads
                  </Text>
                  <Text
                    className="text-base text-blue_gray-900"
                    size="txtPoppinsLight16Bluegray900"
                  >
                    Published
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-inter gap-[15px] items-center justify-center mt-10 w-[545px] sm:w-full">
                  <div className="flex flex-row gap-0.5 h-[26px] md:h-auto items-center justify-start w-[210px]">
                    <Img
                      className="h-[26px] w-[26px]"
                      src="images/img_1215848chainl.svg"
                      alt="1215848chainl"
                    />
                    <Text
                      className="text-blue_gray-900 text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      hhmi.com/brunabittencourt
                    </Text>
                  </div>
                  <Img
                    className="h-[27px] w-[26px]"
                    src="images/img_githubmark1.svg"
                    alt="githubmarkOne"
                  />
                  <Img
                    className="h-[26px] w-[27px]"
                    src="images/img_mail.svg"
                    alt="mail"
                  />
                  <Img
                    className="h-[27px] w-[27px]"
                    src="images/img_volume_gray_900.svg"
                    alt="volume"
                  />
                  <Img
                    className="h-[26px] w-8"
                    src="images/img_logoblue1.svg"
                    alt="logoblueOne"
                  />
                  <Img
                    className="h-7 w-[27px]"
                    src="images/img_logoblack1.svg"
                    alt="logoblackOne"
                  />
                  <Img
                    className="h-[29px] md:h-auto object-cover w-[29px]"
                    src="images/img_1298747instagr.png"
                    alt="1298747instagr"
                  />
                  <Img
                    className="h-[27px] w-[27px]"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                </div>
              </div>
              <div className="h-[471px] md:mt-0 mt-[23px] relative w-1/2 md:w-full">
                <Text
                  className="mb-[-4.73px] mx-auto text-2xl md:text-[22px] text-center text-indigo-400 sm:text-xl z-[1]"
                  size="txtPoppinsRegular24"
                >
                  Showcase
                </Text>
                <div className="bg-gray-900 flex flex-col items-center justify-start mt-auto mx-auto p-4 rounded-[19px] w-full">
                  <div className="bg-white-A700_0c border border-blue_gray-600 border-solid flex flex-col gap-[11px] items-center justify-end p-[148px] md:px-10 sm:px-5 rounded-[13px] w-full">
                    <div className="flex flex-col items-center justify-start mt-[26px] w-[77%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Button className="border border-indigo-400 border-solid cursor-pointer font-medium min-w-[273px] py-4 rounded-lg text-base text-center text-white-A700">
                          Link to, Upload or Select Media
                        </Button>
                      </div>
                    </div>
                    <Text
                      className="text-[10px] text-white-A700"
                      size="txtPoppinsLight10"
                    >
                      Upload JoVE, Video, Images, or input embed
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col items-center justify-start mt-[22px] p-2 rounded-[10px] w-full">
              <div className="flex flex-col items-center justify-start mb-[257px] mt-2 w-full">
                <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-1 sm:flex-col flex-row gap-2.5 items-start justify-start max-w-[659px] w-full">
                      <List
                        className="sm:flex-1 sm:flex-col flex-row gap-2.5 grid grid-cols-2 w-[44%] sm:w-full"
                        orientation="horizontal"
                      >
                        <MyProfilePageRowmodelfile className="flex flex-row items-center justify-start p-1 rounded w-full" />
                        <MyProfilePageRowmodelfile
                          className="flex flex-row gap-3.5 items-center justify-end p-0.5 rounded w-full"
                          collectiontext="Uploads"
                          twelvetext="3"
                        />
                      </List>
                      <Button className="cursor-pointer min-w-[139px] py-[5px] rounded text-center text-white-A700 text-xl">
                        {" "}
                        Liked
                      </Button>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[11%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Button
                          className="common-pointer bg-amber-A400 border border-indigo-400 border-solid cursor-pointer font-medium min-w-[144px] py-2.5 rounded-lg text-base text-blue_gray-900_01 text-center"
                          onClick={() => navigate("/uploadformone")}
                        >
                          Upload Model
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="gap-4 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                    {new Array(8).fill({}).map((props, index) => (
                      <React.Fragment key={`MyProfilePageModelcard${index}`}>
                        <MyProfilePageModelcard
                          className="flex flex-1 flex-col items-center justify-start pb-0.5 rounded-sm w-full"
                          {...props}
                        />
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center md:px-5 w-full">
            <div className="bg-blue_gray-900 flex flex-col md:gap-10 gap-[84px] h-[332px] md:h-auto items-start justify-end max-w-[1440px] pb-10 md:px-10 sm:px-5 px-[178px] w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 h-[148px] md:h-auto items-start justify-between max-w-[1084px] w-full">
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
                <div className="flex flex-row gap-5 h-[148px] md:h-auto items-start justify-start w-[348px]">
                  <div className="flex flex-col gap-4 h-[132px] md:h-auto items-center justify-start w-[164px]">
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
                  <div className="flex flex-col gap-3 h-[148px] md:h-auto items-center justify-start w-[164px]">
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
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 h-5 md:h-auto items-center justify-between max-w-[1084px] w-full">
                <Text
                  className="text-white-A700 text-xs w-auto"
                  size="txtPoppinsRegular12"
                >
                  © 2021 Biological Information OS Inc. All Rights Reserved
                </Text>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
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

export default MyProfilePagePage;
