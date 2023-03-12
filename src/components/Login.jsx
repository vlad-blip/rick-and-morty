import { GoogleLogin } from "@react-oauth/google";

const onSuccess = (res) => {
  alert("Вхід був успішний");
};
const onError = (res) => {
  alert("Увійти не вдалося: ");
};

const Login = () => {
  return <GoogleLogin onSuccess={onSuccess} onError={onError} useOneTap />;
};

export default Login;
