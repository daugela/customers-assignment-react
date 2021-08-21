import { Coordinates } from '.';

export interface Address {
    city: string;
    street: string;
    house: string;
    zip: string;
    coords: Coordinates;
}
