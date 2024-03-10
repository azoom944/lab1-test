import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Login from "./Login";

const typeIntoInputsElements = ({ password, confirmPassword }) => {
    const passwordInputElement = screen.getByLabelText("Password");
  
    if (password) {
      userEvent.type(passwordInputElement, password);
    }
    return {
      passwordInputElement
    };
  };


describe('Test Login  Page', () => {
    beforeEach(() => {
        render(<Login />);
    });

    test('should Before', () => {
        expect(screen.getByLabelText("Password").value).toBe("");
        expect(screen.getByLabelText("Password").type).toBe("password");
    });

    test("Test inputs values after typing", () => {
        
        let { passwordInputElement } = typeIntoInputsElements({
          password: "abc12328",
        });
        expect(passwordInputElement.value).toBe("abc12328");
      });

    test("Test Show Error if inputs with invalid data", () => {
        let { passwordInputElement } = typeIntoInputsElements({
          password: "1234567",
        });
    
        let btn = screen.getByRole("button", { name: /Submit/i });
        fireEvent.click(btn)
        expect(
          screen.queryByText(/password must be more than 8 charcters/i)
        ).toBeInTheDocument();
      });
});
