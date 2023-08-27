import React from 'react';

function Article({ title, date, preview, minutes }) {
  const formattedDate = date || "January 1, 1970";

  // Calculate the number of emojis based on reading time
  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);

  // Generate emojis based on reading time
  const coffeeEmoji = "☕️".repeat(coffeeCups);
  const bentoEmoji = "🍱".repeat(bentoBoxes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate} • {coffeeEmoji || bentoEmoji} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
