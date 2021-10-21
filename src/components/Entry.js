import React from "react";

export const Entry = ({ entry, mood, onEditButtonClick, onDeleteButtonClick }) => {
  const getMessageType = () => {
    if (mood) {
      switch (mood.mood) {
        case 'Angry':
          return 'is-danger'
        case 'Happy':
          return 'is-success'
        case 'Ok':
          return 'is-warning'
        case 'Sad':
          return 'is-primary'
        default:
          break;
      }
    }
  }

  const displayTags = () => {
      return entry.tag_ids?.map(tagName => {
        return tagName.name
      }).join(', ')
  }

  return (
    <article className={`message ${getMessageType()}`} style={{width:"100%"}}>
      <div className="message-body">
        <p className="entry__concept">{entry.concept}</p>
        <p className="entry__entry">{entry.entry}</p>
        <p className="entry__date">{entry.date}</p>
        <p className="entry__mood">Mood: {entry.mood?.mood}</p>
        <p className="entry__tags">Tags: {displayTags()}</p>
        <div className="buttons">
          <button className={`button ${getMessageType()} is-outlined`} onClick={
            () => {
              onEditButtonClick(entry.id)
            }
          }>Edit</button>
          <button className={`button ${getMessageType()}`} onClick={
            () => {
              onDeleteButtonClick(entry.id)
            }
          }>Delete</button>
        </div>
      </div>
    </article>
  )
};
