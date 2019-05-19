import React ,{Component} from 'react';
import kidwordshop from '../img/teen-kids-workshop.jpg';
import teenprogramming from '../img/teen-programming.jpg';

import Header from './Header';
import Footer from './Footer';



class Experience extends Component{

  componentDidMount() {
       window.scrollTo(0, 0);
   }

   render() {
     return(

       <div>
       <Header />
       <header id="headerexperience">

            <div className="container">
                  <div className="content-wrap">

                       <div className="row center-xs center-sm center-md center-lg">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                 <h1>Hello, I'm Soravath</h1>
                                 <h4>A Web Developer </h4>
                                 <p>Design and build responsive
                                      websites for multiple devices.
                                 </p>
                            </div>

                       </div>
                  </div>
            </div>


       </header>


       { /* section-1  */}

         <section id="features">
           <div className="container">
             <div className="row center-xs center-sm center-md center-lg">
               <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                 <h2>Practical Experience with</h2>

                 <div className="row center-xs center-sm center-md center-lg">
                   <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                     <i className="fas fa-desktop"></i>
                     <h4>Desktop Applications</h4>
                   </div>

                   <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                     <i className="fas fa-tachometer-alt"></i>
                     <h4>Web Applications</h4>
                   </div>

                   <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                     <i className="fas fa-mobile-alt"></i>
                     <h4>Mobile Applications</h4>
                   </div>

               </div>
               </div>
             </div>
           </div>
         </section>

         { /* section-2  */}
         <section id="experience">
             <div className="container">
                  <div className="content-wrap">
                       <div className="content-wrap">
                            <div className="row center-xs center-sm start-md start-lg">
                                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                      <div className="text-wrap">
                                           <h2>Working Experience</h2>
                                           <p>A web developer at <a href="https://plumdirectmarketing.com/" target="_blank">Plum Direct Marketing in Dartmouth, Massachusetts</a> <em>March 2019 - present</em>
                                                <ul>
                                                     <li>Design, create mock-up ,and build websites with CMS WordPress</li>
                                                     <li>Plus manage, maintain, and update websites and integrate with new technology.</li>
                                                     <li>Also design and optimize responsive websites: desktop, table and mobile</li>

                                                     <li>Assist in finding out internal technical solution</li>
                                                     <li>Design and customize photos, images, icons, SVG graphics with Adobe Suite</li>
                                                     <li>Manage multiple projects simultaneously</li>
                                                </ul>
                                          </p>

                                       </div>
                                 </div>
                                 <div className="col-xs-12  col-sm-12 col-md-12 col-lg-6">
                                     <img src={teenprogramming}/>

                                 </div>
                            </div>
                       </div>
                  </div>
             </div>
         </section>

      {/* section-3  */}
        <section id="education">
            <div className="container">
                 <div className="content-wrap">
                         <div className="row center-xs center-sm start-md start-lg">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                     <div className="text-wrap">
                                          <h2>Volunteer Experiece</h2>
                                          <p>An adult team coach of Science,
                                            Technology, Engineering, Mathematics,
                                            (STEM) Club, at Bristol Community College.<em>Jan 2016 - Jan 2017</em>
                                            <ul>
                                                <li>Assisted the team leader prepare and organize
                                                      Vex robotics competition club events</li>
                                                <li>Supported students to explore learning
                                                     skills of communication, collaboration, and
                                                     critical thinking and creativity, important attributes
                                                     to learn in the field of science. </li>
                                            </ul>
                                         </p>
                                      </div>
                                </div>
                                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 first-lg ">
                                      <img src={kidwordshop}/>

                                </div>
                           </div>
                 </div>
            </div>
        </section>
        <Footer />
        </div>
     );
   }


}

export default Experience;
