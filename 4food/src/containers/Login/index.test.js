import React from "react";
import { LoginPage } from "./index";
import renderer from "react-test-renderer";

describe("Test Login", () =>{
    test("Snapshot Login", () => {
        const testLogin = renderer.create(<LoginPage goToSignUp={()=>{}} />)
        .toJSON();
        expect(testLogin).toMatchSnapshot();
    });

});