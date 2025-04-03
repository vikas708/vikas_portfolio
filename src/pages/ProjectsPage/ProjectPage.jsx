import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

// Importing project images
// import teamtrackrIMG from "../../assets/teamtrackrIMG.png";
// import marketingIMG from "../../assets/marketingIMG.png";
// import travelHookIMG from "../../assets/travelhookIMG.png";
// import safecamIMG from "../../assets/safecamIMG.png";
// import quizIMG from "../../assets/quizIMG.png";
// import weatherAppImg from '../../assets/weaht.png';
import petWatch  from '../../assets/petwatch.png';
import Updatenews from '../../assets/Updatenews.png'; 
import cardusability from '../../assets/cardUsability.png'; 
import ImageEditor from '../../assets/ImageEditor.png'; 


// Project data array
const projectData = [
 
  {
    previewLink: "https://petwatchapp.com/",
    githubLink: "",
    projectName: "Pet watch",
    projectDetails: "A pet transportation and care service app offering walking, sitting, grooming, and real-time notifications.",
    demoImage: petWatch,
    skills: [
      "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
      "https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
    ]
  },
  {
    previewLink: "https://nvnews.netlify.app/",
    githubLink: "https://github.com/vikas708/Update_news_project",
    projectName: "Updatenews",
    projectDetails: "Employee Data Management System to store and access employee data.",
    demoImage: Updatenews,
    skills: [
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
    ]
  },
  {
    previewLink: "cardusability.netlify.app",
    githubLink: "https://github.com/vikas708/clone_usability_hub",
    projectName: "cardusability",
    projectDetails: "Responsive, mobile-friendly static webapplication using HTML, CSS.",
    demoImage: cardusability,
    skills: [
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    ]
  },
  {
    previewLink: "https://neweditor.netlify.app/",
    githubLink: "https://github.com/vikas708/image_editor",
    projectName: "Image Editor",
    projectDetails: "An image editor built with HTML, CSS, and JavaScript, offering essential editing features and customization.",
    demoImage: ImageEditor,
    skills: [
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
    ]
  },
  {
    previewLink: "",
    githubLink: "",
    projectName: "BamApp3Youtubekidz",
    projectDetails: "Bamaap3YouTubeKidz is a kid-friendly video platform that rewards children with badges for watching educational content.",
    demoImage: "",
    skills: [
      "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
    ]
  },
  {
    previewLink: "",
    githubLink: "",
    projectName: "Jeddah House of commerce",
    projectDetails: "Jeddah House of Commerce is a platform where company owners list debt-ridden businesses for potential buyers.",
    demoImage: "",
    skills: [
      "https://cdn.worldvectorlogo.com/logos/react-2.svg",
      "https://cdn.worldvectorlogo.com/logos/html-1.svg",
      "https://cdn.worldvectorlogo.com/logos/css-3.svg",
      "https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
    ]
  },
];

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right="-6rem" top="-8rem" />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title="My Projects" />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className={styles.projects_component}
          >
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                previewLink={project.previewLink}
                githubLink={project.githubLink}
                projectName={project.projectName}
                projectDetails={project.projectDetails}
                demoImage={project.demoImage}
                skill_img={project.skills}
              />
            ))}
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="component_container"
      />
    </div>
  );
}

export default Projects;
