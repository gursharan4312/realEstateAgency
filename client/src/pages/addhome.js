import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import AutoCompleteAddress from "../components/AutoCompleteAddress";
import Layout from "../components/Layout";
import axios from "axios";
import Loading from "../components/Loading";

const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  padding: 3rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-wrap: wrap;
`;

const FormContainer = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 48px) {
    width: 100%;
  }
  h1 {
    margin-bottom: 1rem;
  }
`;
const inputCss = css`
  width: 100%;
  margin-left: 1.5rem;
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

const Button = styled.button`
  ${inputCss}
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primaryColor};
    color: #fff;
  }
`;

function Addhome() {
  const [address, setAddress] = useState({
    adress: "",
    position: { lat: "", lng: "" },
  });
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [rooms, setRooms] = useState("");
  const [washrooms, setWashrooms] = useState("");
  const [size, setSize] = useState("");
  const [details, setDetails] = useState("");
  useEffect(() => {
    console.log(address);
  }, [address]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch({ type: USER_LOGIN_REQUEST });
    uploadFileHandler();
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.userToken}`,
        },
      };
      const { data } = await axios.post(
        "/api/homes",
        {
          address: address.address,
          city: address.city,
          state: address.state,
          postalCode: address.postalCode,
          country: address.country,
          position: address.position,
          images,
          price,
          type,
          rooms,
          washrooms,
          size,
          details,
        },
        config
      );
      //resetting form
      setAddress({
        adress: "",
        position: { lat: "", lng: "" },
      });
      setImages([]);
      setFiles({});
      setPrice("");
      setType("");
      setRooms("");
      setWashrooms("");
      setSize("");
      setDetails("");
    } catch (e) {
      // dispatch({ type: USER_LOGIN_FAIL, payload: e });
    }
    setLoading(false);
  };

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(files)) {
      formData.append("image", value);
    }
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.userToken}`,
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImages(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <Layout>
      {loading && <Loading />}
      <Container>
        <FormContainer>
          <h1>Add new Home Details</h1>
          <AutoCompleteAddress setAddress={setAddress} />
          <Input
            placeholder="Property type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <Input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            placeholder="Number of rooms"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
          />
          <Input
            placeholder="Number of Washrooms"
            value={washrooms}
            onChange={(e) => setWashrooms(e.target.value)}
          />
          <Input
            placeholder="Size of the Property (FT²)"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <TextArea
            placeholder="Any other important details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <Input
            type="file"
            multiple
            onChange={(e) => setFiles(e.target.files)}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </FormContainer>
      </Container>
    </Layout>
  );
}

export default Addhome;
