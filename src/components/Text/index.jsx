import React from "react";

const sizeClasses = {
  txtPoppinsLight8: "font-light font-poppins",
  txtPoppinsSemiBold72Gray100: "font-poppins font-semibold",
  txtPoppinsExtraLight14RedA700: "font-light font-poppins",
  txtInterRegular20: "font-inter font-normal",
  txtPoppinsRegular12Bluegray200: "font-normal font-poppins",
  txtPoppinsMedium16Indigo400: "font-medium font-poppins",
  txtPoppinsRegular16Bluegray900: "font-normal font-poppins",
  txtPoppinsRegular16WhiteA700: "font-normal font-poppins",
  txtPoppinsExtraLight10: "font-light font-poppins",
  txtPoppinsExtraLight12: "font-light font-poppins",
  txtPoppinsRegular30: "font-normal font-poppins",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsExtraLight18: "font-light font-poppins",
  txtPoppinsExtraLight14: "font-light font-poppins",
  txtPoppinsLight16Bluegray900: "font-light font-poppins",
  txtPoppinsExtraLight16: "font-light font-poppins",
  txtPoppinsLight26: "font-light font-poppins",
  txtPoppinsLight24: "font-light font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtInterBold16: "font-bold font-inter",
  txtPoppinsLight16Indigo400: "font-light font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium22: "font-medium font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsLight12WhiteA700: "font-light font-poppins",
  txtPoppinsRegular10Bluegray200: "font-normal font-poppins",
  txtPoppinsRegular14Indigo400: "font-normal font-poppins",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtPoppinsLightItalic20: "font-light font-poppins italic",
  txtInterRegular14: "font-inter font-normal",
  txtCourier16: "font-courier font-normal",
  txtCourier12: "font-courier font-normal",
  txtPoppinsLight14: "font-light font-poppins",
  txtPoppinsBold16: "font-bold font-poppins",
  txtCourier10: "font-courier font-normal",
  txtPoppinsLight8WhiteA700a2: "font-light font-poppins",
  txtPoppinsLight12: "font-light font-poppins",
  txtPoppinsLight18: "font-light font-poppins",
  txtPoppinsLight16: "font-light font-poppins",
  txtPoppinsSemiBold72: "font-poppins font-semibold",
  txtPoppinsMediumItalic12: "font-medium font-poppins italic",
  txtPoppinsLight10: "font-light font-poppins",
  txtPoppinsRegular12Bluegray900: "font-normal font-poppins",
  txtPoppinsBold14: "font-bold font-poppins",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtTimesRoman12: "font-normal font-times",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtPoppinsRegular95: "font-normal font-poppins",
  txtPoppinsExtraLight36: "font-light font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
  txtPoppinsExtraLight7: "font-light font-poppins",
  txtPoppinsExtraLight22: "font-light font-poppins",
  txtPoppinsRegular12Gray10002: "font-normal font-poppins",
  txtPoppinsSemiBold44: "font-poppins font-semibold",
  txtPoppinsExtraLight20: "font-light font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
