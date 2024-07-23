import { useNavigate } from "react-router-dom";
import Button from "./Button";

const BackButton = function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      type={"back"}
      onClick={(e) => {
        e.preventDefault();
        navigate("/app");
      }}
    >
      &#27; Back
    </Button>
  );
};

export default BackButton;
