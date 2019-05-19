import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class Education extends Component {

  componentDidMount() {
       window.scrollTo(0, 0);
   }

  render () {
    return(

      <div>
        <Header />
          <div>
            <header id="headereducation">
               <div className="container">
                       <div className="content-wrap">
                            <div className="row center-xs center-sm center-md center-lg">
                                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                      <h1>University of Massachusetts Dartmouth</h1>
                                      <h4>Bachelor degree of Computer Information System </h4>
                                      <p>
                                      </p>
                                 </div>

                            </div>
                       </div>
                 </div>
            </header>


              <section id="courses">
                   <div className="container">
                        <div className="content-wrap">
                             <h3>Completing a bachelor degree in computer science
                              as a full time student maintaining a high GPA in academic
                              subjects while working near full time hours weekly.</h3>

                        </div>

                   </div>

              </section>
          </div>

        <Footer />
      </div>
    );
  }

}

export default Education;
