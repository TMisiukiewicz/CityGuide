export interface SingleObject {
    id: number;
    name: string;
    distance: number;
    description: string;
    photos?: string[];
    mainImage: string;
    coords: GeolocationCoords;
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
    locationDenied: boolean;
}

export interface StoreInterface {
    nearby: NearbyReducerState;
    user: UserReducerState;
    dispatchers: any;
}

export interface NearbyProps {
    userLocation: GeolocationCoords;
    userDeniedLocation: boolean;
    nearbyObjects: SingleObject[];
    dispatchers?: any;
}

export interface ObjectCardProps {
    object: SingleObject;
    dispatchers?: any;
}