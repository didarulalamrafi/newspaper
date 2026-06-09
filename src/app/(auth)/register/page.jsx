"use client";
import { authClient } from "@/lib/auth-client";
import { error } from "better-auth/api";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const handelRegister = async (data) => {
    console.log(data, "data");
    const { name, photo, email, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Sign up Successful");
    }
    console.log(res, error);
  };
  // console.log(watch("email"));

  return (
    <div className="mx-auto container">
      <div className="mx-auto ">
        <h1 className="text-center font-bold text-4xl">Register Page</h1>
        <div className="my-4 bg-base-200 border-base-300 rounded-box p-8 mx-auto w-md border">
          <form action="" onSubmit={handleSubmit(handelRegister)}>
            <fieldset className="fieldset ">
              <label className="label ">Name</label>
              <input
                type="name"
                {...register("name", {
                  required: "Name filed is requried",
                })}
                className="input w-full"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name.message}</p>
              )}
              <label className="label ">Photo url</label>
              <input
                type="Photo"
                {...register("photo", {
                  required: "Photo filed is requried",
                })}
                className="input w-full"
                placeholder="Enter your Photo url"
              />
              {errors.photo && (
                <p className="text-red-600">{errors.photo.message}</p>
              )}
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
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
