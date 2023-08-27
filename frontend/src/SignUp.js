import React from "react";
import { useSearchParams } from "react-router-dom";

const SignUp = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div>
      <p>Email : {email}</p>
    </div>
  );
};

export default SignUp;
