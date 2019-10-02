import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    Layout,
    Text
} from 'react-native-ui-kitten';
import {
    DefaultCarousel,
    BottomMenu,
    HeadingText
} from 'components';
import dictionary from 'dictionary';
import {
    StoreInterface,
    NearbyProps
} from 'types';
import { mapDispatchToProps } from 'store';
import { GeolocationService } from 'services';
import { styles } from '../../styles';

const Geolocation = new GeolocationService();

export function Nearby(props: NearbyProps): JSX.Element {
    const { userDeniedLocation, dispatchers, nearbyObjects } = props;

    useEffect(() => {
        Geolocation.getLocation();

        //TODO: fetch from API
        const nearbyObjects = [
            {
            id: 1,
            name: 'Pałac Branickich',
            distance: 100,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper nisl quis massa tincidunt porttitor. Vivamus lacus felis, sagittis a gravida eu, lobortis sit amet nulla. Integer mollis lobortis suscipit. Nullam id nibh scelerisque, tincidunt enim et, commodo quam. Mauris fringilla sapien eget lectus fermentum, ac pharetra metus fermentum. Nunc ut tempor dolor, et volutpat nisi. Proin porttitor molestie ipsum nec suscipit. Vestibulum placerat ornare lacus, ut imperdiet leo finibus semper. Vestibulum non cursus dolor. Proin diam quam, auctor nec dui id, aliquet bibendum dolor. Suspendisse lacinia feugiat lacus sit amet pretium. Sed lacinia quis neque et consectetur. Nunc sollicitudin nulla dolor, ut consectetur erat placerat blandit. Integer scelerisque sit amet est nec porta. Vivamus consectetur ullamcorper mi, nec mattis augue commodo rutrum.

Mauris in vulputate sem, quis dictum nibh.Proin auctor gravida tempus.Morbi quam nulla, bibendum non lectus et, congue consequat elit.Nam quis dolor lacinia, interdum purus in, facilisis diam.Fusce scelerisque rutrum ipsum, quis ornare velit fermentum eget.Ut rutrum massa ut nunc malesuada, nec faucibus nulla condimentum.Ut porttitor metus ut metus sagittis, eget tincidunt velit faucibus.Sed dolor metus, facilisis et odio vitae, tincidunt suscipit nunc.Nulla gravida maximus diam, at blandit sem mattis vel.Sed augue justo, blandit vitae euismod sed, vestibulum at felis.

Sed a eleifend sem, nec efficitur nulla.Nullam faucibus dolor eget varius ullamcorper.Cras finibus in elit nec tincidunt.Donec quam turpis, dictum vitae nunc non, vehicula consectetur leo.Donec et tellus blandit, dapibus arcu quis, facilisis orci.Aliquam lectus quam, tristique vel ex vitae, molestie consequat eros.Ut convallis massa in mollis commodo.Praesent vel lacinia ex.Sed rutrum fringilla enim, egestas feugiat turpis vulputate non.Praesent auctor ipsum sed sapien convallis, eget aliquet lorem blandit.Cras at dolor quis ligula molestie tristique vel eu quam.

Integer semper tincidunt vulputate.Vestibulum ante est, faucibus vel diam ut, ullamcorper rhoncus nisl.Aenean volutpat molestie sapien ut facilisis.Cras quis pharetra mauris, at maximus orci.In aliquam urna a elit venenatis mattis.Aliquam bibendum tempor nisi in sollicitudin.Sed convallis odio vel lacus interdum sollicitudin.Donec efficitur turpis felis, ac gravida sem blandit non.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Sed egestas justo neque, vel laoreet orci mollis nec.Nam nec auctor tellus.Morbi gravida ligula ut aliquet condimentum.In vel mauris sed diam semper faucibus.Nam justo sapien, consectetur auctor aliquam vitae, fermentum non nunc.Maecenas quis neque venenatis, dictum mauris quis, pretium velit.

Cras malesuada pellentesque dapibus.Nulla sit amet sodales ligula.Proin venenatis nulla hendrerit est ultrices condimentum.Nam elementum neque id sem ornare, sed mattis urna faucibus.Sed vitae dapibus erat, quis sagittis quam.Aenean tellus risus, tempus id accumsan placerat, elementum quis nunc.Sed egestas nisi bibendum arcu egestas rutrum.`,
            photos: ["https://static.polskieszlaki.pl/zdjecia/wycieczki/2015-08/2-eg-1439987734.jpg"],
            mainImage: "https://static.polskieszlaki.pl/zdjecia/wycieczki/2015-08/2-eg-1439987734.jpg",
            coords: {
                lat: 53.1306049,
                long: 23.1629502
            }
        },
            {
            id: 1,
            name: 'Pałac Branickich',
            distance: 100,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper nisl quis massa tincidunt porttitor. Vivamus lacus felis, sagittis a gravida eu, lobortis sit amet nulla. Integer mollis lobortis suscipit. Nullam id nibh scelerisque, tincidunt enim et, commodo quam. Mauris fringilla sapien eget lectus fermentum, ac pharetra metus fermentum. Nunc ut tempor dolor, et volutpat nisi. Proin porttitor molestie ipsum nec suscipit. Vestibulum placerat ornare lacus, ut imperdiet leo finibus semper. Vestibulum non cursus dolor. Proin diam quam, auctor nec dui id, aliquet bibendum dolor. Suspendisse lacinia feugiat lacus sit amet pretium. Sed lacinia quis neque et consectetur. Nunc sollicitudin nulla dolor, ut consectetur erat placerat blandit. Integer scelerisque sit amet est nec porta. Vivamus consectetur ullamcorper mi, nec mattis augue commodo rutrum.

Mauris in vulputate sem, quis dictum nibh.Proin auctor gravida tempus.Morbi quam nulla, bibendum non lectus et, congue consequat elit.Nam quis dolor lacinia, interdum purus in, facilisis diam.Fusce scelerisque rutrum ipsum, quis ornare velit fermentum eget.Ut rutrum massa ut nunc malesuada, nec faucibus nulla condimentum.Ut porttitor metus ut metus sagittis, eget tincidunt velit faucibus.Sed dolor metus, facilisis et odio vitae, tincidunt suscipit nunc.Nulla gravida maximus diam, at blandit sem mattis vel.Sed augue justo, blandit vitae euismod sed, vestibulum at felis.

Sed a eleifend sem, nec efficitur nulla.Nullam faucibus dolor eget varius ullamcorper.Cras finibus in elit nec tincidunt.Donec quam turpis, dictum vitae nunc non, vehicula consectetur leo.Donec et tellus blandit, dapibus arcu quis, facilisis orci.Aliquam lectus quam, tristique vel ex vitae, molestie consequat eros.Ut convallis massa in mollis commodo.Praesent vel lacinia ex.Sed rutrum fringilla enim, egestas feugiat turpis vulputate non.Praesent auctor ipsum sed sapien convallis, eget aliquet lorem blandit.Cras at dolor quis ligula molestie tristique vel eu quam.

Integer semper tincidunt vulputate.Vestibulum ante est, faucibus vel diam ut, ullamcorper rhoncus nisl.Aenean volutpat molestie sapien ut facilisis.Cras quis pharetra mauris, at maximus orci.In aliquam urna a elit venenatis mattis.Aliquam bibendum tempor nisi in sollicitudin.Sed convallis odio vel lacus interdum sollicitudin.Donec efficitur turpis felis, ac gravida sem blandit non.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Sed egestas justo neque, vel laoreet orci mollis nec.Nam nec auctor tellus.Morbi gravida ligula ut aliquet condimentum.In vel mauris sed diam semper faucibus.Nam justo sapien, consectetur auctor aliquam vitae, fermentum non nunc.Maecenas quis neque venenatis, dictum mauris quis, pretium velit.

Cras malesuada pellentesque dapibus.Nulla sit amet sodales ligula.Proin venenatis nulla hendrerit est ultrices condimentum.Nam elementum neque id sem ornare, sed mattis urna faucibus.Sed vitae dapibus erat, quis sagittis quam.Aenean tellus risus, tempus id accumsan placerat, elementum quis nunc.Sed egestas nisi bibendum arcu egestas rutrum.`,
            photos: ["https://static.polskieszlaki.pl/zdjecia/wycieczki/2015-08/2-eg-1439987734.jpg"],
            mainImage: "https://static.polskieszlaki.pl/zdjecia/wycieczki/2015-08/2-eg-1439987734.jpg",
            coords: {
                lat: 53.1306049,
                long: 23.1629502
            }
        },
            {
            id: 1,
            name: 'Pałac Branickich',
            distance: 100,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper nisl quis massa tincidunt porttitor. Vivamus lacus felis, sagittis a gravida eu, lobortis sit amet nulla. Integer mollis lobortis suscipit. Nullam id nibh scelerisque, tincidunt enim et, commodo quam. Mauris fringilla sapien eget lectus fermentum, ac pharetra metus fermentum. Nunc ut tempor dolor, et volutpat nisi. Proin porttitor molestie ipsum nec suscipit. Vestibulum placerat ornare lacus, ut imperdiet leo finibus semper. Vestibulum non cursus dolor. Proin diam quam, auctor nec dui id, aliquet bibendum dolor. Suspendisse lacinia feugiat lacus sit amet pretium. Sed lacinia quis neque et consectetur. Nunc sollicitudin nulla dolor, ut consectetur erat placerat blandit. Integer scelerisque sit amet est nec porta. Vivamus consectetur ullamcorper mi, nec mattis augue commodo rutrum.

Mauris in vulputate sem, quis dictum nibh.Proin auctor gravida tempus.Morbi quam nulla, bibendum non lectus et, congue consequat elit.Nam quis dolor lacinia, interdum purus in, facilisis diam.Fusce scelerisque rutrum ipsum, quis ornare velit fermentum eget.Ut rutrum massa ut nunc malesuada, nec faucibus nulla condimentum.Ut porttitor metus ut metus sagittis, eget tincidunt velit faucibus.Sed dolor metus, facilisis et odio vitae, tincidunt suscipit nunc.Nulla gravida maximus diam, at blandit sem mattis vel.Sed augue justo, blandit vitae euismod sed, vestibulum at felis.

Sed a eleifend sem, nec efficitur nulla.Nullam faucibus dolor eget varius ullamcorper.Cras finibus in elit nec tincidunt.Donec quam turpis, dictum vitae nunc non, vehicula consectetur leo.Donec et tellus blandit, dapibus arcu quis, facilisis orci.Aliquam lectus quam, tristique vel ex vitae, molestie consequat eros.Ut convallis massa in mollis commodo.Praesent vel lacinia ex.Sed rutrum fringilla enim, egestas feugiat turpis vulputate non.Praesent auctor ipsum sed sapien convallis, eget aliquet lorem blandit.Cras at dolor quis ligula molestie tristique vel eu quam.

Integer semper tincidunt vulputate.Vestibulum ante est, faucibus vel diam ut, ullamcorper rhoncus nisl.Aenean volutpat molestie sapien ut facilisis.Cras quis pharetra mauris, at maximus orci.In aliquam urna a elit venenatis mattis.Aliquam bibendum tempor nisi in sollicitudin.Sed convallis odio vel lacus interdum sollicitudin.Donec efficitur turpis felis, ac gravida sem blandit non.Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Sed egestas justo neque, vel laoreet orci mollis nec.Nam nec auctor tellus.Morbi gravida ligula ut aliquet condimentum.In vel mauris sed diam semper faucibus.Nam justo sapien, consectetur auctor aliquam vitae, fermentum non nunc.Maecenas quis neque venenatis, dictum mauris quis, pretium velit.

Cras malesuada pellentesque dapibus.Nulla sit amet sodales ligula.Proin venenatis nulla hendrerit est ultrices condimentum.Nam elementum neque id sem ornare, sed mattis urna faucibus.Sed vitae dapibus erat, quis sagittis quam.Aenean tellus risus, tempus id accumsan placerat, elementum quis nunc.Sed egestas nisi bibendum arcu egestas rutrum.`,
            photos: ["https://static.polskieszlaki.pl/zdjecia/wycieczki/2015-08/2-eg-1439987734.jpg"],
            mainImage: "https://static.polskieszlaki.pl/zdjecia/wycieczki/2015-08/2-eg-1439987734.jpg",
            coords: {
                lat: 53.1306049,
                long: 23.1629502
            }
        },
        ];
        
        if (nearbyObjects.length > 0) {
            dispatchers.nearby.setNearbyObjects(nearbyObjects);
        }
    }, []);

    return (
        <React.Fragment>
            <HeadingText content="Witaj w Białymstoku!"/>
            <Layout style={styles.container}>
                {userDeniedLocation && <Text>{dictionary.geolocationDenied()}</Text>}
                {
                    nearbyObjects.length > 0 &&
                    <DefaultCarousel title={dictionary.nearbyYou()} items={nearbyObjects} />
                }
                {
                    nearbyObjects.length === 0 && <Text>Brak obiektów w pobliżu :(</Text>
                }
                <DefaultCarousel title={dictionary.others()} items={nearbyObjects} />
            </Layout>
            <BottomMenu />
        </React.Fragment>
    );
}

const mapStateToProps = (state: StoreInterface): NearbyProps => {
    const { user, nearby } = state;

    return {
        userLocation: user.location,
        userDeniedLocation: user.locationDenied,
        nearbyObjects: nearby.objects,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nearby);