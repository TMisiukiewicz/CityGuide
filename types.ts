export interface SingleObject {
    id: number;
    name: string;
    distance: number;
    description: string;
    photos?: [];
};

export interface NearbyReducerState {
    objects: SingleObject[];
}

export interface DefaultReducerAction {
    type: string;
    [propName: string]: any;
}

export interface GeolocationCoords {
    readonly lat: number;
    readonly long: number;
}

export interface UserReducerState {
    location: GeolocationCoords;
}