import React from 'react';
import { View, ViewPropTypes, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import PropTypes from 'prop-types';

export class QRCamera extends React.Component {
    static defaultProps = {
        style: {
            container: {},
            camera: {}
        },
        onRead: () => { },
        onReadNew: () => { },
    }

    constructor(props) {
        super(props);
        this.state = {
            data: ''
        };
    }

    saveCameraReference = ref => this.camera = ref;
    qrCodeRecognized = ({ barcodes }) => barcodes.forEach(barcode => {
        this.setState({ data: barcode.data });
        this.props.onRead(this.state.data);
    });
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.data !== nextState.data;
    }
    componentDidUpdate() {
        this.props.onReadNew(this.state.data);
    }
    render() {
        const { style: { container: styleContainer, camera: styleCamera } } = this.props;
        return (
            <View style={[styles.cameraContainer, styleContainer]}>
                <RNCamera
                    style={[styles.camera, styleCamera]}
                    ref={this.saveCameraReference}
                    captureAudio={false}
                    onGoogleVisionBarcodesDetected={this.qrCodeRecognized}
                />
            </View>
        );
    }
}

QRCamera.propTypes = {
    style: PropTypes.shape({
        container: ViewPropTypes.style,
        camera: ViewPropTypes.style,
    }),
    onRead: PropTypes.func,
    onReadNew: PropTypes.func,
}

export default QRCamera;

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        width: '100%',
    },
    camera: {
        flex: 1,
        width: '100%',
    }
});