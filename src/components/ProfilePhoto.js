import { motion } from "framer-motion";

export default ({image,onClick}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.3 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
      onClick={onClick}
      whileTap={{ scale: 2 }}
      style={{
        height: "120px",
        width: "120px",
        backgroundImage: `linear-gradient(to top,#a7a6cb, #8989ba)`,
        borderRadius: "25px",
        boxShadow: `0px 0px 20px rgba(0,0,0,0.9)`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor:"pointer"
      }}
    >
      <img
        style={{ borderRadius: 50, height: 110, width: 110 }}
        src={image}
        alt="My Profile Photo"
      />
    </motion.div>
  );
};
