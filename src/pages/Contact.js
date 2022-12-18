import { useForm } from "react-hook-form";

const Contact = () => {
  const { register } = useForm();

  // const {} = register();

  return (
    <>
      <h1 className="text-xl">Contact</h1>
      <form>
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
