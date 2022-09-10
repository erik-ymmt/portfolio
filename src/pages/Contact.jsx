import "../styles/contact.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div id="contact">
      <h1>- Contact -</h1>
      <div className="contactOptions">
        <span className="contactIcon email">
          <MdEmail color="white" />
          erik.ymmt@gmail.com
        </span>

        <a
          href={"https://github.com/erik-ymmt"}
          target="blank"
          className="contactIcon"
        >
          <BsGithub color="white" />
          Github
        </a>

        <a
          href={"https://www.linkedin.com/in/erikyamamoto/"}
          target="blank"
          className="contactIcon"
        >
          <BsLinkedin color="white" />
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default Contact;
