import React from "react";
import { render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("tests are working", () => {
    console.log("its working");
});

test("renders without errors", () => {
    render(<ContactForm />);
});

test("user can fill out and submit the form", () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByPlaceholderText(/edd/i);
    const lastNameInput = screen.getByPlaceholderText(/burke/i);
    const emailInput = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);

    userEvent.type(firstNameInput, "Samuel");
    userEvent.type(lastNameInput, "Lee");
    userEvent.type(emailInput, "samuelxlee@gmail.com");

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(firstNameInput.value).toBe("Samuel");
    expect(lastNameInput.value).toBe("Lee");
    expect(emailInput.value).toBe("samuelxlee@gmail.com");
});