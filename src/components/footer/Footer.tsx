import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footerOuter">
        <div className="footerOuterLeft">
          Copyright © 2020-2022 Helios Life Enterprises, Inc. All rights reserved. | Terms and Conditions
        </div>
        <div className="footerOuterRight">
          <TwitterIcon />
          <LinkedInIcon />
        </div>
      </div>
    </>
  );
}

export default Footer;
