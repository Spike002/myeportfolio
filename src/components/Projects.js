import React ,{Component}from 'react';
import Header from './Header';
import Footer from './Footer';
import eportfolioImage from '../img/eportfolio.jpg';
import chinesefood from '../img/chinese-food.jpg';


class Projects extends Component {

  componentDidMount() {
       window.scrollTo(0, 0);
   }

  render(){
    return (
      <div>
        <Header />

          <header id="headerproject">
             <div className="container">
                   <div className="content-wrap">
                        <div className="row center-xs center-sm center-md center-lg">
                             <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                  <h1>Intelligent Payload planning software</h1>
                                  <h4>Christopher D Laliberte, NUWC Client, 1176 Howell St, Newport, RI 02841</h4>
                                  <h6>Role: Developer</h6>
                                  <p> Designed and implemented a system that optimized user constraints to produce the best solution of which payload that a submarine has to launch.  Also developed a real time simulation of list view and diagrams, so that users could easily visualize the payload while they were in combat. In addition,  revised and analyzed documents include Risk Analysis Document, Software Architecture Document, and Software Development Plan.
                                  </p>
                             </div>

                        </div>
                   </div>
             </div>
            </header>



          <section id="features">
            <div class="container">
              <div class="row center-xs center-sm center-md center-lg">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <h2>Skills Competency</h2>

                  <div class="row center-xs center-sm center-md center-lg">

                       <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <i class="fab fa-html5"></i>
                        <h4>html5</h4>
                      </div>

                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <i class="fab fa-css3"></i>
                        <h4>css3</h4>
                      </div>

                   <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                      <i class="fab fa-js"></i>
                      <h4>JavaScript</h4>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                      <i class="fab fa-react"></i>
                      <h4>react</h4>
                    </div>


                </div>
                </div>
              </div>
            </div>
          </section>



          <section id="projects">
            <div class="container">
                 <div class="row center-xs center-sm center-md center-lg">
                      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                           <h2>Personal Projects</h2>
                      </div>
                      <div class="col-project col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                           <img src={chinesefood} alt="" />
                           <h5>Example Order Food Online</h5>
                           <p>It is a full stack javascript web applications</p>
                           <a href="http://www.yungriverchinese.com/" target="_blank"><button>View Applications</button></a>
                      </div>

                      <div class="col-project col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
                           <img src={eportfolioImage} alt="eportfolio" />
                           <h5>Personal Eportfolio</h5>
                           <p>It consists collection of my work and projects.</p>
                           <a href="#"><button>View My Eportfolio</button></a>
                      </div>

                 </div>

            </div>
          </section>

        <Footer />
      </div>
    );
  }
}

export default Projects;
