import React from "react";
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

function LeagueTournaments() {
  return (
    <div className="container">      
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
            TOURNAMENTS
          </ToastHeader>
          <ToastBody>
          <div className="tour">
        <h>KCFA Ladies Nationwide Tournament</h>
        <p>
          The Tournament is scheduled on 12th of April to 5th of May yearly.
          Draws upon teams from all over Kenya for a 3-day competition combined
          with mentorship activities. The event currently allows a total of 20
          girls’ teams to register in Under-15 and Free Age categories. While
          the girls get to play football, there are plenty of female empowerment
          activities lined up including motivational speeches, mentorship
          sessions, cultural exchanges and focus group discussions on HIV/AIDS,
          goal setting and rights of the girl child
        </p>
      </div>
      <div className="tour">
        <h>KCFA Men Nationwide Tournament</h>
        <p>
          The 3 day event had three major objectives 
          1.Provide an annual highquality football tournament to upcoming talents in Kenya. 
          2. Providean annual positive platform for mentorship, role modeling,
          experiential learning and inspiration of kids and youths in Kenya. 
          3.Promoting the voice of the Youths and enhancing their
          participation in the society. 
          To achieve the above objectives, KCFAmobilized 1232 boys 32 teams to
          the three day event. Theteams came from nine (9) different counties in Kenya. There were 10
          U15 players and 12 Free age players. Draws upon teams from all over
          Kenya for a 3-day competition combined with mentorship activities. The
          event currently allows a total of 32 teams to register in
          Under-15 and Free Age categories. While the teams get to play
          football, there are plenty of youth empowerment activities lined up
          including motivational speeches, mentorship sessions, cultural
          exchanges and focus group discussions on HIV/AIDS, goal setting and
          rights of the youths. 
        </p>
      </div>
      <div className="tour">
        <h>KCFA Youth Leagues</h>
        <p>
         It will aim at promoting the talents including the leagues from under 10,under 12,
         under 14 and the under 16.The winning team from leagues will be awarded with prizes 
         including team uniforms and boots
        </p>
      </div>
          </ToastBody>
        </Toast>
      </div>      

      
    </div>
  );
}
export default LeagueTournaments;
