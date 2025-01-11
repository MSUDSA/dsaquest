type ScrollingTextProps = {
    text: string;
}

const ScrollingText = ({text}: ScrollingTextProps) => (
    <div className="scrolling-text">
      <p>{text}</p>
    </div>
  );

export default ScrollingText