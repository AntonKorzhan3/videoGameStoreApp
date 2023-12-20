import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateOrder, getDetail } from "../lib/api/orders";
import FormBody from "./OrdersForm";

function EditOrders() {
  // State to hold the order data for editing
  const [value, setValue] = useState({
    status: "",
  });

  // Extract the URL parameters using useParams
  const query = useParams();
  // React Router hook for navigation
  const navigate = useNavigate();

  // Fetch order details when the component mounts or the query changes
  useEffect(() => {
    fetchData(query);
  }, [query]);

  // Function to fetch order details for editing
  const fetchData = async (query) => {
    try {
      const response = await getDetail(query.id);
      const { status } = response.data;
      // Set the fetched data in the state for editing
      setValue({
        status,
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle changes in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state with the new value for the corresponding input field
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  // Function to handle form submission for updating orders
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the order details using the provided data
      await updateOrder(query.id, value);
      // Navigate back to the main list after successful update
      navigate("/ordersList");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Orders</h1>
      {/* Render the form component with appropriate props */}
      <FormBody
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={value}
        buttonType="Update"
      />
    </div>
  );
}

export default EditOrders;
