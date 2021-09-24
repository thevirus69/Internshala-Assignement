import React from 'react'

export const Navbar = ({refresh}) => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Rest Countries</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-danger me-3" onClick={refresh}>Refresh Data</button>
    <a className="navbar-brand" href="/">Intership Assignment</a>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}
