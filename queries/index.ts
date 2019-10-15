import gql from 'graphql-tag';

const getAllObjects = gql`
    query {
        objects {
            id,
            name,
            description,
            coords {
            lat,
            long
            },
            mainImage
        }
    }
`;

export {
    getAllObjects
};