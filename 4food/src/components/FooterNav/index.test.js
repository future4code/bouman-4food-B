import React from 'react';
import renderer from 'react-test-renderer';
import { FooterNav } from './index'

it('Snapshot FooterNav', ()=> {
    const tree = renderer
    .create(<FooterNav></FooterNav>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})