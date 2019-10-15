import React from 'react';
import { Nearby } from '../Nearby';
import renderer from 'react-test-renderer';
import faker from 'faker';
import dictionary from 'dictionary';

function generateNearbyObjects() {
    const nearbyObjects = [];
    const randomQuantity = Math.floor(Math.random() * 10) + 1;

    for (let i = 1; i <= randomQuantity; i++) {
        const singleObject = {
            id: faker.random.number(),
            name: faker.company.companyName(),
            distance: faker.random.number(),
            description: faker.lorem.paragraph(),
            photos: [faker.image.imageUrl()],
            mainImage: faker.image.imageUrl(),
            coords: {
                lat: faker.address.latitude(),
                long: faker.address.longitude()
            }
        };

        nearbyObjects.push(singleObject);
    }

    return nearbyObjects;
}

describe("Nearby component", () => {
    const nearbyObjects = generateNearbyObjects();

    const props = {
        nearbyObjects,
        userLocation: {
            lat: faker.address.latitude(),
            long: faker.address.longitude()
        },
        userDeniedLocation: false,
    };

    test('renders correctly', () => {
        const component = renderer.create(<Nearby {...props} />).toJSON();
        expect(component).toMatchSnapshot();
    });
    
    test('expects to show text when objects array is empty', () => {
        const customProps = { ...props, nearbyObjects: [] };
        const component = renderer.create(<Nearby {...customProps} />);
        const instance = component.root;
        const text = instance.findByType('Text');
        console.log(text);
        expect(text).toBe(dictionary.noNearbyObjects());
    });
});
    