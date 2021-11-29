const FormSection = () => {
  return (
    <div className="formsection">
      <div className="form-text">Start sending and receiving dollars today</div>
      <div className="form-area">
        <div className="hero-form">
          <input type="email" placeholder="Enter your email address" />
          <button>Sign me up</button>
        </div>
        <div className="hero-form-label">Enter email address to win $2000</div>
      </div>
    </div>
  );
};
export default FormSection;
