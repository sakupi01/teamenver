import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";

import * as stories from "./Flow.stories";

const { Default } = composeStories(stories);

describe("What are you testing?", () => {
  test("Default", () => {
    render(<Default />);
    // await Default.play(); // interaction is boosted
    expect(screen.getByRole("something")).toBeInTheDocument();
  });
});
