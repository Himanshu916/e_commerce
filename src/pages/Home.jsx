import styled from "styled-components";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
// import Header from "./Header";

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  overflow-x: hidden;
  bottom: 0;
  z-index: 1000;

  background-color: rgba(0, 0, 0, 0.3);
`;
const HomeBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  justify-content: center;
  align-content: center;
  background-image: url("https://zwvvfeqbcqqbspxawwsq.supabase.co/storage/v1/object/public/images/home_bg.jpg?t=2023-12-23T10%3A18%3A14.298Z");
  z-index: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  align-items: center;
  z-index: 2000;
  justify-self: center;
  gap: 3rem;
`;

const HomeHeading = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 2.4rem;
`;

const Name = styled.h2`
  text-align: center;
  color: #fff;
  color: var(--color-brand-100);
  font-size: 2rem;
`;
function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* <Header /> */}

      <HomeBox>
        <HomeContent>
          <Name>Mom&apos;s Nivaala</Name>
          <HomeHeading>
            Food from mother&apos;s hand gives trust of purity.
          </HomeHeading>
          <Button
            onClick={() => navigate("/products")}
            style={{ width: "fit-content", fontWeight: "600" }}
            size="medium"
            variation="primary"
          >
            Shop Now
          </Button>
        </HomeContent>
        <Overlay />
      </HomeBox>
    </>
  );
}

export default Home;
