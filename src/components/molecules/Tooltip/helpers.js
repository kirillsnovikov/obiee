export const arrayOfTips = id => {
  console.log(document.querySelectorAll(`[data-tip][data-for="${id}"]`));
  return document.querySelectorAll(`[data-tip][data-for="${id}"]`);
};
