import { Link, useOutlet, Outlet } from "react-router-dom";

const Contact = () => {
  const hasChild = useOutlet();

  console.log(hasChild);

  if (hasChild) {
    return <Outlet />;
  }

  return (
    <div>
      Welcome to Contact page
      <h3>
        Need our phone number: <Link to="/contact/phone-number">Click</Link>
      </h3>
    </div>
  );
};

export default Contact;
