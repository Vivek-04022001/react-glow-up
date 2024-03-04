import "./GlowingImage.css";

export default function GlowingImage(props) {
  return (
    <div
      className="glowing-image-root"
      style={{
        "--img-url": `url(${props.src})`,
      }}
    >
      <img className="glowing-image" {...props} />
    </div>
  );
}
