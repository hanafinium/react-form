import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(2, "Must be 2 characters at least")
        .required("Required"),
      email: Yup.string().email("Invalid Email").required("Required"),
      subject: Yup.string().required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      //form data handling
      console.log("data submitted", values);
    },
  });
  return (
    <div className="h-screen flex flex-col justify-center items-center py-10 bg-yellow-50">
      <p className="text-4xl mb-10 text-fontDark font-semibold">Contact Form</p>
      <form
        className="flex flex-col w-4/12 border-transparent border-2 rounded-md p-8 bg-gray-200 shadow-md font-mono"
        onSubmit={formik.handleSubmit}
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="m-2 h-10 pl-2 rounded shadow-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <p className="text-red-700 pl-4">{formik.errors.fullName}</p>
        ) : null}
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          className="m-2 h-10 pl-2 rounded shadow-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-700 pl-4">{formik.errors.email}</p>
        ) : null}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="m-2 h-10 pl-2 rounded shadow-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
        />
        {formik.touched.subject && formik.errors.subject ? (
          <p className="text-red-700 pl-4">{formik.errors.subject}</p>
        ) : null}
        <textarea
          name="message"
          placeholder="Your Message"
          className="m-2 pl-2 h-40 rounded shadow-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message ? (
          <p className="text-red-700 pl-4">{formik.errors.message}</p>
        ) : null}
        <div>
          <button
            type="submit"
            className="h-11 w-28 mx-2 my-4 text-xl border-2 py-1 px-2 rounded-md border-fontDark bg-fontDark text-white font-medium font-sans"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
