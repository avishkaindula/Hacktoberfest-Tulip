import { motion } from "framer-motion";
import SlideAnimationType from "../../Types";

const SlideUp = (props: SlideAnimationType) => {

    return (
        <div style={{ overflow: "hidden" }}>
            <motion.div
                variants={{
                    initial: { opacity: 0, y: 100 },
                    final: { opacity: 1, y: 0 }
                }}
                initial="initial"
                animate="final"
                transition={{ duration: props.duration ? props.duration : 0.5, delay: props.delay ? props.delay : 2 }}
            >
                {props.children}
            </motion.div>
        </div>
    )
}


export default SlideUp;