import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fitness1 from "../src/asserts/fitness1.jpg";
import fitness2 from "../src/asserts/fitness2.jpg";
import fitness3 from "../src/asserts/fitness3.jpg";
import './App.scss';
function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="">AnywhereFitness</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Login</a>
              <a className="nav-link" href="">Register</a>
              <a className="nav-link" href="">classes</a>
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={fitness1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={fitness2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={fitness3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      <div class="container marketing">

        {// <!-- Three columns of text below the carousel -->
        }
        <div class="row">
          <div class="col-lg-4">
          <img src={fitness3} class="img-thumbnail" alt="..."/>

            <h2>Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          {//<!-- /.col-lg-4 -->
          }
          <div class="col-lg-4">
          <img src={fitness2} class="img-thumbnail" alt="..."/>

            <h2>Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          {//<!-- /.col-lg-4 -->
          }
          <div class="col-lg-4">
          <img src={fitness1} class="img-thumbnail" alt="..."/>

            <h2>Heading</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a class="btn btn-secondary" href="#">View details »</a></p>
          </div>
          {//</div><!-- /.col-lg-4 -->
          }
        </div>
        {
          //<!-- /.row -->
        }

        {//<!-- START THE FEATURETTES -->
        }


        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div class="col-md-5">
          <img src={fitness3} class="img-thumbnail" alt="..."/>

          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div class="col-md-5 order-md-1">
          <img src={fitness3} class="img-thumbnail" alt="..."/>

          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
            <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
          </div>
          <div class="col-md-5">
          <img src={fitness3} class="img-thumbnail" alt="..."/>

          </div>
        </div>

        <hr class="featurette-divider"></hr>

        {//<!-- /END THE FEATURETTES -->
        }

      </div>
      <div className="Footer">
        <div>
          <p>&copy;{(new Date().getFullYear())} Nandhini Madan | All rights reserved | Terms Of Service | Privacy</p>
        </div>
        <div className="legal__links">
          <span>Made with <span className="heart">♥</span> Nandhini Madan</span>
        </div>

      </div>
    </div>

  );
}

export default App;
