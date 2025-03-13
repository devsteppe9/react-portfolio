import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <p>
                    I am a DevOps Engineer with 7+ years of experience in software development and infrastructure automation, holding AWS DevOps Professional and Kubernetes CKAD certifications. My expertise lies in designing, deploying, and maintaining AWS-based infrastructures, automating CI/CD pipelines, and optimizing cloud-based deployments using Kubernetes and AWS CDK. I have a strong background in Docker, Jenkins, GitHub Actions, and AWS services (ECS, Lambda, Batch, EC2, IAM). Passionate about cloud-native development, infrastructure as code (IaC), and system reliability, I continuously explore emerging technologies and best practices.
                </p>
                <div className="certifications-container">
                    <h2>Certifications</h2>
                    <div className="certifications-grid">
                        <img className="certification-img" src="https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" alt="AWS Certification" />
                        <img className="certification-img" src="https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png" alt="Linux Foundation Certification" />
                        <img className="certification-img" src="https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png" alt="Scrum Certification" />
                        <img className="certification-img" src="https://images.credly.com/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png" alt="Devops" />
                        <img className="certification-img" src="https://images.credly.com/size/680x680/images/cc8adc83-1dc6-4d57-8e20-22171247e052/blob" alt="Japan Foundation Certification" />
                        <img className="certification-img" src="https://images.credly.com/size/680x680/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png" alt="Scrum master" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
