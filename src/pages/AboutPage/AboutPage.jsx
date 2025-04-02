import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2014 - 2015"}
                  timeline_title={"High School "}
                  location={"SVM Kalyanganj, khandwa"}
                  details={
                    "Completed my High School Degree from State Board with 78%."
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2016 - 2017"}
                  timeline_title={"Secondary school"}
                  location={"SVM Kalyanganj, khandwa"}
                  details={
                    "Completed my Degree from State Board with 78% from SVM School, khandwa"
                  }
                />
              </div>
              <div className= {`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2017 - 2020"}
                  timeline_title={"BSC in Computer Science "}
                  location={"Poonam Chand Gupta vocational college,Khandwa"}
                  details={"Completed my Degree from PCGVC  with second division"}
                  img={
                    "https://www.gpkotdwar.org.in/images/gallery/l8THHpO6.jpg"
                  }
                />
              </div>
              <div className= {`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2020 - 2022"}
                  timeline_title={"Masters in Computer Applications"}
                  location={"Medicaps University, Indore, Rau"}
                  details={
                    " completing my Masters Degree in Computer Applications  from Medicaps University"
                  }
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq25wBcbXkIUAg1yyYvwNMT--QIk76V1QFkI0rIdt5Kw&s"
                  }
                />
              </div>
            </div>
          </div>
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
            <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"jul 2021 - 19 Sep"}
                  timeline_title={"FrontEnd Intern"}
                  location={"Affimintus Technologies"}
                  details={
                    "I am working as an FrontEnd Intern"
                  }
                />
              </div>


              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"jan 2022 - Apr 2022"}
                  timeline_title={" Web Developer Intern"}
                  location={"Apoliums Infotech Inida PVT. LTD."}
                  details={
                    "I am working as Web Developer Intern"
                  }
                />
              </div>

              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"May 2022 - Jul 2023"}
                  timeline_title={"SoftWare Developer"}
                  location={"DevRipples Infotech, Indore"}
                  details={
                    "I have worked as a junior developer in DevRipples. "
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"Nov 2023 - Apr 2024"}
                  timeline_title={"Software Developer "}
                  location={"TaskCraft Technologies LLP"}
                  details={
                    "Worked as a Software Developer (ReactJS) in Taskcraft"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

export default AboutPage;
