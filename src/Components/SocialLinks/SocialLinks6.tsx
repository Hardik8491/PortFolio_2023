import {social} from '../../Components/data/social';

const SocialLinks6 = () => {
  return (
    <div className="socialLinks flex flex-col items-center justify-center gap-5">
      {social.map(
        (item:any, index:number) =>
          index < 3 && (
            <span
              className="inline-block"
          
              title={item.socialTitle}
            
              key={index}
              rel="noreferrer"
            >
              {item.socialIcon}
            </span>
          )
      )}
      {/* Social Links */}
    </div>
  );
};

export default SocialLinks6;
