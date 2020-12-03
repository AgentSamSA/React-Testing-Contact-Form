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

    const firstNameInput = screen.get
});