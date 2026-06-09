"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const handelLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    if (res) {
      alart("Log in success");
    }
    if (error) {
      alert("Email or Password wrong");
    }
  };

  console.log(errors);
  // console.log(watch("email"));
  return (
    <div className="mx-auto container">
      <div className="mx-auto ">
        <h1 className="text-center font-bold text-4xl">Login Page</h1>
        <div className="my-4 bg-base-200 border-base-300 rounded-box p-8 mx-auto w-md border">
          <form action="" onSubmit={handleSubmit(handelLogin)}>
            <fieldset className="fieldset ">
              <label className="label ">Email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Email filed is requried",
                })}
                className="input w-full"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}

              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Password filed is requried",
                })}
                className="input w-full"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p className="text-center mt-4">
            Don't have account?{" "}
            <Link href={"/register"} className="text-blue-400">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
