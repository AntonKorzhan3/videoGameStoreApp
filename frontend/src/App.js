import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import VideoGameList from "./components/VideoGameList";
import OrdersList from "./components/OrdersList";
import OrderItemList from "./components/OrderItemList";
import EditVideoGames from "./components/EditVideoGames";
import EditOrders from "./components/EditOrders";
import EditOrderItems from "./components/EditOrderItems";
import NewVideoGame from "./components/NewVideoGames";
import NewOrders from "./components/NewOrders";
import NewOrderItems from "./components/NewOrderItems";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/videoGameList" element={<VideoGameList />} />
        <Route path="/ordersList" element={<OrdersList />} />
        <Route path="/orderItemsList" element={<OrderItemList />} />
        <Route path="/editVideoGames/:id" element={<EditVideoGames />} />
        <Route path="/editOrders/:id" element={<EditOrders />} />
        <Route path="/editOrderItems/:id" element={<EditOrderItems />} />
        <Route path="/newVideoGames" element={<NewVideoGame />} />
        <Route path="/newOrders" element={<NewOrders />} />
        <Route path="/newOrderItems" element={<NewOrderItems />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
