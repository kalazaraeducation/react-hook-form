import { useForm } from "react-hook-form";

const Contact = () => {
  const initialValues = {
    fname: "xyz",
    lname: "abc",
    email: "a@gmail.com",
    contact: "789456123",
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
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
        {errors.fname?.type === "required" && <p>First Name is Required</p>}
        {errors.fname?.type === "minLength" && <p>Min length greater than 3</p>}
        {errors.fname?.type === "maxLength" && <p>Max length less than 8</p>}
        <input type="text" placeholder="Last name" {...register("lname")} />
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^([a-zA-Z0-9@*#]{8,15})$/,
          })}
        />
        {errors.email && <p>Email is Required</p>}
        <input
          type="number"
          placeholder="Mobile number"
          {...register("contact", { required: true, min: 10, max: 20 })}
        />
        {errors.contact && <p>Contact is Required</p>}
        <input type="submit" />
      </form>
    </>
  );
};

export default Contact;
