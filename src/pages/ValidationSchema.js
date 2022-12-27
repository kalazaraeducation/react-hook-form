import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ValidationSchema = () => {
  const initialValues = {
    fname: "xyz",
    lname: "abc",
    email: "a@gmail.com",
    contact: 10,
  };

  const validationSchema = Yup.object({
    fname: Yup.string()
      .required("FName is Required.")
      .length(10, "FName should be equal to 10 characters."),
    lname: Yup.string()
      .required("LName is Required.")
      .length(10, "LName should be equal to 10 characters."),
    email: Yup.string()
      .required("Email is Required.")
      .email("Email is not valid."),
    contact: Yup.number()
      .required("Contact is Required.")
      .moreThan(10, "Number must be greater than 10")
      .lessThan(20, "Number must be less than 20"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const handleData = (values) => {
    console.log("we will hit some random api in this callback");
  };

  return (
    <>
      <h1 className="text-xl">Contact</h1>
      <form onSubmit={handleSubmit(handleData)}>
        <input type="text" placeholder="First name" {...register("fname")} />
        {errors.fname && <p>{errors.fname.message}</p>}
        <input type="text" placeholder="Last name" {...register("lname")} />
        {errors.lname && <p>{errors.lname.message}</p>}
        <input type="text" placeholder="Email" {...register("email")} />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          type="number"
          placeholder="Mobile number"
          {...register("contact")}
        />
        {errors.contact && <p>{errors.contact.message}</p>}
        <input type="submit" />
      </form>
    </>
  );
};

export default ValidationSchema;
