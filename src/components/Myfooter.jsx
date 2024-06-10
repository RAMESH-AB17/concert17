import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const CustomFooter = () => {
  return (
    <Footer container={true}>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="AB17-CONCERT™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/login/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/accounts/login/?next=%2Flivein.now%2Ftagged%2F&source=profile_tagged_tab" icon={BsInstagram} />
            <Footer.Icon href="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/topics/login" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
