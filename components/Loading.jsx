import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="loading-screen">
      <div className="spinner-screen">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default Loading;
