import "./Form.scss";

function Form() {
  return (
    <>
      <div>Form Component</div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="textarea" className="form-label">
          Example textarea
        </label>
        <textarea className="form-control" id="textarea" rows="3"></textarea>
        <label htmlFor="input-main" className="form-label">
          input-main
        </label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="input-main"
          placeholder=".form-control-lg"
          aria-label=".form-control-lg example"
        />
        <label htmlFor="input-default" className="form-label">
          input-default
        </label>
        <input
          className="form-control"
          type="text"
          id="input-default"
          placeholder="Default input"
          aria-label="default input example"
        />
        <label htmlFor="input-small" className="form-label">
          input-small
        </label>
        <input
          className="form-control form-control-sm"
          type="text"
          id="input-small"
          placeholder=".form-control-sm"
          aria-label=".form-control-sm example"
        />
      </div>
    </>
  );
}

export default Form;
