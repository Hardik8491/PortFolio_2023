import { social } from "../../Components/data/social";

const SocialLinks3 = () => {
  return (
    <div className="socialLinksWrap flex gap-6 items-center">
      <h5 className="text-white font-Poppins font-bold text-[0.984375rem] uppercase">
        Follow Me
      </h5>
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
      {/* Social Links Wrap */}
    </div>
  );
};

export default SocialLinks3;
