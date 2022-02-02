import React, { ChangeEvent, FC, FormEvent, useState } from "react";

export const Loginform: FC = () => {
  const [emailInfo, setEmailInfo] = useState<string>("");
  const [passwordInfo, setPasswordInfo] = useState<string>("");

  const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setEmailInfo(value);
  };

  const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setPasswordInfo(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="max-w-2xl bg-slate-500 w-40 h-40 p-44 text-white flex items-center justify-center rounded-md flex-col gap-12 text-base font-thin font-roboto">
        <form
          action="submit"
          id="loginform"
          onSubmit={handleSubmit}
          className="flex justify-around items-baseline flex-col text-white gap-4"
        >
          <label htmlFor="" className="">
            Email
          </label>
          <input
            type="text"
            value={emailInfo}
            onChange={emailChange}
            placeholder="Begin typing..."
            className="bg-slate-500 text-white  tracking-wide border-b-2 font-thin"
          />
          <label htmlFor="" className="">
            Password
          </label>
          <input
            type="password"
            value={passwordInfo}
            onChange={passwordChange}
            placeholder="Begin typing..."
            className="bg-slate-500 text-white  tracking-wide border-b-2"
          />
        </form>
        <button form="loginform" className="text-white bg-slate-600 px-4 py-2">
          Submit
        </button>
      </div>
    </div>
  );
};
