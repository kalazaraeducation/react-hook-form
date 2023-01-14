import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ValidationSchema = () => {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    contact: 0,
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
    setValue,
    reset,
    resetField,
    setFocus,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: "all",
  });

  const handleData = (values) => {
    console.log("we will hit some random api in this callback");
    // reset();
    resetField("fname");
    resetField("lname");
    setFocus("fname");
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
        <button
          className="ml-5"
          type="button"
          onClick={() => {
            setValue("fname", "kalazaraed");
            setValue("lname", "educationa");
            setValue("email", "kalazara@gmail.com");
            setValue("contact", 11);
          }}
        >
          Click to set Value
        </button>
      </form>
    </>
  );
};

export default ValidationSchema;
