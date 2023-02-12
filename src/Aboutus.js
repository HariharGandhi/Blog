import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import PsychologyIcon from '@mui/icons-material/Psychology';
import Footer from "./Footer";
import Navigationbar from "./Navbar";
import './aboutus.css'
import { List } from "semantic-ui-react";

function Aboutus() {
  return (
    <div className="aboutus">
        <Navigationbar/><br/>
      <div className="box" style={{display: 'flex',justifyContent: 'center'}}><img src="/Profile pic.jpeg" alt="Err" style={{width:"250px",height:"250px"}}></img></div><hr></hr>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            De Paul English Medium School, Yeola 
          </h3>
          <h4>SSC</h4>
          <p style={{fontWeight:'bold'}}>95.20 %</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Swami Muktanand Junior College, Yeola
          </h3>

          <h3 className="vertical-timeline-element-subtitle">
            HSC
          </h3>

          <p style={{fontWeight:'bold'}} >82.60 %</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            SRES Sanjivani College of Engineering, Kopargaon
          </h3>

          <h3 className="vertical-timeline-element-subtitle">
            Computer Engineering
          </h3>

          <p style={{fontWeight:'bold'}} >8.88 C.G.P.A (till 7th semester)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="8/2022 - 9/2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Development and Designing Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Oasis Infobyte
          </h4>
          <p>Developed the frontend assignments required.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="8/2022 - 9/2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Published Patent
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            'Smart Medical Waste Management System using IOT'
          </h4>
          <p>Published on ipindia.org in June.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<PsychologyIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Technical Skills
          </h3>
          <h6 className="vertical-timeline-element-subtitle">
          <List bulleted>
            <List.Item>React.JS</List.Item>
            <List.Item>MEAN Stack</List.Item>
            <List.Item>C</List.Item>
            <List.Item>C++</List.Item>
            <List.Item>Core Java</List.Item>
            <List.Item>Python</List.Item>
            <List.Item>SQL</List.Item>
          </List>
          </h6>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <hr></hr>
      <Footer />
    </div>
  );
}

export default Aboutus;