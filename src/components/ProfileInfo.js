import { motion } from "framer-motion";

export default ({ info }) => {
  return (
    <div style={{  textAlign: "center", width:300 }}>
      <motion.div
        initial={{ y: "-2000%", x: "0%" }}
        transition={{ duration: 3.2 }}
        animate={{ y: "calc(0vw - 0%)", x: "calc(0vw - 0%)" }}
      >
        <label style={{ fontSize: 26 }}>{info.fullName}</label>
      </motion.div>
      <motion.div
        initial={{ y: "-2000%", x: "0%" }}
        transition={{ duration: 2.9 }}
        animate={{ y: "calc(0vw - 0%)", x: "calc(0vw - 0%)" }}
      >
        <label>{info.profession}</label>
      </motion.div>
      <br />
      <motion.div
        initial={{ y: "-2000%", x: "0%" }}
        transition={{ duration: 2.6 }}
        animate={{ y: "calc(0vw - 0%)", x: "calc(0vw - 0%)" }}
      >
        <label style={{ fontWeight: "bold" }}>📍 {info.location}</label>
      </motion.div>
      <br />

      <br />

      <motion.div
        initial={{ y: "-2000%", x: "0%" }}
        transition={{ duration: 2.3 }}
        animate={{ y: "calc(0vw - 0%)", x: "calc(0vw - 0%)" }}
      >
        <label>📞 {info.phone}</label>
      </motion.div>

      <motion.div
        initial={{ y: "-2000%", x: "0%" }}
        transition={{ duration: 2 }}
        animate={{ y: "calc(0vw - 0%)", x: "calc(0vw - 0%)" }}
      >
        <label>
          📩 <a href={`mailto:${info.email}`}>{info.email}</a>
        </label>
      </motion.div>
    </div>
  );
};
