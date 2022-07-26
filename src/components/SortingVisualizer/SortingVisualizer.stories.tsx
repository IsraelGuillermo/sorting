import decoratorCentered from "@storybook/addon-centered"
import { SortingVisualizer } from "./SortingVisualizer"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "SortingVisualizer",
  decorators: [decoratorCentered],
}

export const Example = () => <SortingVisualizer />
