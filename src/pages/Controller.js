import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SelectPicker } from "rsuite";

const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
].map((item) => ({ label: item, value: item }));

const ControllerInput = () => {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({});

  const handleData = (values) => {
    console.log({ values });
  };

  return (
    <>
      <h1 className="text-xl">Controller</h1>
      <form onSubmit={handleSubmit(handleData)}>
        <Controller
          control={control}
          name="test"
          render={({ field }) => (
            <SelectPicker {...field} data={data} style={{ width: 224 }} />
          )}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default ControllerInput;
