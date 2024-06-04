/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a PhD candidate in an ARC Discovery Project, actively working with artificial intelligence (AI) technologies and possessing profound experience in novel AI/ML-based research to solve real-life multi-disciplinary challenges. I have substantial experience in AI-driven medical image analysis (ultrasound, neuro-imaging) for cancer research, focusing on early diagnosis. Additionally, I worked in AI-driven geotechnical engineering, specifically for analyzing landslide susceptibility and soil quality. Furthermore, I have active leadership experiences such as working as an evangelist in the Machine Learning for Operations (MLOps), leading and contributing to the Microsoft Student Ambassador community in the Asia-Pacific region. I aim to expand my knowledge further and utilize it to develop more AI-driven solutions for solving complex real-world challenges.I am a PhD candidate in an ARC Discovery Project, actively working with artificial intelligence (AI) technologies and possessing profound experience in novel AI/ML-based research to solve real-life multi-disciplinary challenges. I have substantial experience in AI-driven medical image analysis (ultrasound, neuro-imaging) for cancer research, focusing on early diagnosis. Additionally, I worked in AI-driven geotechnical engineering, specifically for analyzing landslide susceptibility and soil quality. Furthermore, I have active leadership experiences such as working as an evangelist in the Machine Learning for Operations (MLOps), leading and contributing to the Microsoft Student Ambassador community in the Asia-Pacific region. I aim to expand my knowledge further and utilize it to develop more AI-driven solutions for solving complex real-world challenges.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Machine Learning",
  "Deep Learning",
  "Python Programming",
  "Data Analysis",
  "Community Leadership",
  "Public Speaking and Debating",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote = "I am highly self-motivated to constantly solve real life challenges.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
