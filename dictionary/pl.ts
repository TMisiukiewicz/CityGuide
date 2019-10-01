const pl = {
    nearbyArea: (): string => 'W pobliżu',
    all: (): string => 'Wszystkie',
    explore: (): string => 'Odkrywaj',
    geolocationDenied: (): string => 'Nie wyraziłeś zgody na odczyt Twojej lokalizacji :(',
    noNearbyObjects: (): string => 'Brak obiektów w pobliżu',
    distanceAway: (distance: number): string => `${distance} km stąd`,
    map: (): string => 'Mapa',
    favorite: (): string => 'Ulubione',
    information: (): string => 'Informacje',
    seeOnMap: (): string => 'Zobacz na mapie',
    nearbyYou: (): string => 'W pobliżu Ciebie'
}

export default pl;