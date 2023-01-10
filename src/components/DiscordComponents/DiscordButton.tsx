// import LampSound from '../../assets/sounds'
import "../../scss/discordJOinButton.scss";
function DiscordJOinButton() {
  function changeBackground(e) {
    const audio = new Audio("src/assets/sounds/lamp.mp3");
    audio.play();
    setTimeout(() => {
      e.target.classList.toggle("DiscordJOinButton__a--active")
    }, 200);
    
  }
  return (
    <div className="DiscordJOinButton__container">
      <a
        className="DiscordJOinButton__a"
        href="https://discord.gg/Fqkhj33NGd"
        target="_blank"
        onMouseOver={changeBackground}
        onMouseLeave={changeBackground}
      >
        Join Discord
      </a>
      {/* <div className="DiscordJOinButton__bg"></div> */}
    </div>
  );
}
export default DiscordJOinButton;
