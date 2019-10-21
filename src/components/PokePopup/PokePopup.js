import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Backdrop from './Backdrop/Backdrop';
import * as actionTypes from '../../store/actions/actionTypes';
import styles from './PokePopup.module.css';

class pokePopup extends PureComponent {

    popupVisible = false;

    // If Pokemon in redux store is updated, call this function
    componentDidUpdate(prevProps) {
        if (prevProps.pokemonData !== this.props.pokemonData &&
            this.props.pokemonData['name'] !== undefined) {
            this.showPopup();
        }
    }

    showPopup = () => {
        this.popupVisible = true;
        this.forceUpdate();
    }

    dismissPopup = () => {
        this.popupVisible = false;
        this.props.onGetClickedPokemon();
        this.forceUpdate();
    }

    render() {
        try {
            let popupContents;
            const shinyDir = this.props.showShiny ? 'shiny' : 'normal';

            // Add if statement to fix popup animation. Otherwise the `try` fails on popup dismiss (pokemonKey = undefined).
            if (this.popupVisible) {
                const spriteDir = require('../../assets/images/sprites/' + shinyDir + '/' + this.props.pokemonKey + '.png');
                popupContents = (
                    <div className={styles.PokePopup}>
                        <h1>{this.props.pokemonData['name']}</h1>
                        <img src={spriteDir} alt='' />
                    </div>
                );
            }
            else {
                popupContents = (<div className={styles.PokePopup} />)
            }
            console.log('Triggered popup for ' + this.props.pokemonData['name']);
            return (
                <div className={this.popupVisible ? styles.FullPopup : styles.Invisible}>
                    <Backdrop backdropClicked={this.dismissPopup} />
                    {popupContents}
                </div>
            );
        }
        catch (err) { }
        console.log('Woah why??');
        return null;
    }
}

// Accesses global (redux) state for properties this component is interested in
const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData,
        pokemonKey: state.pokemonKey,
        showShiny: state.showShiny
    };
};

// Actions to dispatch
const mapDispatchToProps = dispatch => {
    return {
        onGetClickedPokemon: () => dispatch({ type: actionTypes.CLICKED, pokemonData: {} })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(pokePopup);