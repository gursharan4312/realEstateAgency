import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Layout from "../components/Layout";
import { homes } from "../data/homesData";
import { BsDot } from "react-icons/bs";
import { FaBed, FaBath } from "react-icons/fa";
import { GiResize } from "react-icons/gi";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { Button } from "../components/Button";

const Container = styled.div`
  margin-top: calc(60px + 1rem);
  padding: 0 calc((100vw - 1300px) / 2);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.backgroundVariant};
  padding: 2rem;
`;
const ulStyles = css`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
  li {
    margin-right: 0.5rem;
  }
`;
const HeaderFirstSection = styled.div`
  ul {
    ${ulStyles}
    margin-bottom: 0.5rem;
    .home-price {
      font-size: 1.3rem;
    }
    .time {
      color: ${({ theme }) => theme.secondaryText};
    }
  }
  .home-address {
    font-size: 0.9rem;
  }
`;
const HeaderSecondSection = styled.div`
  ul {
    ${ulStyles}
    li {
      margin-right: 1.5rem;
    }
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0;
  /* justify-content: space-between; */
  /* background: ${({ theme }) => theme.backgroundVariant}; */
`;
const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  width: 600px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`;
const arrowStyles = css`
  width: 40px;
  height: 40px;
  z-index: 2;
  color: ${({ theme }) => theme.headingColor};
  cursor: pointer;
  background: ${({ theme }) => theme.background};
  border-radius: 50px;
  padding: 10px;
  margin: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.primaryColor};
    transform: scale(1.25);
  }
`;
const ForwardArrow = styled(IoChevronForward)`
  ${arrowStyles}
`;
const BackwardArrow = styled(IoChevronBack)`
  ${arrowStyles}
`;

const ContactSection = styled.form`
  width: 400px;
  margin: 0 auto;
  h2 {
    margin-bottom: 1rem;
  }
`;
const inputCss = css`
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.3rem 0.7rem;
  line-height: 1.5rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: text;
  outline: none;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primaryText};
  &:focus {
    background: ${({ theme }) => theme.background};
    box-shadow: 0 0 5px ${({ theme }) => theme.primaryText};
  }
`;
const Input = styled.input`
  ${inputCss}
`;
const TextArea = styled.textarea`
  ${inputCss}
`;

function HomeDetails({ match }) {
  const [home, setHome] = useState();
  const [selectedImg, setSelectedimg] = useState(0);

  const nextImg = () => setSelectedimg((selectedImg + 1) % home.images.length);
  const prevImg = () =>
    setSelectedimg(
      selectedImg === 0 ? home.images.length - 1 : selectedImg - 1
    );
  useEffect(() => {
    setHome(homes.filter((home) => home._id === match.params.id)[0]);
  }, [match.params.id]);

  if (!home) {
    return (
      <Layout>
        <Container>
          <h1>No Home found</h1>
        </Container>
      </Layout>
    );
  }
  return (
    <Layout>
      <Container>
        <Header>
          <HeaderFirstSection>
            <ul>
              <li className="home-price">${home.price}</li>
              <li>
                <BsDot />
              </li>
              <li> {home.type}</li>
              <li>
                <BsDot />
              </li>
              <li className="time"> {home.date}</li>
            </ul>
            <span className="home-address">{home.address}</span>
          </HeaderFirstSection>
          <HeaderSecondSection>
            <ul>
              <li>
                <FaBed /> {home.rooms} Bed
              </li>
              <li>
                <FaBath /> {home.washrooms} Bath
              </li>
              <li>
                <GiResize /> {home.size} FT²
              </li>
            </ul>
          </HeaderSecondSection>
        </Header>
        <Body>
          <ImageSection>
            <BackwardArrow onClick={nextImg} />
            <img src={home.images[selectedImg]} alt={home.address} />
            <ForwardArrow onClick={prevImg} />
          </ImageSection>
          <ContactSection>
            <h2>Contact Property</h2>
            <Input placeholder="Your Name" />

            <Input placeholder="Your Email" />

            <Input placeholder=" Your Phone" />
            <TextArea placeholder="Type your message here" rows={7}></TextArea>
            <Button type="submit">Submit</Button>
          </ContactSection>
        </Body>
      </Container>
    </Layout>
  );
}

export default HomeDetails;
