export interface TypeCharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    Gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

export interface Location {
    name: string;
    url: string;
}