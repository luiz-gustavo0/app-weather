export const musicalStyleSuggestion = (temperature) => {
  if (temperature > 32) {
    return 'rock';
  } else if (temperature > 24 && temperature <= 32) {
    return 'pop';
  } else if (temperature > 16 && temperature <= 24) {
    return 'classica';
  } else {
    return 'lofi';
  }
};
