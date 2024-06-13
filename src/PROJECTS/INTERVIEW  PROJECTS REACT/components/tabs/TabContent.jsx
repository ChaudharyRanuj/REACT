import styles from './TabContent.module.css'
function TabContent({content, currentIndex}) {
  return (
    <div className={`${styles.tabs_content}`}>
    {content && content.length > 0 ? (
      <p>{content[currentIndex].content}</p>
    ) : null}
  </div>
  );
}

export default TabContent;
