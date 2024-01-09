// import React from "react";
// import "./Support.css";

// import sky from "../Images/sky.png";
// import bg from "../Images/bg.png";
// import left from "../Images/left.png";
// import right from "../Images/right.png";
// import bottom from "../Images/bottom.png";

// function Support() {
//     return (
//         <div className="support">
           
//             <h1>Support</h1>
//             <div className="support-content">
//                 <p><br /><br /><br />
                
//                     <b>Frequently Asked Questions (FAQs)</b> <br /> <br/><br/>
//                     Explore common questions and find quick answers in our FAQ section.<br /><br/>

//                     1.How do I find a guide for a specific location?<br/>
//                     2.What information should I discuss with my chosen guide before the trip?<br/>
//                     3.How do I book a guide for my upcoming journey?<br/>
//                     4.What happens if I need to cancel or reschedule my booking?<br /><br /><br />
//                     <b>Contact Us</b><br /><br/><br/>
//                     We're here to help! Reach out to our support team through the following channels:<br/>

//                     Email: support@disha.com<br/>
//                     Phone: 9319xxxxxx<br/>
//                     Live Chat: to be added soon<br /><br /><br /></p>
                   
//             </div>
//         </div>
//     );
// }

// export default Support;
import React from 'react';
import './Support.css'; // Import your CSS file if you have one

const Support = () => {
  return (
    <section className='support-section'>
      <div className="row-sup">
        <h2 className="section-heading">Frequently Asked Questions(FAQs)</h2>
      </div>
      <div className="row-sup">
        <div className="column-sup">
          <div className="card-sup">
            <div className="icon-wrapper">
              <i className="fas fa-hammer"></i>
            </div>
            <h3 className='question'>How to book a guide?</h3>
            <p>
              Click on the plan you want to choose. Then the live map will recommend you the nearest available guide.
            </p>
          </div>
        </div>
        <div className="column-sup">
          <div className="card-sup">
            <div className="icon-wrapper">
              <i className="fas fa-brush"></i>
            </div>
            <h3 className='question'>What happens if we cancel the guide?</h3>
            <p>If you want to cancel the ride, then 25 rupees will be deducted as a cancellation fee.</p>
          </div>
        </div>
        <div className="column-sup">
          <div className="card-sup">
            <div className="icon-wrapper">
              <i className="fas fa-wrench"></i>
            </div>
            <h3 className='question'>If we like the services of the guide, can we book it again?</h3>
            <p>
              If you want to hire the same guide, then after following the same procedure, the guide will report asap if
              he is free.
            </p>
          </div>
        </div>
        <div className="column-sup">
          <div className="card-sup">
            <div className="icon-wrapper">
              <i className="fas fa-truck-pickup"></i>
            </div>
            <h3 className='question'>What if the guide misbehaves?</h3>
            <p>
              If the guide misbehaves, money will not be paid to them if proper proof is provided against them. A new
              guide will be assigned.
            </p>
          </div>
        </div>
        <div className="column-sup">
          <div className="card-sup">
            <div className="icon-wrapper">
              <i className="fas fa-broom"></i>
            </div>
            <h3 className='question'>Are the guides provided certified?</h3>
            <p>
              During hiring, all the guides are passed through one-on-one sessions and police verification.
            </p>
          </div>
        </div>
        <div className="column-sup">
          <div className="card-sup">
            <div className="icon-wrapper">
              <i className="fas fa-plug"></i>
            </div>
            <h3 className='question'>If tourists don't understand the local language?</h3>
            <p>We train our guides accordingly. For interactive communication with tourists, different languages are taught to the guides.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
