import { useState } from "react";
import styles from "./Tabs.module.css";
import RandomContent from "./RandomContent";
import TabContent from "./TabContent";

const content = [
  {
    label: "Tab",
    content:
      "Tab 1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi officiis, debitis maiores provident hic nobis? Sequi adipisci necessitatibus molestias illum.",
  },
  {
    label: "Tab",
    content:
      "Tab 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi officiis, debitis maiores provident hic nobis? Sequi adipisci necessitatibus molestias illum.",
  },
  {
    label: "Tab",
    content: <RandomContent />,
  },
];

function Tabs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleCurrentIndex(index) {
    setCurrentIndex(() => index);
  }

  return (
    <div className={`${styles.tabs_container}`}>
      <div className={`${styles.tabs}`}>
        {content.map((tab, i) => (
          <Tab
            index={i}
            label={tab.label}
            onCurrentIndex={handleCurrentIndex}
            key={i + 1}
            currentIndex={currentIndex}
          />
        ))}
      </div>
      <TabContent content={content} currentIndex={currentIndex} />
    </div>
  );
}

export default Tabs;

function Tab({ index, label, onCurrentIndex, currentIndex }) {
  return (
    <span
      className={`${currentIndex === index ? styles.active : ""}`}
      onClick={() => onCurrentIndex(index)}
    >{`${label} ${index + 1}`}</span>
  );
}
