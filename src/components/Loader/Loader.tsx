import { BounceLoader, RingLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <RingLoader color="#3498db" size={60} />
    </div>
  );
};

export default Loader;
