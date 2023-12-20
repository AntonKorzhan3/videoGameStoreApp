import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateOrderItems, getDetail } from "../lib/api/order_items";
import FormBody from "./OrderItemsForm";

function EditOrderItems() {
  // State to hold the order items data for editing
  const [value, setValue] = useState({
    item_id: "",
    quantity: "",
  });

  // Extract the URL parameters using useParams
  const query = useParams();
  // React Router hook for navigation
  const navigate = useNavigate();

  // Fetch item details when the component mounts or the query changes
  useEffect(() => {
    fetchData(query);
  }, [query]);

  // Function to fetch order item details for editing
  const fetchData = async (query) => {
    try {
      const response = await getDetail(query.id);
      const { item_id, quantity } = response.data;
      // Set the fetched data in the state for editing
      setValue({
        item_id,
        quantity,
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

  // Function to handle form submission for updating order items
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the items details using the provided data
      await updateOrderItems(query.id, value);
      // Navigate back to the main list after successful update
      navigate("/orderItemsList");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Order Item</h1>
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

export default EditOrderItems;
