const pl = {
    nearbyArea: (): string => 'W pobliżu',
    explore: (): string => 'Odkrywaj',
    geolocationDenied: (): string => 'Nie wyraziłeś zgody na odczyt Twojej lokalizacji :(',
    noNearbyObjects: (): string => 'Brak obiektów w pobliżu',
    distanceAway: (distance: number): string => `${distance} km stąd`,
    map: (): string => 'Mapa',
    favorite: (): string => 'Ulubione',
}

export default pl;