import decoratorCentered from "@storybook/addon-centered"
import { VisualList } from "./VisualList"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "VisualList",
  decorators: [decoratorCentered],
}

export const Example = () => <VisualList />
