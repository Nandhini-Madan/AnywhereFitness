import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import fitness1 from "../asserts/fitness1.jpg";
import fitness2 from "../asserts/fitness2.jpg";
import fitness3 from "../asserts/fitness3.jpg";
import heading1 from "../asserts/Heading1.jpg";
import heading2 from "../asserts/Heading2.jpg";
import heading3 from "../asserts/Heading3.jpg";
const Home=()=>{
    return(
        <>
        <Carousel >
        <Carousel.Item>
          <img
            className="a-block w-75"
            src={fitness1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="b-block w-75"
            src={fitness2}
            alt="Second slide"
            style={{ width: "500px" }}
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="c-block w-75"
            src={fitness3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br></br>
      <div class="container marketing">

        {// <!-- Three columns of text below the carousel -->
        }
        <div class="row">
          <div class="col-lg-4">
            <img src={heading1} class="img-thumbnail" alt="..." />

            <h2>Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
            <p><a class="btn btn-secondary" href="..">View details »</a></p>
          </div>
          {//<!-- /.col-lg-4 -->
          }
          <div class="col-lg-4">
            <img src={heading2} class="img-thumbnail" alt="..." />

            <h2>Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a class="btn btn-secondary" href="..">View details »</a></p>
          </div>
          {//<!-- /.col-lg-4 -->
          }
          <div class="col-lg-4">
            <img src={heading3} class="img-thumbnail" alt="..." />

            <h2>Heading</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a class="btn btn-secondary" href="..">View details »</a></p>
          </div>
          {//</div><!-- /.col-lg-4 -->
          }
        </div>


        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
            <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div class="col-md-5">
            <img src={fitness3} class="img-thumbnail" alt="..." />

          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
            <p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img src={fitness3} class="img-thumbnail" alt="..." />

          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
            <p class="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
          </div>
          <div class="col-md-5">
            <img src={fitness3} class="img-thumbnail" alt="..." />

          </div>
        </div>

        <hr class="featurette-divider"></hr>

        {//<!-- /END THE FEATURETTES -->
        }

      </div>
        </>
    )
}

export default Home;