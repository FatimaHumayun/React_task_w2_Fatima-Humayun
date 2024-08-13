import { useNavigate } from "react-router-dom";
export default function UserLogOut() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("auth_token");
    navigate("/");
  };
  return (
    <>
      {/* <h1>hello</h1> */}
      <button className="logout-button" onClick={handleClick}>
        Log Out
      </button>
    </>
  );
}
