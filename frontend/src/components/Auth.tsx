import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@abdulazeez060/common2/dist";
import { BACKEND_URL } from "../config";
import axios from "axios";

function Auth({ type }: { type: "signin" | "signup" }) {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
  });

  async function handleSubmit() {
    try {
      const URL = `${BACKEND_URL}/api/v1/user/${
        type === "signin" ? "signin" : "signup"
      }`;
      const response = await axios.post(URL, postInputs);
      console.log(response.data);
      if (response.data.error) {
        alert("enter correct input fields");
        return;
      }
      localStorage.setItem("token", response.data.jwt);
      navigate("/blogs");
    } catch (error) {
      alert("error occured");
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900">
      <div className="m-4">
        <div className=" text-2xl md:text-4xl text-center font-extrabold px-4 md:px-8 text-black dark:text-white">
          Create an Account
        </div>
        <div className="text-sm md:text-xl opacity-50 mt-2 px-2 md:px-8 text-center text-black dark:text-white">
          {type === "signup"
            ? "Already have an account?"
            : "Don't have an account"}{" "}
          <Link
            to={type === "signin" ? "/signup" : "/signin"}
            className=" underline">
            {type === "signin" ? "SignUp" : "SignIn"}
          </Link>
        </div>
        <div>
          {type === "signup" ? (
            <div className="mt-4">
              <LabelInputBox
                label={"Name"}
                type={"text"}
                value={postInputs.name || ""}
                placeholder={"Name"}
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            </div>
          ) : null}
          <div className="mt-4">
            <LabelInputBox
              label={"Username"}
              type={"text"}
              value={postInputs.username}
              placeholder={"Enter your name"}
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  username: e.target.value,
                });
              }}
            />
          </div>
          <div className="mt-4">
            <LabelInputBox
              label={"Password"}
              type={"password"}
              value={postInputs.password}
              placeholder={"Password"}
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white w-full mt-4 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
          {type === "signin" ? "Signin" : "Signup"}
        </button>
      </div>
    </div>
  );
}

interface inputTypes {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelInputBox({
  label,
  placeholder,
  onChange,
  type,
  value,
}: inputTypes) {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white  ">
        {label}
      </label>
      <input
        type={type}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
      />
    </div>
  );
}

export default Auth;
