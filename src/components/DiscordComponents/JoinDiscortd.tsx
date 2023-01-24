import "../../scss/discordJOin.scss";
import DiscordJOinButton from "./DiscordButton";

function JoinDiscord() {
  return (
    <div className="DiscordJOin">
      <div className="DiscordJOin__content">
        <div className="DiscordJOin__box">
          <h3 className="DiscordJOin__h3">Присоединяйся к клубу DPSP</h3>
          <DiscordJOinButton />
        </div>
      </div>
    </div>
  );
}
export default JoinDiscord;
