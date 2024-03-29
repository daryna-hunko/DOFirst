class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          &copy; Слеплено Inc.
        </div>
      </footer>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <h3 className="logo"><span>DO</span>First</h3>
            </div>
            <div className="col">
              <div className="nav">
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#login">
                      Sign In
                  </button>
                  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#registrate">
                      Sign Up
                  </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="cover-page">
          <div className="container">
            <div className="row">
              <div className="col">
                  <h1 className="logo"><span>DO</span>First</h1>
                  <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                  <p className="lead">
                    <a href="#" className="btn btn-lg btn-secondary" data-toggle="modal" data-target="#registrate">Sign Up</a>
                    <a href="#" className="btn btn-lg btn-secondary" data-toggle="modal" data-target="#login">Sign In</a>
                  </p>
              </div>
              <div className="col">
                  
              </div>
            </div>
          </div>
        </div>
        
      </main>
    );
  }
}


class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Main/>
        <Footer/>
      </React.Fragment>
    )
  }
}










ReactDOM.render(
<Content/>,
document.getElementById('root')
);