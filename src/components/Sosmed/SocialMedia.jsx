/* src/components/Sosmed/SocialMedia.jsx */
import SosmedItem from "./SosmedItem";

export default function SocialMedia() {
  return ( 
      <section id="manzweb-sosmed" className="sosmed-section">
        <div className="sosmed-content">
          <div className="sosmed-title">
            <h2 className="c-white-1">Find me on social media</h2>
            <p>
              Learn more about my activities, journey, and background in the
            </p>
          </div>

          <SosmedItem
            name="Linkedin"
            imgSrc="/logo/manzweb-linkedin.png"
            link="https://www.linkedin.com/in/abdurrahman-hidayat-581265293/"
          />
          <SosmedItem
            name="Instagram"
            imgSrc="/logo/manzweb-instagram.png"
            link="https://www.instagram.com/abdurrahman_730/"
          />
          <SosmedItem
            name="Tiktok"
            imgSrc="/logo/manzweb-tiktok.png"
            link="https://www.tiktok.com/@abdurrahman_730"
          />
          <SosmedItem
            name="Youtube"
            imgSrc="/logo/manzweb-youtube.png"
            link="https://www.youtube.com/@manzweb"
          />
        </div>
      </section> 
  );
}
