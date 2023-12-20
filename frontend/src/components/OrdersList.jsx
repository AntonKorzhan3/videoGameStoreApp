import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { deleteOrder, getList } from "../lib/api/orders";

function OrdersList() {
  // State to hold the list of orders
  const [dataList, setDataList] = useState([]);
  // React Router hook for navigation
  const navigate = useNavigate();

  // Fetch the list of orders when the component mounts
  useEffect(() => {
    fetchList();
  }, []);

  // Function to fetch the list of orders from the API
  const fetchList = async () => {
    try {
      const response = await getList();
      setDataList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle the deletion of an order
  const handleDelete = async (item) => {
    try {
      // Delete the actor from the API
      await deleteOrder(item.id);
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
      <h1>Orders</h1>
      {/* Button to navigate to the "New Order" page */}
      <button
        className="btn btn-primary"
        onClick={() => navigate("/newOrders")}
      >
        Add an Order
      </button>
      <div className="card-deck mt-3">
        {/* Map through the list of orders and display them */}
        {dataList.map((item) => (
          <div className="card mb-3" style={{ width: "18rem" }} key={item.id}>
            <div className="card-body">
              <h5 className="card-title">{item.status}</h5>
              {/* Link to navigate to the "Edit Order" page */}
              <Link
                to={`/editOrders/${item.id}`}
                className="btn btn-primary me-2"
              >
                Edit Order
              </Link>
              {/* Button to delete the order */}
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item)}
              >
                Delete Order
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

export default OrdersList;
