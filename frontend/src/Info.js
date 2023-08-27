import React from "react";
import { useSearchParams } from "react-router-dom";

const Info = () => {
  const [searchParams] = useSearchParams();
  const accessToken = searchParams.get("access_token");
  const refreshToken = searchParams.get("refresh_token");

  return (
    <div>
      <p>Access Token : {accessToken}</p>
      <p>Refresh Token : {refreshToken}</p>
    </div>
  );
};

export default Info;
