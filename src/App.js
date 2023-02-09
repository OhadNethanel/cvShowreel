import { motion } from "framer-motion";
import "./App.css";
import ProfileInfo from "./components/ProfileInfo";
import ProfileLinks from "./components/ProfileLinks";
import ProfilePhoto from "./components/ProfilePhoto";
import Modal from "react-modal";
import { useState } from "react";
import PhotoCarousel from "./components/PhotoCarousel";
import {
  backofficePhotos,
  digitalWalletPhotos,
  dihivesAppPhotos,
} from "./config/photoCarouselList";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
function App() {
  const profilePicture = require("./Assets/profile.png");
  const fullProfilePicture = require("./Assets/fullProfilePicture.jpeg");
  const [photoModalView, setPhotoModalView] = useState(false);
  return (
    <div style={{ padding: 15, gap: 10, display: "flex" }}>
      {/* Full Profile Picture Modal */}
      <Modal
        onRequestClose={() => {
          setPhotoModalView(false);
        }}
        isOpen={photoModalView}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.6)",
          },
          content: {
            top: "50%",
            left: "50%",
            height: "90%",
            alignItems: "center",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
          },
        }}
        contentLabel="Full Profile Picture"
      >
        <img
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            resize: "contain",
          }}
          src={fullProfilePicture}
          alt="My Profile Photo"
        />
      </Modal>

      {/* Profile DIV */}
      <div>
        <div style={{ width: 300 }} />
      </div>
      <motion.div
        drag
        dragTransition={{
          min: 0,
          max: 0,
          bounceDamping: 8,
        }}
        style={{
          paddingBlock: 20,
          border: "1px solid black",
          backgroundImage: `linear-gradient(to right, #d7d2cc,#304352)`,
          // backgroundColor:'green',
          borderRadius: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          position: "fixed",
        }}
      >
        <ProfilePhoto
          onClick={() => setPhotoModalView(true)}
          image={profilePicture}
        />
        <ProfileInfo
          info={{
            fullName: "Ohad Nethanel",
            profession: "Full-Stack Software Engineer",
            location: "Tel Aviv, IL",
            phone: "0546689200",
            email: "ohadnethanel@gmail.com",
          }}
        />
        <ProfileLinks
          urls={{
            linkedin: "https://www.linkedin.com/in/ohad-nethanel",
            github: "https://github.com/ohadnethanel",
            facebook: "https://www.facebook.com/OhadNethanel/",
            cv: "https://docs.google.com/document/d/1zMdXQ-4iTqmyNgnSfzgnCRuO1b9T7giiQ7tXzAkaySc/edit?usp=share_link",
          }}
        />
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {/* About Me DIV */}
        <motion.div
          // initial={{ y: "-300%", x: "0" }}
          // transition={{ duration: 2 }}
          // animate={{ y: "calc(0vw - 0%)", x: "calc(0vw - 0%)" }}

          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          style={{
            // backgroundImage: `linear-gradient(to bottom, #f5f7fa,#c3cfe2)`,
            backgroundImage: `linear-gradient(to left, #434343,#304352)`,
            color: "white",
            border: "1px solid black",
            borderRadius: 20,
            padding: 10,

            display: "flex",
            flexDirection: "column",
            //
          }}
        >
          <h2 style={{ textAlign: "center" }}>🔖 About Me</h2>
          <h4 style={{padding: 5, fontSize:20, }}>Hello! I'm Ohad Nethanel</h4>

          <label style={{ padding: 5 }}>
            I am a Full Stack Software Engineer with over 1 year of experience
            in the industry. I am driven by a passion for technology and a
            desire to learn and grow as a professional. I have a strong
            commitment to delivering high-quality software solutions and have a
            proven track record of success. I am an autodidact and fast learner
            with exceptional social, communication, and presentation skills. I
            believe in the power of teamwork and collaboration, and am always
            open to learning from others. I am a self-starter, dedicated,
            responsible, and organized professional who is seeking an
            entry-level position for further professional development.
          </label>
        </motion.div>

        {/* My Exp DIV */}
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 4 }}
          style={{
            // backgroundImage: `linear-gradient(to bottom, #f5f7fa,#c3cfe2)`,
            backgroundImage: `linear-gradient(to left, #414343,#304352)`,
            color: "white",
            border: "1px solid black",
            borderRadius: 20,
            padding: 10,

            display: "flex",
            flexDirection: "column",
            //
          }}
        >
          <h2 style={{ textAlign: "center" }}>👷‍♂️ My Experience</h2>

          <label>
            My experience as a Full Stack Engineer at Credics Technologies, a
            fintech solutions company, has equipped me with the skills and
            knowledge necessary to lead software projects from design to
            implementation and deployment. During my time at Credics
            Technologies, I was responsible for the development of a Wallet
            Mobile App using React-Native, Node.js, and OracleDB. This project
            supports hands-free payment and transactions between users, and I
            was able to deliver it successfully, on-time and within budget.
            Additionally, I worked on an e-commerce finance management system
            that integrated a rule-based engine with a React front-end
            management page, built using Node.js. Prior to my experience at
            Credics Technologies, I worked as a Security Operations Analyst at
            IBM. In this role, I was responsible for monitoring and operating
            highly classified and important services, and I developed my skills
            in security analysis and incident response. I also built tools to
            improve the system's functionality and managed and protected
            critical systems.
          </label>
        </motion.div>

        {/* My Portfolio DIV */}
        <motion.div
          // initial={{ y: "-300%", x: "0" }}
          // transition={{ duration: 2.5 }}
          // animate={{ y: "calc(0vw - 0%)", x: "calc(0vw - 0%)" }}

          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 5 }}
          style={{
            // backgroundImage: `linear-gradient(to right, #93a5cf,#e4efe9)`,
            backgroundImage: `linear-gradient(to left, #434343,#304352)`,
            color: "white",
            border: "1px solid black",
            borderRadius: 20,
            padding: 10,

            display: "flex",
            flexDirection: "column",
            //
          }}
        >
          <h2 style={{ textAlign: "center" }}>🏭 My Project Portfolio</h2>

          <Tabs>
            <TabList>
              <Tab>End to end payment system</Tab>
              <Tab>Cryptocurrency insurance</Tab>
              <Tab>Wallet mobile app</Tab>
            </TabList>

            <TabPanel>
              <PhotoCarousel
                photosArray={backofficePhotos}
                imgStyle={{ width: "80%" }}
              />
            </TabPanel>
            <TabPanel>
              <PhotoCarousel photosArray={dihivesAppPhotos} />
            </TabPanel>
            <TabPanel>
              <PhotoCarousel
                photosArray={digitalWalletPhotos}
                imgStyle={{ width: "20%" }}
              />
            </TabPanel>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
