import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, getValues } = useForm();

  // const {} = register();

  const handleData = (values) => {
    console.log("get values", getValues("fname"));
    console.log("get values", getValues());
    console.log("form values", values);
    console.log("we will hit some random api in this callback");
  };

  const handleError = () => {
    //
  };

  return (
    <>
      <h1 className="text-xl">Contact</h1>
      <form onSubmit={handleSubmit(handleData, handleError)}>
        <input type="text" placeholder="First name" {...register("fname")} />
        <input type="text" placeholder="Last name" {...register("lname")} />
        <input type="text" placeholder="Email" {...register("email")} />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("contact")}
        />

        <input type="submit" />
      </form>
    </>
  );
};

export default Contact;
