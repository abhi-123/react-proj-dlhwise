import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";
import AboutUsColumnOne from "components/AboutUsColumnOne";

const AboutUsPage = () => {
  const navigate = useNavigate();

  const aboutUsColumnOnePropList = [
    {},
    { userimage: "images/img_rectangle4118_465x349.png" },
    {},
    {},
    {},
    {},
  ];

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-end mx-auto pt-9 w-full">
        <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-5 w-full">
          <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-end justify-between max-w-[688px] w-full">
            <Img
              className="sm:flex-1 h-11 md:h-auto object-cover w-[150px] sm:w-full"
              src="images/img_bioslinewhite.png"
              alt="bioslinewhite"
            />
            <div className="flex flex-row gap-10 items-start justify-between w-auto">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-base text-indigo-400 w-auto"
                  size="txtPoppinsMedium16Indigo400"
                >
                  Home page
                </Text>
                <Line className="bg-gray-900 h-px w-full" />
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer font-medium min-w-[69px] py-1.5 text-base text-center text-indigo-400"
                onClick={() => navigate("/")}
              >
                Platform
              </Button>
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16"
                >
                  About Us
                </Text>
                <Line className="bg-white-A700 h-px w-full" />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center justify-between w-56">
            <div className="flex flex-col items-center justify-start w-[45%]">
              <Button className="border border-indigo-400 border-solid cursor-pointer font-medium min-w-[100px] py-2.5 rounded-lg text-base text-center text-indigo-100">
                Log In
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-[45%]">
              <Button className="bg-blue-A200 cursor-pointer font-medium min-w-[100px] py-2.5 rounded-lg text-base text-center text-white-A700">
                Sign Up
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start max-w-[900px] mt-14 mx-auto pt-2 px-2 md:px-5 w-full">
          <Text
            className="md:text-5xl text-7xl text-center text-white-A700"
            size="txtPoppinsSemiBold72"
          >
            Our Philosophy
          </Text>
        </div>
        <div className="flex flex-col justify-end mt-[45px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[90px] items-start justify-start mr-[362px] md:px-5 w-3/4 md:w-full">
            <Img
              className="h-[619px] md:h-auto md:mt-0 mt-[101px] object-cover"
              src="images/img_group1190.png"
              alt="group1190"
            />
            <List
              className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-center justify-start w-[348px]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col gap-4 items-center justify-start px-4 w-auto">
                    <Img
                      className="h-[100px] md:h-auto object-cover w-[100px]"
                      src="images/img_openlock1.png"
                      alt="openlockOne"
                    />
                    <Text
                      className="leading-[32.00px] max-w-[100px] md:max-w-full text-center text-white-A700 text-xl"
                      size="txtPoppinsMedium20"
                    >
                      Accessibility
                    </Text>
                    <Text
                      className="leading-[20.00px] max-w-[100px] md:max-w-full text-center text-white-A700 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      Accessibility is a founding philosophy of BIOS. Based on
                      the accute realization that we learn the same information
                      to become educated & skilled enough to participate,
                      explore and gain experienced in a field; it becomes
                      apparent that accessibility to information for all levels
                      is key to advancement. We strive to be a single access
                      point & reference resource for students, the public, and
                      scientists.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[348px]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-col gap-4 items-center justify-start px-4 w-auto">
                    <Img
                      className="h-[100px] md:h-auto object-cover w-[100px]"
                      src="images/img_icon24frames.png"
                      alt="icon24frames"
                    />
                    <Text
                      className="leading-[32.00px] max-w-[100px] md:max-w-full text-center text-white-A700 text-xl"
                      size="txtPoppinsMedium20"
                    >
                      Transparency
                    </Text>
                    <Text
                      className="leading-[20.00px] max-w-[100px] md:max-w-full text-center text-white-A700 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      Being open about our sources and ownership and rights of
                      research is integral to the process of creating this
                      knowledge-base and was part of the inspiration behind
                      BIOS. We believe that if we make this information
                      accessible, we should ensure credit and responsibility is
                      given to those who did the work and published the
                      discoveries, therefore this acknowledgement system is
                      built directly into our app with the use of OrciDs.
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Text
            className="leading-[32.00px] md:ml-[0] ml-[378px] mr-[362px] mt-[55px] text-base text-center text-white-A700 w-[49%] sm:w-full"
            size="txtPoppinsMedium16"
          >
            At BIOS, our mission is to bring biology into the digital age to
            create a virtual world where everyone has access to any information
            in the natural sciences.{" "}
          </Text>
          <div className="flex flex-col gap-5 items-center justify-center max-w-[878px] mt-[145px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-[34px] md:text-[40px] text-[44px] text-white-A700 w-auto"
              size="txtPoppinsSemiBold44"
            >
              The BIOS Team
            </Text>
            <Text
              className="leading-[32.00px] max-w-[878px] md:max-w-full text-base text-center text-white-A700"
              size="txtPoppinsMedium16"
            >
              The BIOS team, though small has expertise in big data, several
              fields of biology, and software development. The BIOS team
              understands the current problems the field has and is actively
              working to develop solutions.
            </Text>
          </div>
          <div className="font-inter gap-20 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center max-w-[1207px] min-h-[auto] mt-[75px] mx-auto md:px-5 w-full">
            {aboutUsColumnOnePropList.map((props, index) => (
              <React.Fragment key={`AboutUsColumnOne${index}`}>
                <AboutUsColumnOne
                  className="flex flex-1 flex-col items-center justify-start w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="font-poppins h-[1276px] md:h-[1351px] mt-20 md:px-5 relative w-full">
            <footer className="absolute bottom-[7%] flex inset-x-[0] items-center justify-center mx-auto w-full">
              <div className="bg-blue_gray-900 flex flex-col md:gap-10 gap-[84px] items-start justify-end pb-10 md:px-10 sm:px-5 px-[178px] w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex flex-1 flex-col gap-8 h-[98px] md:h-auto items-start justify-end w-full">
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
                      <Img
                        className="h-8 w-8"
                        src="images/img_icon24facebook.svg"
                        alt="icon24facebook"
                      />
                    </div>
                  </div>
                  <div className="md:h-[142px] h-[148px] relative w-full">
                    <div className="absolute flex flex-col gap-4 h-[132px] md:h-auto items-center justify-start left-[0] top-[0] w-[164px]">
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
                    <div className="absolute flex flex-1 flex-col gap-3 md:h-auto h-full inset-y-[0] items-center justify-start my-auto right-[0] w-full">
                      <div className="flex flex-col gap-2 h-[88px] md:h-auto items-center justify-start w-full">
                        <Text
                          className="text-base text-white-A700 w-auto"
                          size="txtPoppinsMedium16"
                        >
                          Address
                        </Text>
                        <div className="flex flex-col gap-2 h-12 md:h-auto items-center justify-start w-full">
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
                      <div className="flex flex-col gap-2 h-12 md:h-auto items-center justify-start w-full">
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
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-white-A700 text-xs w-auto"
                    size="txtPoppinsRegular12"
                  >
                    © 2021 Biological Information OS Inc. All Rights Reserved
                  </Text>
                  <ul className="flex md:flex-1 flex-col md:gap-6 items-start justify-between w-auto md:w-full common-column-list">
                    <li>
                      <a href="javascript:" className="text-white-A700 text-xs">
                        <Text size="txtPoppinsRegular12">
                          Terms and Conditions
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-white-A700 text-xs">
                        <Text size="txtPoppinsRegular12">
                          Privacy Statement
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:" className="text-white-A700 text-xs">
                        <Text size="txtPoppinsRegular12">
                          Contact us at inquiry
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
            <AboutUsColumnOne className="absolute flex flex-col font-inter h-full inset-[0] items-center justify-center m-auto w-1/4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
