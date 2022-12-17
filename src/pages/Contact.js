import { useForm } from "react-hook-form";

const Contact = () => {
  const {} = useForm();

  return (
    <>
      <h1 className="text-xl">Contact</h1>
      <form>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Email" />
        <input type="tel" placeholder="Mobile number" />

        <input type="submit" />
      </form>
    </>
  );
};

export default Contact;
