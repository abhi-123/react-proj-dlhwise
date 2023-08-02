import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const PlarformPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-start mx-auto py-9 w-full">
        <header className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:px-5 w-full">
          <Img
            className="sm:flex-1 h-11 md:h-auto object-cover w-[150px] sm:w-full"
            src="images/img_frame.png"
            alt="frame"
          />
          <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-end justify-between max-w-[713px] w-full">
            <div className="flex flex-row gap-10 items-start justify-between w-auto">
              <div className="flex flex-col gap-1 items-start justify-start w-auto">
                <Text
                  className="text-base text-white-A700 w-auto"
                  size="txtPoppinsMedium16"
                >
                  Home page
                </Text>
                <Line className="bg-white-A700 h-px w-full" />
              </div>
              <Button className="bg-transparent cursor-pointer font-medium min-w-[69px] py-1.5 text-base text-center text-indigo-400">
                Platform
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer font-medium min-w-[73px] py-1.5 text-base text-center text-indigo-400"
                onClick={() => navigate("/aboutus")}
              >
                About Us
              </Button>
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
          </div>
        </header>
        <div className="h-[762px] md:h-[789px] sm:h-[811px] max-w-[1124px] mt-[50px] mx-auto md:px-5 relative w-full">
          <Text
            className="leading-[32.00px] my-auto text-base text-white-A700"
            size="txtPoppinsMedium16"
          >
            <>
              BIOS was created to connect our scientific & non-scientific
              communities, to provide an accessible & visual resource for
              scientific education, communication, & discovery. <br />
              <br />
              Share your 3D models & provide a more inclusive way discuss
              scientific breakthroughs and new understandings.
            </>
          </Text>
          <div className="absolute md:h-[739px] sm:h-[761px] h-[762px] inset-[0] justify-center m-auto w-full">
            <div className="md:h-[739px] sm:h-[761px] h-[762px] m-auto w-full">
              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[84%]">
                <div className="flex flex-col md:gap-10 gap-[62px] justify-start w-full">
                  <Img
                    className="h-[596px] sm:h-auto md:ml-[0] ml-[370px] object-cover w-[61%] md:w-full"
                    src="images/img_image13.png"
                    alt="imageThirteen"
                  />
                  <Text
                    className="mr-[184px] md:text-5xl text-7xl text-center text-white-A700"
                    size="txtPoppinsSemiBold72"
                  >
                    Publish For Everyone
                  </Text>
                </div>
              </div>
              <Text
                className="absolute leading-[112.00px] left-[0] md:text-5xl text-7xl text-gray-100 top-[3%] w-[62%] sm:w-full"
                size="txtPoppinsSemiBold72Gray100"
              >
                A Platform for 3D Life Sciences
              </Text>
              <Img
                className="absolute bottom-[12%] h-[194px] left-[2%] object-cover w-[19%]"
                src="images/img_rotatingearth.png"
                alt="rotatingearth"
              />
            </div>
            <Text
              className="common-pointer absolute bottom-[28%] left-[14%] md:text-2xl sm:text-[22px] text-[26px] text-white-A700 underline"
              size="txtPoppinsLight26"
              onClick={() => navigate("/modelshowpage")}
            >
              Take a Look!
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-[38px] items-start justify-between max-w-[1215px] mt-5 mx-auto md:px-5 w-full">
          <Img
            className="md:flex-1 h-[285px] sm:h-auto object-cover w-[545px] md:w-full"
            src="images/img_image12.png"
            alt="imageTwelve"
          />
          <Text
            className="leading-[28.00px] text-base text-white-A700"
            size="txtPoppinsMedium16"
          >
            <span className="text-white-A700 font-poppins text-left font-medium">
              This is a
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              {" "}
              platform for passionate & skilled science 3D modelers, animators,
              & communicators to host their data-based 3D models & animations to{" "}
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              improve
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              <>
                {" "}
                & provide a new dimension for science communication.
                <br />
                <br />
              </>
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              We{" "}
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              support our
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              {" "}
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              <>
                science community by providing a new platform to publish
                findings & data-based 3D models to articulate better.
                <br />
              </>
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              <>
                <br />
                BIOS{" "}
              </>
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              aims to{" "}
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              facilitate more conversation
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              s
            </span>
            <span className="text-white-A700 font-poppins text-left font-medium">
              {" "}
              and catalyze new ideas in students, researchers, & scientists.
            </span>
          </Text>
        </div>
        <div className="flex flex-col items-end mt-[79px] md:px-10 px-14 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[222px] items-start justify-start w-[91%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
              <div className="flex md:flex-1 flex-col justify-start mb-[71px] md:mt-0 mt-[21px] pb-0.5 pr-0.5 w-2/5 md:w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-between w-[400px] sm:w-full">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                    size="txtPoppinsExtraLight36"
                  >
                    Step 1:
                  </Text>
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                    size="txtPoppinsSemiBold36"
                  >
                    Profile Creation
                  </Text>
                </div>
                <Text
                  className="mr-[3px] mt-4 text-base text-white-A700"
                  size="txtPoppinsMedium16"
                >
                  Click ‘Sign Up’ in the top right of the site to create a
                  profile:
                </Text>
                <Text
                  className="ml-2 md:ml-[0] mt-[19px] text-base text-white-A700"
                  size="txtPoppinsMedium16"
                >
                  Upload a profile pic
                </Text>
                <Text
                  className="ml-2 md:ml-[0] mt-7 text-base text-white-A700"
                  size="txtPoppinsMedium16"
                >
                  Input your information
                </Text>
                <Text
                  className="ml-2 md:ml-[0] mt-7 text-base text-white-A700"
                  size="txtPoppinsMedium16"
                >
                  Add your handle or URL to other media platforms!{" "}
                </Text>
              </div>
              <div className="bg-gray-900_4c border border-blue_gray-600 border-solid flex md:flex-1 flex-col items-center justify-start mb-[68px] pt-2 px-2 rounded-[26px] w-[26%] md:w-full">
                <Img
                  className="h-[244px] md:h-auto object-cover rounded-[18px] w-full"
                  src="images/img_image14.png"
                  alt="imageFourteen"
                />
              </div>
              <div className="h-[200px] md:mt-0 mt-[122px] relative w-[27%] md:w-full">
                <Img
                  className="absolute h-[116px] right-[0] top-[5%]"
                  src="images/img_2726652arrowc.svg"
                  alt="2726652arrowc"
                />
                <div className="absolute flex flex-col gap-[29px] h-full inset-y-[0] justify-start left-[0] my-auto w-[79%]">
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700"
                    size="txtPoppinsSemiBold36"
                  >
                    Sign Up Here!
                  </Text>
                  <div className="h-[121px] md:ml-[0] ml-[47px] relative w-[74%]">
                    <div className="absolute bg-indigo-A400 border border-solid border-white-A700 flex flex-col inset-x-[0] items-center justify-end mx-auto p-[9px] rounded-[12px] top-[0]">
                      <a
                        href="javascript:"
                        className="text-base text-center text-white-A700"
                      >
                        <Text size="txtPoppinsMedium16">Create an Account</Text>
                      </a>
                    </div>
                    <Img
                      className="absolute h-[121px] inset-[0] justify-center m-auto"
                      src="images/img_1863638cartoon.svg"
                      alt="1863638cartoon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:h-[430px] h-[819px] md:h-[828px] relative w-[92%] md:w-full">
              <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto pb-[13px] top-[0] w-[98%]">
                <div className="flex flex-col items-start justify-start w-1/2 md:w-full">
                  <div className="flex sm:flex-col flex-row gap-3 items-start justify-between w-[417px] sm:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                      size="txtPoppinsExtraLight36"
                    >
                      Step 2:
                    </Text>
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-auto"
                      size="txtPoppinsSemiBold36"
                    >
                      Upload Content
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[-206px] items-center justify-between mt-2.5 w-[433px] sm:w-full">
                    <Text
                      className="text-base text-white-A700 w-auto"
                      size="txtPoppinsMedium16"
                    >
                      On your profile page, select .
                    </Text>
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Button
                          className="common-pointer bg-amber-A400 border border-indigo-400 border-solid cursor-pointer font-medium min-w-[100px] py-1.5 rounded-lg text-blue_gray-900_01 text-center text-xs"
                          onClick={() => navigate("/uploadformone")}
                        >
                          Upload Model
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="ml-2 md:ml-[0] mt-6 text-base text-white-A700"
                    size="txtPoppinsMedium16"
                  >
                    Fill out the form (saves automatically).
                  </Text>
                  <div className="h-[38px] md:h-[58px] mt-5 relative w-[390px] sm:w-full">
                    <Text
                      className="absolute bottom-[13%] inset-x-[0] mx-auto text-base text-white-A700 w-max"
                      size="txtPoppinsMedium16"
                    >
                      Click to make your upload public.
                    </Text>
                    <Button className="absolute bg-amber-A400 border border-blue_gray-600 border-solid cursor-pointer font-light h-full inset-y-[0] my-auto py-[7px] right-[0] rounded-tl-[5px] rounded-tr-[5px] text-blue_gray-900_01 text-center text-lg w-[85px]">
                      Publish
                    </Button>
                  </div>
                  <Text
                    className="leading-[32.00px] mt-[17px] text-base text-white-A700 w-[96%] sm:w-full"
                    size="txtPoppinsMedium16"
                  >
                    More data & info provided results in a higher model quality
                    rating and increased likeliness of use & interactions.
                  </Text>
                  <Text
                    className="leading-[16.00px] mt-[49px] text-base text-white-A700"
                    size="txtPoppinsMedium16"
                  >
                    <span className="text-white-A700 font-poppins text-left text-[10px] font-bold">
                      Caution
                    </span>
                    <span className="text-white-A700 font-poppins text-left text-[10px] font-medium">
                      :{" "}
                    </span>
                    <span className="text-white-A700 font-poppins text-left text-[10px] font-normal">
                      <>
                        The larger the file, the longer the upload & the higher
                        the likelihood of having to re-upload.
                        <br />
                      </>
                    </span>
                    <span className="text-white-A700 font-poppins text-left text-[10px] font-normal">
                      Size doesn’t matter, accurate models do! Feel free to
                      upload those massive models!{" "}
                    </span>
                    <span className="text-white-A700 font-poppins text-left text-[10px] font-normal">
                      <>
                        <br />
                        We do our best to make this a non-issue.
                      </>
                    </span>
                  </Text>
                </div>
                <div className="h-[409px] relative w-[475px] sm:w-full">
                  <div className="absolute flex flex-col items-center justify-end left-[0] top-[0] w-[325px]">
                    <Img
                      className="h-[392px] md:h-auto object-cover w-full"
                      src="images/img_uploadform1.png"
                      alt="uploadformOne"
                    />
                  </div>
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[69%]">
                    <Img
                      className="h-[409px] md:h-auto object-cover w-full"
                      src="images/img_uploadform11.png"
                      alt="uploadformEleven"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 items-start justify-between left-[0] w-[87%]">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-between w-[491px] sm:w-full">
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 w-auto"
                      size="txtPoppinsExtraLight36"
                    >
                      Step 3:
                    </Text>
                    <Text
                      className="text-4xl sm:text-[32px] md:text-[34px] text-center text-white-A700 w-auto"
                      size="txtPoppinsSemiBold36"
                    >
                      Share your content!
                    </Text>
                  </div>
                  <Text
                    className="leading-[32.00px] mt-2.5 text-base text-white-A700 w-full"
                    size="txtPoppinsMedium16"
                  >
                    After email confirmation your model/animation will be
                    available for everyone.
                  </Text>
                  <Text
                    className="leading-[32.00px] mt-5 text-base text-white-A700 w-full"
                    size="txtPoppinsMedium16"
                  >
                    You may update your information on the model at any time &
                    make changes.
                  </Text>
                  <Text
                    className="leading-[32.00px] mt-5 text-base text-white-A700 w-full"
                    size="txtPoppinsMedium16"
                  >
                    Share your content everywhere by linking! Tweet, Instagram,
                    Thread, video, post on substack, & cite it in publications!{" "}
                  </Text>
                  <Text
                    className="mt-[21px] text-base text-white-A700"
                    size="txtPoppinsMedium16"
                  >
                    <span className="text-white-A700 font-poppins text-left text-[10px] font-medium">
                      If you have any questions, please reach out to{" "}
                    </span>
                    <a
                      href="javascript:"
                      className="text-white-A700 font-poppins text-left text-[10px] font-medium underline"
                    >
                      here
                    </a>
                    <span className="text-white-A700 font-poppins text-left text-[10px] font-medium">
                      .
                    </span>
                  </Text>
                </div>
                <Img
                  className="h-[425px] md:h-auto md:mt-0 mt-[5px] object-cover"
                  src="images/img_image14_425x351.png"
                  alt="imageFourteen_One"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1107px] mt-[49px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-end pt-[84px] w-2/5 md:w-full">
            <div className="sm:h-96 md:h-[260px] h-[292px] relative w-full">
              <div className="absolute bg-gray-900_4c border border-blue_gray-600 border-solid bottom-[0] h-[260px] left-[0] rounded-[12px] w-[93%]"></div>
              <div className="absolute sm:h-96 md:h-[258px] h-[260px] right-[0] top-[0] w-[93%] sm:w-full">
                <div className="h-[258px] m-auto w-full">
                  <div className="bg-blue_gray-900 h-[258px] m-auto outline outline-[0.5px] outline-blue_gray-600 rounded-[19px] w-full"></div>
                  <div className="absolute flex flex-col gap-[11px] items-start justify-start left-[3%] top-[7%] w-[61%]">
                    <Img
                      className="h-[15px]"
                      src="images/img_vector.svg"
                      alt="vector_One"
                    />
                    <Img
                      className="h-[11px]"
                      src="images/img_vector_blue_gray_200.svg"
                      alt="vector_Two"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col gap-[9px] inset-x-[0] items-center justify-start mx-auto top-[3%] w-[95%]">
                  <div className="flex flex-row gap-3.5 items-center justify-between w-full">
                    <Line className="bg-gray-100_01 h-px mb-[27px] mt-[21px] w-[65%]" />
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[49px] items-center justify-start p-4"
                      style={{
                        backgroundImage: "url('images/img_group8.svg')",
                      }}
                    >
                      <Img
                        className="h-3.5"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[13px] items-center justify-between w-full">
                    <Img
                      className="h-[166px] md:h-auto object-cover"
                      src="images/img_vector_166x107.png"
                      alt="vector_Four"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Img
                        className="h-5"
                        src="images/img_vector_white_a700.svg"
                        alt="vector_Five"
                      />
                      <Img
                        className="h-3 mt-[7px]"
                        src="images/img_signal_blue_gray_200.svg"
                        alt="signal_One"
                      />
                      <Img
                        className="h-3 mt-[7px]"
                        src="images/img_vector_blue_gray_200_12x156.svg"
                        alt="vector_Six"
                      />
                      <div className="flex flex-row gap-[7px] items-start justify-start mt-[17px] w-2/5 md:w-full">
                        <Img
                          className="h-[11px]"
                          src="images/img_signal_blue_gray_200_11x91.svg"
                          alt="signal_Two"
                        />
                        <Img
                          className="h-2.5"
                          src="images/img_question.svg"
                          alt="question"
                        />
                      </div>
                      <div className="flex flex-row gap-[11px] items-end justify-start mt-3 w-[42%] md:w-full">
                        <Img
                          className="h-3.5 mb-0.5 mt-[5px]"
                          src="images/img_signal_blue_gray_200_14x77.svg"
                          alt="signal_Three"
                        />
                        <Img
                          className="h-[23px] md:h-auto object-cover w-[23px]"
                          src="images/img_vector_23x23.png"
                          alt="vector_Seven"
                        />
                      </div>
                      <div className="flex flex-row gap-2 items-start justify-between mt-[11px] w-full">
                        <Img
                          className="h-[15px]"
                          src="images/img_signal_blue_gray_200_15x92.svg"
                          alt="signal_Four"
                        />
                        <Img
                          className="h-[11px]"
                          src="images/img_vector_gray_100_01.svg"
                          alt="vector_Eight"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col gap-5 items-start justify-start w-[555px] sm:w-full">
            <Text
              className="leading-[76.00px] max-w-[555px] md:max-w-full sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
              size="txtPoppinsSemiBold44"
            >
              The Science Community is Fundamental to BIOS
            </Text>
            <Text
              className="leading-[32.00px] max-w-[555px] md:max-w-full text-base text-white-A700"
              size="txtPoppinsMedium16"
            >
              BIOS strives to give scientists more recognition & increase their
              social presence. To do this a citation field in the UI will change
              based on what is selected by the user, it will display data on the
              concept’s publication(s), authors w/pictures, discovery date &
              pub. date, organizations involved, & funding. This provides a
              degree of transparency & recognition in the scientific community
              that hasn’t existed.
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-[15px] items-center justify-start max-w-[1105px] mt-[50px] mx-auto md:px-5 w-full">
          <Text
            className="leading-[112.00px] max-w-[1105px] md:max-w-full md:text-5xl text-7xl text-center text-white-A700"
            size="txtPoppinsSemiBold72"
          >
            Striving to Increase Education and Ideation
          </Text>
          <Text
            className="leading-[32.00px] max-w-[764px] md:max-w-full text-base text-center text-white-A700"
            size="txtPoppinsMedium16"
          >
            By increasing the surface area to volume ratio of research & other
            scientific information to expand participation and higher level
            discourse will drive innovation & accelerate science.
          </Text>
        </div>
        <Text
          className="leading-[32.00px] mt-[50px] text-base text-center text-white-A700 w-[72%] sm:w-full"
          size="txtPoppinsMedium16"
        >
          BIOS strives to set a new standard not only for the field of biology
          and life science education, but science communication & digital
          education.
        </Text>
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[940px] mt-[55px] mx-auto md:px-5 w-full">
          <Img
            className="sm:flex-1 h-[425px] md:h-auto object-cover w-[425px] sm:w-full"
            src="images/img_image15.png"
            alt="imageFifteen"
          />
          <div className="flex sm:flex-1 flex-col items-center justify-end w-[440px] sm:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="leading-[76.00px] max-w-[440px] md:max-w-full sm:text-[34px] md:text-[40px] text-[44px] text-white-A700"
                size="txtPoppinsSemiBold44"
              >
                Sign up for the BIOS App
              </Text>
              <div className="flex flex-col items-center justify-start w-4/5 md:w-full">
                <Button className="bg-blue-A200 cursor-pointer font-medium min-w-[348px] py-2.5 rounded-lg text-base text-center text-white-A700">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center mb-1 mt-[49px] md:px-5 w-full">
          <div className="bg-blue_gray-900 flex flex-col md:gap-10 gap-[84px] items-start justify-end pb-10 md:px-10 sm:px-5 px-[178px] w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col gap-8 h-[98px] md:h-auto items-start justify-end w-[120px]">
                <Img
                  className="h-[34px] md:h-auto object-cover w-[114px] sm:w-full"
                  src="images/img_bioslinewhite.png"
                  alt="bioslinewhite"
                />
                <div className="flex flex-row gap-3 items-start justify-start w-auto">
                  <Img
                    className="h-8 w-8"
                    src="images/img_icon24linkedin.svg"
                    alt="icon24linkedin"
                  />
                  <Img
                    className="h-8 w-8"
                    src="images/img_twitter21_white_a700.svg"
                    alt="twitterTwentyOne"
                  />
                  <Img
                    className="h-8 w-8"
                    src="images/img_icon24facebook.svg"
                    alt="icon24facebook"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-5 items-start justify-between w-[348px]">
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
                    <Text size="txtPoppinsRegular12">Terms and Conditions</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:" className="text-white-A700 text-xs">
                    <Text size="txtPoppinsRegular12">Privacy Statement</Text>
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
      </div>
    </>
  );
};

export default PlarformPage;
