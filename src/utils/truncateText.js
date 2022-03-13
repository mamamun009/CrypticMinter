const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return (
      text.substring(0, maxLength) + '...' + text.substring(text.length - 4)
    );
  }
  return text;
};

export default truncateText;