// {/* About Me DIV */}
// <motion.div
//   initial={{ y: "-300%", x: "0" }}
//   transition={{ duration: 2 }}
//   animate={{ y: "calc(0vw - 0%)", x: "calc(0vw - 0%)" }}
//   style={{
//     // backgroundImage: `linear-gradient(to bottom, #f5f7fa,#c3cfe2)`,
//     backgroundImage: `linear-gradient(to left, #434343,#304352)`,
//     color:"white",
//     border: "1px solid black",
//     borderRadius: 20,
//     padding: 10,

//     display: "flex",
//     flexDirection: "column",
//     //
//   }}
// >
//   <h2 style={{ textAlign: "center" }}>About Me</h2>
//   {/* <h4 style={{  }}>Hello! I'm Ohad Nethanel</h4> */}

//   <label>
//     Welcome to my personal website! My name is Ohad Nethanel, and I am
//     a Full Stack Software Engineer with over 1 year of experience in
//     the industry. I am driven by a passion for technology and a desire
//     to learn and grow as a professional. I have a strong commitment to
//     delivering high-quality software solutions and have a proven track
//     record of success. I am an autodidact and fast learner with
//     exceptional social, communication, and presentation skills. I
//     believe in the power of teamwork and collaboration, and am always
//     open to learning from others. I am a self-starter, dedicated,
//     responsible, and organized professional who is seeking an
//     entry-level position for further professional development.
//   </label>

//   <h2 style={{ textAlign: "center" }}>My Experience</h2>
//   {/* <h4 style={{  }}>Hello! I'm Ohad Nethanel</h4> */}

//   <label>
//     My experience as a Full Stack Engineer at Credics Technologies, a
//     fintech solutions company, has equipped me with the skills and
//     knowledge necessary to lead software projects from design to
//     implementation and deployment. During my time at Credics
//     Technologies, I was responsible for the development of a Wallet
//     Mobile App using React-Native, Node.js, and OracleDB. This project
//     supported hands-free payment and transactions between users, and I
//     was able to deliver it successfully, on-time and within budget.
//     Additionally, I worked on an e-commerce finance management system
//     that integrated a rule-based engine with a React front-end
//     management page, built using Node.js. Prior to my experience at
//     Credics Technologies, I worked as a Security Operations Analyst at
//     IBM. In this role, I was responsible for monitoring and operating
//     highly classified and important services, and I developed my
//     skills in security analysis and incident response. I also built
//     tools to improve the system's functionality and managed and
//     protected critical systems.
//   </label>
// </motion.div>

//           {/* Myu Projectes DIV */}
//           <motion.div
//             initial={{ y: "-300%", x: "0" }}
//             transition={{ duration: 2.5 }}
//             animate={{ y: "calc(0vw - 0%)", x: "calc(0vw - 0%)" }}
//             style={{
//               // backgroundImage: `linear-gradient(to right, #93a5cf,#e4efe9)`,
//               backgroundImage: `linear-gradient(to left, #434343,#304352)`,
// color:'white',
//               border: "1px solid black",
//               borderRadius: 20,
//               padding: 10,

//               display: "flex",
//               flexDirection: "column",
//               //
//             }}
//           >
//             <h2 style={{ textAlign: "center" }}>My Projects</h2>

//             <Tabs>
//               <TabList>
//                 <Tab>End to end payment system</Tab>
//                 <Tab>Cryptocurrency insurance</Tab>
//                 <Tab>Wallet mobile app</Tab>
//               </TabList>

//               <TabPanel>
//                 <PhotoCarousel
//                   photosArray={backofficePhotos}
//                   imgStyle={{ width: "80%" }}
//                 />
//               </TabPanel>
//               <TabPanel>
//                 <PhotoCarousel photosArray={dihivesAppPhotos} />
//               </TabPanel>
//               <TabPanel>
//                 <PhotoCarousel
//                   photosArray={digitalWalletPhotos}
//                   imgStyle={{ width: "20%" }}
//                 />
//               </TabPanel>
//             </Tabs>
//           </motion.div>
