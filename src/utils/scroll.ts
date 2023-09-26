export const scrollToElement = (idElement: string) => {
  // console.log(idElement);
  var element = document.getElementById(idElement.replace("#", ""))!;
  var headerOffset = 10;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
