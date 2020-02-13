import React from "react";
import { Home } from "./index";
import renderer from "react-test-renderer";

describe("Test Home", () =>{
    test("Snapshot Home", () => {
        const testHome = renderer.create(<Home/>)
        .toJSON();
        expect(testHome).toMatchSnapshot();
    });

});