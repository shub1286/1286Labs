const themeDefaultConfig = {
  header: {
    headerClasses:
      "site-header light-header site-header--dao",
    containerFluid: false,
    darkLogo: true,
  },
  headerMini: false,
  footerMini: false,
  // defaultLogo: siteLogo,
};
export const innerPageDefault = {
  pageWrapperClass: "theme-1",
  header: {
    headerClasses:
      "site-header--menu-center bg-transparent site-header--menu-center-adjustment",
    doubleButton: {
      wrapperClass: "site-header__btns--01",
      btnOneText: "Login",
      btnTwoText: "Sign Up",
      btnOneClass: "btn btn-transparent btn-1",
      btnTwoClass: "btn btn-primary btn-primary-hvr btn-2 rounded",
    },
  },
 
  innerpage: true,
  // defaultLogo: siteLogo,
};
export default themeDefaultConfig;
