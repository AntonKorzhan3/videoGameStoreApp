import { useState } from "react";
import FormBody from "./OrderItemsForm";
import { createOrderItems } from "../lib/api/order_items";
import { useNavigate } from "react-router-dom";

function NewOrderItems() {
  // State to hold the order item data
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
      // Create a new item using the provided data
      await createOrderItems(value);
      // Navigate back to the main list after successful submission
      navigate("/orderItemsList");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>New Order Item</h1>
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

export default NewOrderItems;
