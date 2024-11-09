export function getDailyColor() {
  const date = new Date();
  const hash = getSimpleHash(date);

  const r = (hash >> 16) & 0xff; // Red
  const g = (hash >> 8) & 0xff; // Green
  const b = hash & 0xff; // Blue

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

function getSimpleHash(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() is zero-based
  const year = date.getFullYear();

  const dateString = `${year}-${month}-${day}`;
  let hash = 0;

  // Simple hash function: Iterate over each character in the date string
  for (let i = 0; i < dateString.length; i++) {
    hash = (hash << 5) - hash + dateString.charCodeAt(i); // hash * 31 + charCodeAt
    hash |= 0; // Convert to 32-bit integer
  }

  return Math.abs(hash);
}
