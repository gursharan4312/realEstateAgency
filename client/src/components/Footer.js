import React from "react";
import styled from "styled-components";

const FooterSection = styled.footer``;
const ColumnLeft = styled.div``;
const ColumnRight = styled.div``;
const SocialLinks = styled.div``;
const SocialLink = styled.div``;

function Footer() {
  return (
    <FooterSection>
      <ColumnLeft>
        <h1>Let's find your dresm home</h1>
        <SocialLinks>
          <SocialLink />
          <SocialLink />
        </SocialLinks>
      </ColumnLeft>
      <ColumnRight>
        <div>
          <h3>Contact Us</h3>
          <span>FAQs</span>
          <span>Support</span>
          <span>FAQs</span>
        </div>
        <div>
          <h3>Offices</h3>
          <span>United States</span>
          <span>Europe</span>
          <span>Canada</span>
        </div>
      </ColumnRight>
    </FooterSection>
  );
}

export default Footer;
