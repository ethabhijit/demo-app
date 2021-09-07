import { Comments } from "react-facebook";

const FacebookComponent = () => {
  return (
    <>
      <h1>Facebook Comments</h1>
      <div>
        <Comments href="https://www.facebook.com/" />
      </div>
    </>
  );
};

export default FacebookComponent;
