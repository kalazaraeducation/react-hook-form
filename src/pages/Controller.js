import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ControllerInput = () => {
  const initialValues = {
    fname: "",
  };

  const validationSchema = Yup.object({
    fname: Yup.string()
      .required("FName is Required.")
      .length(10, "FName should be equal to 10 characters."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: "all",
  });

  const handleData = (values) => {
    console.log("we will hit some random api in this callback");
  };

  return (
    <>
      <h1 className="text-xl">Controller</h1>
      <form onSubmit={handleSubmit(handleData)}>
        <Controller
          control={control}
          name="test"
          render={({ field }) => (
            <input {...field} type="text" placeholder="First name" />
          )}
        />

        {errors.fname && <p>{errors.fname.message}</p>}

        <input type="submit" />
        <button
          className="ml-5"
          type="button"
          onClick={() => {
            setValue("test", "kalazaraed");
          }}
        >
          Click to set Value
        </button>
      </form>
    </>
  );
};

export default ControllerInput;
