import { motion } from "framer-motion";
export default ({ urls }) => {
  const github = urls.github;
  const linkedin = urls.linkedin;
  const facebook = urls.facebook;
  const cv = urls.cv;

  return (
    <div >
      <motion.div
        style={{ flexDirection: "row" }}
        initial={{ y: "0%", x: "-1000%" }}
        transition={{ duration: 3 }}
        animate={{ y: "calc(0vw - 0%)", x: "calc(0vw - 0%)" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            gap: 20,
            marginBottom: 50,
            justifyContent: "center",
          }}
        >
          <motion.div
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              onClick={() => {
                window.open(linkedin, "_blank");
              }}
              src={require("../Assets/linkedin.png")}
              alt="linkedin"
            />
          </motion.div>

          <motion.div
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              onClick={() => {
                window.open(github, "_blank");
              }}
              src={require("../Assets/github.png")}
              alt="github"
            />
          </motion.div>

          <motion.div
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              onClick={() => {
                window.open(facebook, "_blank");
              }}
              src={require("../Assets/facebook.png")}
              alt="facebook"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
        <button
          onClick={() => {
            window.open(cv, "_blank");
          }}
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: 20,
            color: "white",
            padding: "15px 32px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Download CV
        </button>
      </motion.div>
    </div>
  );
};
