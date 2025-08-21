
export default function SocialItem({ name, imgSrc, link }) {
  const handleClick = () => {
    if (link) window.open(link, "_blank");
  };

  return (
    <div className="sosmed-items" onClick={handleClick}>
      <img src={imgSrc} alt={`Manzweb-${name.toLowerCase()}`} />
      <div className="sosmedname">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </div>
    </div>
  );
}
