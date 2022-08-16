import { render } from "@testing-library/react";
import { Background } from "components/Background/Background";

test('shows 20 balls in the background',() => {
    render(<Background />)

    expect(document.querySelectorAll('span').length).toBe(20)
})