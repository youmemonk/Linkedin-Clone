import CreateIcon from "@material-ui/icons/Create";
import React from "react";
import "./Feed.css";
import InputOption from "./InputOption";

import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />

          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          {/* Input Options */}
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#7fc15e"
          />
        </div>
      </div>

      {/* Posts */}
    </div>
  );
}

export default Feed;
