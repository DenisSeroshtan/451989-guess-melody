/**
 * Created by kleone on 30.05.2017.
 */
export default function getElementFromTemplate(htmlString) {
  let template = document.createElement(`template`);
  template.innerHTML = htmlString;
  return template.content;
}
