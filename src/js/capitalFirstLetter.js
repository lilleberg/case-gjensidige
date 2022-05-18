export default function capitalFirstLetter(item) {
  const element = item.toLowerCase();
  return element.charAt(0).toUpperCase() + item.slice(1);
}
