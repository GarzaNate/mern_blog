import React from "react";
import { Footer } from "flowbite-react";

const FooterCom = () => {
  return (
    <div>
      <Footer container className="border border-t-8 border-purple-500">
        <div className="w-full max-w-7xl mx-auto">
          <Footer.Copyright href="#" by="Josue" year={2024} />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
      </Footer>
    </div>
  );
};

export default FooterCom;
