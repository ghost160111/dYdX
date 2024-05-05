import DynamicCSS from "../Classes/DynamicCSS";
import { sharedState } from "../Classes/ReactiveElement";

/**
 * @description
 * Sets dynamic CSS files to your HTML and its unique URL is accessible through sharedState object!
 *
 * @param {string} id - Unique ID that is required for setting it to sharedState object
 * @param {string[]} cssStyles - Your styles list, that will be imported to single global CSS file!
 */
export const SetDynamicCSS = (id: string, ...cssStyles: string[]): void => {
  const dynamicCSSInstance: DynamicCSS = new DynamicCSS(...cssStyles);
  sharedState.setCSSURL(id, dynamicCSSInstance.url);
}
