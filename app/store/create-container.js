import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export const createContainer = (props, actions, screen) => {
    props = !Array.isArray(props) ? [props] : props;
    const mapStateToProps = state => {
        let states = {};
        for (let i = 0; i < props.length; i++) {
            const prop = props[i];
            if (state[prop]) {
                states[prop] = state[prop].toJS();
            }
        }
        return states;
    };
    function mapDispatchToProps(dispatch) {
        return bindActionCreators(actions, dispatch);
    }
    return connect(mapStateToProps, mapDispatchToProps)(screen);
}

export default createContainer;