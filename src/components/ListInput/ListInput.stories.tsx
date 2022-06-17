import decoratorCentered from "@storybook/addon-centered"
import { ListInput } from "./ListInput"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "ListInput",
  decorators: [decoratorCentered],
}

export const Example = () => <ListInput />
