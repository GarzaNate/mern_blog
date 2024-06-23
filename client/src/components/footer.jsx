import React from "react";
import { Footer } from "flowbite-react";

const FooterCom = () => {
  return (
    <div>
      <Footer container>
        <Footer.Copyright href="#" by="Josue" year={2024} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  );
};

export default FooterCom;
