import React from 'react'

const SandBox = () => {
  return (

    <div className="row justify-content-center">
    <div className="col-md-6 col-sm-12 no-padding ">
    <div className="login-form">
<form  onSubmit={handleSubmit}>
      
  <div className="col-md-6">
    <label htmlFor="email" className="form-label">Email</label>
    <input 
    onChange={handleChange}
    name = 'email'
    type="text" 
    value={formValues.email}
    className="form-control" 
    id="inputEmail4" 
    required
    />
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input 
    onChange={handleChange}
    type="password"
    name="password"
    value={formValues.password}
    required
    className="form-control" 
    id="inputPassword4"
    />
  </div>
  <div className="col-6">
    <button 
    type="submit" 
    disabled={
      !formValues.email ||
      !formValues.password
  }
    className="btn btn-primary">Login</button>
  </div>
</form>
</div>
</div>
    </div>
  )
}

export default SandBox