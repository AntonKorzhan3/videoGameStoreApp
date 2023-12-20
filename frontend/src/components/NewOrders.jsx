import { useState } from "react";
import FormBody from "./OrdersForm";
import { createOrder } from "../lib/api/orders";
import { useNavigate } from "react-router-dom";

function NewOrders() {
  // State to hold the order data
  const [value, setValue] = useState({});
  // React Router hook for navigation
  const navigate = useNavigate();

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state with the new value for the corresponding input field
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a new order using the provided data
      await createOrder(value);
      // Navigate back to the main list after successful submission
      navigate("/ordersList");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>New Order</h1>
      {/* Render the form component with appropriate props */}
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Add"
      />
    </div>
  );
}

export default NewOrders;
