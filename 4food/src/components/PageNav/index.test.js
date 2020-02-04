import React from 'react';
import renderer from 'react-test-renderer';
import { PageNav } from './index'

it('Snapshot PageNav', ()=> {
    const tree = renderer
    .create(<PageNav></PageNav>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})