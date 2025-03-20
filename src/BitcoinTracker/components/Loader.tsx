import { ClipLoader } from "react-spinners";

const Loader: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <ClipLoader color="#3498db"/>
    </div>
  );
};

export default Loader;
