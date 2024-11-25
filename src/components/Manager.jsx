import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    console.log(passref.current.type);
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passref.current.type = "text";
    } else {
      ref.current.src = "icons/eyecross.png";
      passref.current.type = "password";
    }
  };

  const savePassword = () => {
    if(form.site.length != 0 && form.username.length && form.password.length){
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...form, id: uuidv4() }])
    );
    setform({ site: "", username: "", password: "" });}
    else{
      alert("Please fill all the details!");
    }
  };

  const handleDelete = (id) => {
    let c = confirm("Do you really want to delete?");
    if (c) {
      setpasswordArray(passwordArray.filter((item) => item.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((item) => item.id !== id))
      );
    }
  };

  const handleEdit = (id) => {
    setform(passwordArray.filter((i) => i.id === id)[0]);
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (event) => {
    setform({ ...form, [event.target.name]: event.target.value });
  };

  const handleCopy = (text) => {
    toast("Copy to Clipbored!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as bg-[#051623]*/}
      <ToastContainer />
      <div className=" relative bg-black min-h-[88vh] pb-10 w-full">
        <div className=" md:mycontainer text-center px-1 py-4 md:p-6 ">
          <h1 className="font-bold text-4xl">
            <span className="text-[#DEB992]">&lt;</span>
            <span className="text-white">Pass</span>
            <span className="text-[#b99a79]">OP/&gt; </span>
          </h1>
          <p className="text-[#DEB992]"> Your Own Password Manager</p>
          <div className="flex flex-col p-4 gap-4">
            <input
              className="rounded-full border border-[#1BA098] w-full px-4 py-1 text-[#1BA098]"
              type="text"
              value={form.site}
              name="site"
              onChange={handleChange}
              placeholder="Enter website url"
            />
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="rounded-full border border-[#1BA098] w-full px-4 py-1"
                type="text"
                value={form.username}
                name="username"
                onChange={handleChange}
                placeholder="Enter username"
              />
              <div className="relative">
                <input
                  className="rounded-full border border-[#1BA098] w-full px-4 py-1"
                  type="password"
                  ref={passref}
                  value={form.password}
                  name="password"
                  onChange={handleChange}
                  placeholder="Enter password"
                />
                <span
                  className="absolute right-[3px] top-[4px] cursor-pointer onClick"
                  onClick={showPassword}
                >
                  <img
                    ref={ref}
                    className="p-1"
                    width={26}
                    src="icons/eyecross.png"
                    alt="eye"
                  />
                </span>
              </div>
            </div>
            <button
              type="button"
              className=" justify-center text-[#DEB992] items-center flex w-fit mx-auto rounded-full px-8 py-2 hover:font-bold gap-2 border-2 border-[#DEB992]"
              onClick={savePassword}
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                colors="primary:#DEB992"
              ></lord-icon>
              Add Password
            </button>
          </div>
          <div className=" passwords mt-3  mx-auto ">
            <h1 className="text-yellow-50 font-bold text-2xl py-3 ">
              Passwords
            </h1>
            <div className="overflow-x-scroll md:overflow-x-hidden mb-4">
              <table
                class="table-auto rounded-md bg-yellow-50 w-full 
            "
              >
                <thead className="text-white ">
                  <tr className="bg-[#1BA098]  ">
                    <th className="py-2 ">Site</th>
                    <th className="py-2 ">Username</th>
                    <th className="py-2 ">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="overflow-x-scroll">
                  {passwordArray.map((item) => {
                    return (
                      <tr>
                        <td className="py-2 border border-white text-center ">
                          <span
                            onClick={() => {
                              handleCopy(item.site);
                            }}
                            className="flex justify-center items-center gap-2 mx-auto "
                          >
                            {item.site} <FaCopy />
                          </span>
                        </td>
                        <td className="py-2 border border-white text-center ">
                          <span
                            onClick={() => {
                              handleCopy(item.username);
                            }}
                            className="flex justify-center items-center gap-2 mx-auto"
                          >
                            {item.username} <FaCopy />
                          </span>
                        </td>
                        <td className=" py-2 border border-white text-center ">
                          <span
                            onClick={() => {
                              handleCopy(item.password);
                            }}
                            className=" flex justify-center items-center gap-2 mx-auto"
                          >
                            {item.password} <FaCopy />
                          </span>
                        </td>
                        <td className=" py-2 border border-white text-center ">
                          <span
                            className="  justify-center items-center gap-2 "
                            onClick={() => {
                              handleEdit(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/oqaajvyl.json"
                              trigger="hover"
                              colors="primary:#000000,secondary:#000000"
                              stroke="bold"
                              style={{ " width": "25px", height: "25px" }}
                            ></lord-icon>
                          </span>
                          <span
                            className=" justify-center items-center mx-1 cursor-pointer "
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
