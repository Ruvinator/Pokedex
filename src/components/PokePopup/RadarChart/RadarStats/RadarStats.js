import React from 'react';
import styles from './RadarStats.module.css';
import { connect } from 'react-redux';
import { Stage, Layer, Shape } from 'react-konva';
import { typeColors } from '../../../../data/TypeColors/TypeColors';

const scalingFactor = 71;  // scaling fully fill hexagon
const canvasSize    = (scalingFactor + 1) * 2;
const canvasOffset  = canvasSize / 2;

const radarStats = props => (
    <div className={styles.radarFill}>
        <Stage width={canvasSize} height={canvasSize}>
            <Layer>
                <Shape
                    sceneFunc={(context, shape) => {
                        context.beginPath();
                        context.moveTo(canvasOffset,
                                       canvasOffset + props.pokemonData['hp']      / props.pokemonMaxStats['HP']      * -1.0  * scalingFactor);  // HP
                        context.lineTo(canvasOffset + props.pokemonData['attack']  / props.pokemonMaxStats['Attack']  *  0.87 * scalingFactor,
                                       canvasOffset + props.pokemonData['attack']  / props.pokemonMaxStats['Attack']  * -0.5  * scalingFactor);  // Attack
                        context.lineTo(canvasOffset + props.pokemonData['defense'] / props.pokemonMaxStats['Defense'] *  0.87 * scalingFactor,
                                       canvasOffset + props.pokemonData['defense'] / props.pokemonMaxStats['Defense'] *  0.5  * scalingFactor);  // Defense
                        context.lineTo(canvasOffset,
                                       canvasOffset + props.pokemonData['speed']   / props.pokemonMaxStats['Speed']   *  1.0  * scalingFactor);  // Sp. Attack
                        context.lineTo(canvasOffset + props.pokemonData['spdef']   / props.pokemonMaxStats['SpDef']   * -0.87 * scalingFactor ,
                                       canvasOffset + props.pokemonData['spdef']   / props.pokemonMaxStats['SpDef']   *  0.5  * scalingFactor);  // Sp. Defense
                        context.lineTo(canvasOffset + props.pokemonData['spatk']   / props.pokemonMaxStats['SpAtk']   * -0.87 * scalingFactor ,
                                       canvasOffset + props.pokemonData['spatk']   / props.pokemonMaxStats['SpAtk']   * -0.5  * scalingFactor);  // Speed
                        context.lineTo(canvasOffset,
                                       canvasOffset + props.pokemonData['hp']      / props.pokemonMaxStats['HP']      * -1.0  * scalingFactor);
                        context.closePath();
                        context.fillStrokeShape(shape);
                    }}
                    fillLinearGradientStartPoint={ {x :     canvasSize / 3, y :     canvasSize / 3} }
                    fillLinearGradientEndPoint  ={ {x : 2 * canvasSize / 3, y : 2 * canvasSize / 3} }
                    fillLinearGradientColorStops={[0, typeColors[props.pokemonData['type1']], 1, 
                                                  typeColors[props.pokemonData['type2']] ? typeColors[props.pokemonData['type2']] : typeColors[props.pokemonData['type1']]]}          
                />
            </Layer>
        </Stage>
    </div>
);

const mapStateToProps = state => {
    return {
        pokemonData: state.pokemonData,
        pokemonMaxStats: state.pokemonMaxStats
    };
};

export default connect(mapStateToProps)(radarStats);