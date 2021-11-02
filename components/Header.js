import React, { useState, useEffect } from 'react'
import { signIn, signOut, getProviders, useSession } from 'next-auth/client'

const Header = () => {

  const [session, loading] = useSession();
  const [providers, setProviders] = useState()

  var button;

  useEffect(async () => {
    const newProviders = await getProviders()
    setProviders(newProviders)
  }, [])

  if (session) {
    button = <button className="btn btn-secondary" onClick={signOut}>Logout</button>;
  }
  else {
    button = <button className="btn btn-primary" onClick={signIn}>Login</button>;
  }

  return (
    <div className="row mb-4">
      <div className="col-lg-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Home</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="dashboard">Movies</a>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {button}
            </div>
            {
              providers && Object.values(providers).map(provider => 
                  <button style={{lineHeight: '0px'}} variant={'contained'} color={'primary'} onClick={() => signIn(provider.id)}>
                      <span>Sign In with </span>
                      <div><img style={{width: '80px'}} src={'../static/okta.png'} /></div>
                  </button>
              )
            }
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header