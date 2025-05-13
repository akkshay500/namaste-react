import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";

it("Should render the Header component with a login button", () => {
    /**The below code will throw an error as the header component contains redux code, because it only understands react code,
     * redux is not a part of react but it is a different library. So we will have to wrap the header component with redux provider.
      We will also have to provide browserRouter as the Link component is used in the header component.
    */
   render(
   <BrowserRouter>
    <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    // Add your assertions here to check if the Header component is rendered correctly
   );

   // You can also pass regrex to getByText to match the text in the button.
    // For example: getByText(/Cart/) will match the text login in the button.
   const loginButton = screen.getByRole("button");
   expect(loginButton).toBeInTheDocument();
    
});

// You can also test the login button click event and check if the text is changed to logout or not.
it("Should change the button text to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
    fireEvent.click(loginButton);
    expect(loginButton.textContent).toBe("Logout");
});