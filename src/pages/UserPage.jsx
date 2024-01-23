import { useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();

  // const [userData, setUserData] = useState({});

  // axios.get(`/users/${userId}`).then((response) => setUserData(response.data));

  return <h1>User #{userId} Page</h1>;
};

export default UserPage;
