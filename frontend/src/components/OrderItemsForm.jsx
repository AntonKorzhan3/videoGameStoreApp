function Form({ handleChange, handleSubmit, value, buttonType }) {
  return (
    <form className="container mt-4 p-0">
      {/* Input field for the item name */}
      <div className="mb-3">
        <label htmlFor="item_id" className="form-label">
          Item name:
        </label>
        <input
          type="text"
          className="form-control"
          id="item_id"
          name="item_id"
          onChange={handleChange}
          value={value.item_id || ""}
        />
      </div>
      {/* Input field for the item quantity */}
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">
          Quantity:
        </label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          name="quantity"
          onChange={handleChange}
          value={value.quantity || ""}
        />
      </div>
      {/* Button to submit the form */}
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        {buttonType}
      </button>
    </form>
  );
}

export default Form;
