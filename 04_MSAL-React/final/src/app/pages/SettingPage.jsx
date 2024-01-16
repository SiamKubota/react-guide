import { useParams } from "react-router-dom";

const SettingPage = () => {
  const params = useParams();

  return <p>Hello {params.name} Page</p>;
};

export default SettingPage;
