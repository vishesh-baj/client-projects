import { useState } from "react";
import CustomButton from "../components/Button";
import CustomInput from "../components/CustomInput";

const Contacts = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    contact: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full h-auto gap-5 flex flex-col md:flex-row justify-between items-center px-10 py-10">
      <div className="flex flex-col w-full text-center md:text-left md:gap-10  md:w-1/2">
        <h1 className="text-4xl md:text-[100px] py-5 ">Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          excepturi praesentium odit incidunt veniam officiis? Tenetur itaque
          quas saepe. Fugiat debitis voluptatem iste veritatis in deleniti
          dolor, quibusdam rerum officia doloribus voluptatum quasi magni
          eveniet! Consectetur eaque minus praesentium deserunt.
        </p>
      </div>
      <br />
      <form className="w-full md:w-1/2  h-auto p-5 md:my-10 flex-col  border rounded-lg">
        <CustomInput
          name="fullname"
          inputColor={"input-info"}
          placeholder="enter your name"
          inputLabel={"Full Name"}
          onChangeProp={handleChange}
        />
        <br />
        <CustomInput
          name="contact"
          inputColor={"input-info"}
          placeholder="mobile number"
          inputLabel={"Contact Number"}
          onChangeProp={handleChange}
        />
        <br />
        <CustomInput
          name="email"
          inputColor={"input-info"}
          placeholder="Email"
          inputLabel={"E-Mail"}
          onChangeProp={handleChange}
        />
        <br />
        <label className="label" htmlFor="info">
          Message
        </label>
        <textarea
          onChange={handleChange}
          className="textarea textarea-info w-full h-40"
          placeholder="Bio"
        />
        <br />
        <br />

        <CustomButton
          btnBgColor={"bg-info"}
          btnSize={"w-full"}
          btnText="text-white"
          btnTitle={"Submit"}
        />
      </form>
    </div>
  );
};

export default Contacts;
