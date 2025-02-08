import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Text from "../Text/Text";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import styles from "./Timeline.module.css";

const Timeline = ({ events }) => {
  const [activeDetails, setActiveDetails] = useState(null);

  const elementsRef = useAnimateOnScroll({
    observedClass: styles.timelineItem,
    animationClassRight: "animateRight",
    animationClassLeft: "animateLeft",
  });

  const toggleDetails = (index) => {
    setActiveDetails(activeDetails === index ? null : index);
  };

  return (
    <div className={styles.timeline}>
      <div className={styles.timelineLine}></div>
      {events.map((item, index) => {
        const isActive = activeDetails === index;
        const positionClass = index % 2 === 0 ? styles.leftItem : styles.rightItem;
        const animationClass = index % 2 === 0 ? "animateRightTarget" : "animateLeftTarget";

        return (
          <div
            key={index}
            className={`${styles.timelineItem} ${positionClass} ${animationClass}`}
            ref={(el) => (elementsRef.current[index] = el)}
          >
            <div className={`${styles.timelineContent} ${styles[item.type]}`}>
              <Text as="h3" className={styles.event}>{item.event}</Text>
              
              <div className={styles.infoGroup}>
                <div className={styles.location}>
                  <FaMapMarkerAlt className={styles.locationIcon} />
                  <Text as="p" className={styles.locationText}>{item.location}</Text>
                </div>
               
              </div>
              <Text as="p" className={styles.year}>{item.year}</Text>

              <button
                className={styles.toggleButton}
                onClick={() => toggleDetails(index)}
                aria-label={isActive ? "Fechar detalhes" : "Ver mais detalhes"}
              >
                {isActive ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {isActive && (
                <div className={styles.details}>
                  <Text as="p">{item.details}</Text>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.string.isRequired,
      event: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["course", "ti", "communication"]).isRequired,
    })
  ).isRequired,
};

export default Timeline;
