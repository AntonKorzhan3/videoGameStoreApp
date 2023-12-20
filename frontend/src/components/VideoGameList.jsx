import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { deleteVideoGame, getList } from "../lib/api/videoGames";

function VideoGameList() {
  // State to hold the list of video games
  const [dataList, setDataList] = useState([]);
  // React Router hook for navigation
  const navigate = useNavigate();

  // Fetch the list of actors when the component mounts
  useEffect(() => {
    fetchList();
  }, []);

  // Function to fetch the list of video games from the API
  const fetchList = async () => {
    try {
      const response = await getList();
      setDataList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle the deletion of an video game
  const handleDelete = async (item) => {
    try {
      // Delete the video game from the API
      await deleteVideoGame(item.id);
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
      <h1>Video Games</h1>
      {/* Button to navigate to the "New Video Game" page */}
      <button
        className="btn btn-primary"
        onClick={() => navigate("/newVideoGames")}
      >
        Add
      </button>
      <div className="card-deck mt-3">
        {/* Map through the list of video games and display them */}
        {dataList.map((item) => (
          <div className="card mb-3" style={{ width: "20rem" }} key={item.id}>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-text text-muted">Price: {item.price}</h6>
              <h6 className="card-text text-muted">
                Quantity: {item.quantity}
              </h6>
              <h6 className="card-text text-muted">Console: {item.console}</h6>
              <h6 className="card-text text-muted">Rating: {item.rating}</h6>
              {/* Link to navigate to the "Edit Video Game" page */}
              <Link
                to={`/editVideoGames/${item.id}`}
                className="btn btn-primary me-2"
              >
                Edit
              </Link>
              {/* Button to delete the video game */}
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item)}
              >
                Delete
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

export default VideoGameList;
