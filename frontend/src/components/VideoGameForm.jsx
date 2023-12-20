function Form({ handleChange, handleSubmit, value, buttonType }) {
  return (
    <form className="container mt-4 p-0">
      {/* Input field for the video game name */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          onChange={handleChange}
          value={value.name || ""}
        />
      </div>
      {/* Input field for the video game price */}
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price:
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          name="price"
          onChange={handleChange}
          value={value.price || ""}
        />
      </div>
      {/* Input field for the video game quantity */}
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
      {/* Input field for the video game console */}
      <div className="mb-3">
        <label htmlFor="console" className="form-label">
          Console:
        </label>
        <input
          type="text"
          className="form-control"
          id="console"
          name="console"
          onChange={handleChange}
          value={value.console || ""}
        />
      </div>
      {/* Input field for the video game rating */}
      <div className="mb-3">
        <label htmlFor="rating" className="form-label">
          Rating:
        </label>
        <input
          type="number"
          className="form-control"
          id="rating"
          name="rating"
          onChange={handleChange}
          value={value.rating || ""}
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
