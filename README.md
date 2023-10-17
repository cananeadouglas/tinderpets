expo install lottie-react-native
or
yarn add lottie-react-native
import { LotteView } from 'lottie-react-native';
<LotteView
    source={require('../../assets/dog_love.json')}
    autoplay={true}
    Loop={true}
/>


expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

yarn add react-native-gesture-handler
import { GestureHandlerRootView } from 'react-native-gesture-handler';

npx expo install expo-image-picker

yarn add react-native-iphone-x-helper

yarn add react-native-progress --save
import * as Progress from 'react-native-progress';

yarn add react-native-svg

yarn add @react-navigation/bottom-tabs

yarn add @react-navigation/stack

yarn add @react-native-async-storage/async-storage

expo install @expo/vector-icons

yarn add @react-navigation/native

yarn add react-native-snap-carousel

yarn add deprecated-react-native-prop-types
npx patch-package react-native - (talvez não seja preciso)
{

        This is the patch issue and can be resolved by just replacing few lines of code:

        check if you have installed deprecated-react-native-prop-types package if not run the below command first.

        yarn add deprecated-react-native-prop-types

        inside node_modules/react-native/index.js

        replace these functions with the below lines

        // Deprecated Prop Types
        get ColorPropType(): $FlowFixMe {
        return require('deprecated-react-native-prop-types').ColorPropType;
        },

        get EdgeInsetsPropType(): $FlowFixMe {
        return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
        },

        get PointPropType(): $FlowFixMe {
        return require('deprecated-react-native-prop-types').PointPropType;
        },

        get ViewPropTypes(): $FlowFixMe {
        return require('deprecated-react-native-prop-types').ViewPropTypes;
        },

}


yarn add react-native-swiper




CREATE POLICY "public" ON "public"."tipoanimal"
AS PERMISSIVE FOR ALL
TO public
USING (true)



Geolocation

npx expo install expo-location
yarn add react-native-maps
yarn add expo-location

"plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ]
    ],



