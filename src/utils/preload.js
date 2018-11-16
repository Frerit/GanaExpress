import React, {Component} from 'react';
import LottieView from "lottie-react-native";
class Preload extends Component {
    render() {
        return (
            <LottieView style={styles.preloa}
                        source={require('./assets/rotation')}
                        autoPlay
                        loop
            />
        );
    }
}

export default Preload;