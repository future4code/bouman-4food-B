import React from 'react';
import renderer from 'react-test-renderer';
import { NavMenu } from './index'

it('Snapshot NavMenu', ()=> {
    const tree = renderer
    .create(<NavMenu></NavMenu>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})