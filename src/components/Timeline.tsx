import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2024 - Sep 2024 · 5 mos"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">Osaka, Japan</h4>
            <p>
              - Reduced cloud costs by 50% by optimizing Flutter mobile app state and data models, improving API response times.<br />
              - Automated unit and integration tests using Flutter Mockito, and implemented CI/CD pipelines with GitHub Actions for mobile builds and releases.<br />
              - Led a team of two junior developers, mentoring them on best coding practices and test-driven development.<br />
              - Introduced Agile Scrum methodologies, becoming a Certified Scrum Master and coaching the Product Owner, resulting in successful weekly sprints.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2019 - Apr 2024 · 4 yrs 7 mos"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Osaka, Japan</h4>
            <p>
              - Managed and optimized AWS EC2-based infrastructure, continuously monitoring and maintaining over six AWS-hosted applications.<br />
              - Introduced and deployed a self-hosted GiTea Git server used by 50+ developers, ensuring version control system security and operational efficiency.<br />
              - Developed automated infrastructure provisioning using AWS CDK (Python) to deploy ML-powered search engines on AWS Lambda & ECS.<br />
              - Led the development of eight large-scale data scraping pipelines, automating data ingestion on AWS Batch and deploying updates through Jenkins CI/CD.<br />
              - Enhanced observability and logging by implementing AWS CloudWatch metrics and centralized logging for production workloads.<br />
              - Awarded Software Department Award twice (out of 30 engineers) for outstanding contributions to automation and cloud infrastructure optimization.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2017 - Jun 2019 · 2 yrs 6 mos"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Ulaanbaatar, Mongolia</h4>
            <p>
              Developed various software projects for corporate and government clients, creating complex systems for insurance, legal cases, and customer loyalty portals. Mentored new developers in using Spring and Vue.js frameworks, and we implemented weekly sprints for agile environment.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2016 - Nov 2016 · 3 mos"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Part Time</h3>
            <h4 className="vertical-timeline-element-subtitle">Ulaanbaatar, Mongolia</h4>
            <p>
              During my student years, I worked part-time as a Software Engineer, fixing UI bugs and improving backend functions for a banking app using C# and ASP.NET MVC, before handing off to testers for final verification.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2016 - Nov 2016 · 3 mos"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Ulaanbaatar, Mongolia</h4>
            <p>
              During my internship at Unimedia, I helped build a tool that turns business card images into text using C++ and OpenCV. It was a practical project that improved my coding skills and taught me about creating effective software solutions.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;