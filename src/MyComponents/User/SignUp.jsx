// import React, { useState } from "react";
// import logo from "./../../argus website/PNG/Logo Vectors.png";
// import { useFormik } from "formik";
// import Alert from "../Components/Alert";
// import axiosInstance from "../../helpers/axiosInstance";
// import { aunthenticate } from "../../helpers/auth";
// import { useHistory } from "react-router";
// import Loader from "react-loader-spinner";

// const validate = (values) => {
//   const errors = {};
//   if (!values.password) {
//     errors.password = "*Required";
//   } else if (values.password.length < 6) {
//     errors.password = "Must be atleast 6 characters";
//   }

//   if (!values.email) {
//     errors.email = "*Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }

//   return errors;
// };

// const SignUp = () => {
//   const history = useHistory();
//   const [loading, setLoading] = useState(false);

//   const [showAlert, setShowAlert] = useState({
//     show: false,
//     message: "",
//     success: false,
//   });

//   const { getFieldProps, handleSubmit, errors } = useFormik({
//     initialValues: {
//       password: "",
//       email: "",
//     },
//     validate,
//     onSubmit: (values, { resetForm }) => {
//       setLoading(true);
//       axiosInstance
//         .post(`/signup`, values)
//         .then(() => {
//           axiosInstance.post("/signin", values).then((response) => {
//             aunthenticate(response.data, () => {});
//             history.push("/dashboard/student/home");
//             setLoading(false);
//             resetForm();
//           });
//         })
//         .catch((err) => {
//           setLoading(false);
//           setShowAlert({
//             show: true,
//             message: err.response.data.error,
//             success: false,
//           });
//           resetForm();
//         });
//     },
//   });

//   return (
//     <div>
//       <div className="p-20 h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center bg-hero">
//         <div className="content text-3xl text-center md:text-left lg:w-2/3">
//           <h1 className="text-5xl text-gray-700 font-bold">Argus Security</h1>
//           <p>Your partners in protection</p>
//         </div>
//         <div className="container mx-auto flex flex-col items-center">
//           <form
//             className="shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg items-center justify-center"
//             onSubmit={handleSubmit}
//           >
//             {showAlert.show ? (
//               <Alert alert={showAlert} rmAlert={setShowAlert} />
//             ) : null}
//             <img src={logo} alt="Logo" className="w-20 mb-3" />
//             {/* <div classname="w-full flex flex-col item-center">
//               <hr className="w-1/3 border-1 border-black" />
//               <p>or</p>
//               <hr className="w-1/3 border-1 border-black" />
//             </div> */}
//             <input
//               className={`w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
//               type="email"
//               placeholder="Email"
//               {...getFieldProps("email")}
//             />
//             {errors.email ? (
//               <div className="w-full text-xs text-red-400">{errors.email}</div>
//             ) : null}

//             <input
//               className={`w-full mt-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-red-1`}
//               type="password"
//               placeholder="Password"
//               {...getFieldProps("password")}
//             />
//             {errors.password ? (
//               <div className="w-full text-xs text-red-400">
//                 {errors.password}
//               </div>
//             ) : null}

//             <button
//               className="w-1/2 bg-red-700 text-white p-3 rounded-lg font-semibold text-lg mt-3"
//               type="submit"
//             >
//               {loading ? (
//                 <div className="w-full flex items-center justify-center">
//                   <Loader
//                     type="TailSpin"
//                     color="lightgray"
//                     height={40}
//                     width={40}
//                     radius={0}
//                   />
//                 </div>
//               ) : (
//                 <>SignUp</>
//               )}
//             </button>
//             <p className="text-gray-900 font-bold text-center my-2">
//               Already Registered?<span className="text-blue-500"> Log In</span>{" "}
//             </p>
//             <hr className="border-1 border-black w-full" />
//             <p className="text-gray-900 text-center text-sm my-2">
//               By clicking on next, you acknowledge that you have read and
//               accepted the Terms of Service and the Privacy Policy
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
