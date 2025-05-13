import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe is a function that is used to group the tests together. You can remove this if you want to write the tests without grouping them.
// you can add multiple describe blocks and also add nested describe blocks to group the tests together.
describe("Contact Component", () => {
    test("Should render Contact component", () => {
        // this will render the Contact component in DOM.
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    test("Should render Submit button",()=>{
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    
    // you can also write it instead of test, both are same.
    // this is used for readability as the description starts with Should.
    it("Should load 2 input boxes",()=>{
        render(<Contact />);
    
        // this will return JSX element.
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
        //expect(inputBoxes.length).not.toBe(3);
    });
});

