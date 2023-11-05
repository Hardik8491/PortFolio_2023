import  {social}  from "../data/social";

const SocialLinks2 = () => {
  return (
    <div className="socialLinks flex items-center gap-[5px]">
      {social.map(
        (item, index) =>
          index < 3 && (
            <a
              className="inline-block"
              href={item.socialLink}
              title={item.socialTitle}
              target="_blank"
              key={index}
              rel="noreferrer"
            >
              {item.socialIcon}
            </a>
          )
      )}
      {/* Social Links */}
    </div>
  );
};

export default SocialLinks2;
