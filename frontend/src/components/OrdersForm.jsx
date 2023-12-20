function Form({ handleChange, handleSubmit, value, buttonType }) {
  return (
    <form className="container mt-4 p-0">
      {/* Input field for the orders status */}
      <div className="mb-3">
        <label htmlFor="status" className="form-label">
          Status:
        </label>
        <input
          type="text"
          className="form-control"
          id="status"
          name="status"
          onChange={handleChange}
          value={value.status || ""}
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
