import React from "react";
import { Form } from "react-router-dom";

const Contact = () => {
  return (
    <section className="px-5 mt-15 md:mb-15">
      <div className="flex flex-col md:flex-row md:justify-around items-center md:gap-0 gap-8">
        <div className="mt-3">
          <h1 className="text-5xl font-bold">Contact</h1>
          <p>Get in touch, we are always here to help you.</p>
          <Form
            method="post"
            action="/contact"
            className="flex flex-col gap-2 mt-6"
          >
            <div className="flex flex-col">
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                name="fullname"
                className="border text-[14px] border-gray-400 rounded px-1 py-1.5 text-gray-800 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className="border text-[14px] border-gray-400 rounded px-1 py-1.5 text-gray-80 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                className="border text-[14px] border-gray-400 rounded outline-0 py-2 px-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-800 py-2 text-white hover:bg-blue-700 rounded cursor-pointer mt-5"
            >
              Submit
            </button>
          </Form>
        </div>
        <img src="/contact.png" alt="" className="h-[300px] md:h-[80%] " />
      </div>
    </section>
  );
};

export default Contact;
