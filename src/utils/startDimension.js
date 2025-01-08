export const startDimension = (rate) => {
  const porcent = (rate * 96) / 5;
  return `${porcent}px`;
};
