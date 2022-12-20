import { useForm } from "react-hook-form";

const Contact = () => {
  const initialValues = {
    fname: "xyz",
    lname: "abc",
    email: "a@gmail.com",
    contact: "789456123",
  };

  const { register, handleSubmit, getValues } = useForm({
    defaultValues: initialValues,
  });

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
        <input
          type="text"
          placeholder="First name"
          {...register("fname", { required: true, minLength: 3, maxLength: 8 })}
        />
        <input type="text" placeholder="Last name" {...register("lname")} />
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^([a-zA-Z0-9@*#]{8,15})$/,
          })}
        />
        <input
          type="number"
          placeholder="Mobile number"
          {...register("contact", { required: true, min: 10, max: 20 })}
        />

        <input type="submit" />
      </form>
    </>
  );
};

export default Contact;
