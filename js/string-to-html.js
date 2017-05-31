/**
 * Created by kleone on 30.05.2017.
 */

/**
 * Парсит HTML строку и возвращает fragment
 * @param {string} htmlString строка
 * @return {document-fragment} результат преобразования строки в фрагмент.
 */
export default function getElementFromTemplate(htmlString) {
  let template = document.createElement(`template`);
  template.innerHTML = htmlString;
  return template.content;
}
