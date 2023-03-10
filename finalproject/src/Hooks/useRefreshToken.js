import Api from "../API/Api";
import useAuth from "./useAuth";
const useRefreshToken = () => {
  const { setAuth } = useAuth();
  return <div>useRefreshToken</div>;
};
export default useRefreshToken;
