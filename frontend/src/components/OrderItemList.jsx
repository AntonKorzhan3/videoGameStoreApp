import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { deleteOrderItems, getList } from "../lib/api/order_items";

function OrderItemList() {
  // State to hold the list of order items
  const [dataList, setDataList] = useState([]);
  // React Router hook for navigation
  const navigate = useNavigate();

  // Fetch the list of items when the component mounts
  useEffect(() => {
    fetchList();
  }, []);

  // Function to fetch the list of order items from the API
  const fetchList = async () => {
    try {
      const response = await getList();
      setDataList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle the deletion of an item
  const handleDelete = async (item) => {
    try {
      // Delete the actor from the API
      await deleteOrderItems(item.id);
      // Remove the deleted item from the dataList state
      setDataList((prevDataList) =>
        prevDataList.filter((dataItem) => dataItem.id !== item.id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Order Items</h1>
      {/* Button to navigate to the "New Order Item" page */}
      <button
        className="btn btn-primary"
        onClick={() => navigate("/newOrderItems")}
      >
        Add Item
      </button>
      <div className="card-deck mt-3">
        {/* Map through the list of items and display them */}
        {dataList.map((item) => (
          <div className="card mb-3" style={{ width: "18rem" }} key={item.id}>
            <div className="card-body">
              <h5 className="card-title">{item.item_id}</h5>
              <h6 className="card-text text-muted">
                Quantity: {item.quantity}
              </h6>
              {/* Link to navigate to the "Edit Order Item" page */}
              <Link
                to={`/editOrderItems/${item.id}`}
                className="btn btn-primary me-2"
              >
                Edit Item
              </Link>
              {/* Button to delete the item */}
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item)}
              >
                Delete Item
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-danger" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default OrderItemList;
