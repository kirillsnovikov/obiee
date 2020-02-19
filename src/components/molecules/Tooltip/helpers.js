export const arrayOfTips = id => {
  return document.querySelectorAll(`[data-tip][data-for="${id}"]`);
};
