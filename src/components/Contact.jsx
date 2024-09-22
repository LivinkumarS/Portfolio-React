import { Button, Textarea, TextInput, Alert, Spinner } from "flowbite-react";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    access_key: "72ed829b-94d5-4898-87f3-3b4934cec02a",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      formData.email === "" ||
      formData.message === "" ||
      formData.name === ""
    ) {
      setLoading(false);
      return setError("All Fields Are Required");
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({
          access_key: "72ed829b-94d5-4898-87f3-3b4934cec02a",
          name: "",
          email: "",
          message: "",
        });
        setSuccess(true);
        setError(null);
        setLoading(false);
      } else {
        setError("Server Error...!");
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <div
      id="_contact"
      className="mt-6 mx-auto max-w-4xl p-5 relative flex flex-col items-center justify-center"
    >
      <h1 className="ani text-xl sm:text-2xl font-bold mx-auto text-center my-3">
        CONTACT
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl px-8 mx-auto flex flex-col gap-5 sm:gap-10"
      >
        <h1 className="ani text-xl sm:text-2xl text-green-500 font-extrabold text-center">
          Contact Form
        </h1>
        <div>
          <TextInput
            className="ani bg-white border-0 shadow-lg max-w-[500px] mx-auto"
            value={formData.name}
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <TextInput
            className="ani bg-white border-0 shadow-lg max-w-[500px] mx-auto"
            value={formData.email}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <Textarea
            className="ani h-28 bg-white border-0 shadow-lg max-w-[500px] mx-auto"
            value={formData.message}
            placeholder="Message"
            row="2"
            name="message"
            id="message"
            required
            onChange={handleChange}
          ></Textarea>
        </div>
        <Button
          color={"black"}
          className="ani shadow-lg mx-auto bg-transparent text-black border border-green-500 hover:bg-green-500 hover:text-white "
          type="submit"
        >
          {loading? "Loading...":"Submit Form"}
          {loading? (<Spinner aria-label="Small spinner example" size="sm" />):null}
        </Button>

        {success && (
          <Alert className="w-full mt-4 font-semibold" color={"green"}>
            Submitted Successfully...!
          </Alert>
        )}
        {error && (
          <Alert className="w-full mt-4 font-semibold" color={"red"}>
            {error}
          </Alert>
        )}
        <h1 className="my-8 mx-auto text-2xl font-extrabold text-gray-500 italic">
          Eat... Sleep... Code... Repeat...♾️
        </h1>
      </form>
    </div>
  );
}
