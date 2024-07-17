import { motion } from "framer-motion";

const transitionTopBottom = (OgComponent) => {
  return (props) => (
    <div>
      <OgComponent {...props} />
      <motion.div
        className="slide-y-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="slide-y-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

const transitionLeftRight = (OgComponent) => {
  return (props) => (
    <div>
      <OgComponent {...props} />
      <motion.div
        className="slide-x-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        className="slide-x-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

export { transitionTopBottom, transitionLeftRight };
