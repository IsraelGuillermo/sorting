import decoratorCentered from "@storybook/addon-centered"
import { BubbleVisualList } from "./BubbleVisualList"


/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "VisualList",
  decorators: [decoratorCentered],
}

export const Example = () => <BubbleVisualList />
