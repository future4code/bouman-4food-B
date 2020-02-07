import React from 'react';
import renderer from 'react-test-renderer';
import { RestaurantCard } from './index'

it('Snapshot RestaurantCard', ()=> {
    const tree = renderer
    .create(<RestaurantCard></RestaurantCard>)
    .toJSON();
    expect(tree).toMatchSnapshot()
})