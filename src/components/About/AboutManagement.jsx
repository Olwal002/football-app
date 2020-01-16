import React from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
const AboutManagement = () => {
  return (
    <div className="container">
       <div className="p-3 bg-secondary my-2 rounded">
        <Toast>
          <ToastHeader>
            MANAGEMENT
          </ToastHeader>
          <ToastBody>
          <div>
        <div className="image-logo"></div>
        <h1>Nyatindo Patrick</h1>
        <p>CEO</p>
        <p>He is the founder of KCFA</p>
      </div><br/>

      <div>
        <div className="image-lg"></div>
        <h1>Isaac Obuya</h1>
        <p>Games Inspector</p>
        <p>He makes sure the games are played per the schedule</p>
      </div><br/>

      <div>
        <div className="image-lv"></div>
        <h1>Trevor Omondi</h1>
        <p>Training Coordinator</p>
        <p>Trainings in football technical skills like Coaching,<br/> Refereeing,
           Team Management, Life Skills (Informed Decision Making) <br/>and Sports Injury Management
</p>
      </div><br/>
          </ToastBody>
        </Toast>
      </div>
  

      
      
    </div>
  );
};

export default AboutManagement;
