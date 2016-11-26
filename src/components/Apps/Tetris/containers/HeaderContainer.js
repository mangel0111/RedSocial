import { connect } from 'react-redux';
import Header from '../components/Header.js';

const mapStateToProps = (state) => ({
	isPlaying: state.gameStatus !== 'IDLE',
});

const HeaderContainer = connect(
    mapStateToProps
)(Header);

export default HeaderContainer;
