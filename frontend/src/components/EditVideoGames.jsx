import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateVideoGame, getDetail } from "../lib/api/videoGames";
import FormBody from "./VideoGameForm";

function EditVideoGames() {
  // State to hold the video game data for editing
  const [value, setValue] = useState({
    name: "",
    price: "",
    quantity: "",
    console: "",
    rating: "",
  });

  // Extract the URL parameters using useParams
  const query = useParams();
  // React Router hook for navigation
  const navigate = useNavigate();

  // Fetch game details when the component mounts or the query changes
  useEffect(() => {
    fetchData(query);
  }, [query]);

  // Function to fetch video game details for editing
  const fetchData = async (query) => {
    try {
      const response = await getDetail(query.id);
      const { name, price, quantity, console, rating } = response.data;
      // Set the fetched data in the state for editing
      setValue({
        name,
        price,
        quantity,
        console,
        rating,
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

  // Function to handle form submission for updating video games
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the video game details using the provided data
      await updateVideoGame(query.id, value);
      // Navigate back to the main list after successful update
      navigate("/videoGameList");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Video Game</h1>
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

export default EditVideoGames;
