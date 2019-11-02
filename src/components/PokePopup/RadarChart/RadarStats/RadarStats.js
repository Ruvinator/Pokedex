import React from 'react';
import styles from './RadarStats.module.css';
import { Stage, Layer, Shape } from 'react-konva';

const scalingFactor = 71;  // scaling fully fill hexagon
const canvasSize    = (scalingFactor + 1) * 2;
const canvasOffset  = canvasSize / 2;

// TODO: Store overall highest stats

const radarStats = props => (
    <div className={styles.radarFill}>
        <Stage width={canvasSize} height={canvasSize}>
            <Layer>
                <Shape
                    sceneFunc={(context, shape) => {
                        const STAT = 1.0;  // TODO: replace with actual stats
                        context.beginPath();
                        context.moveTo(canvasOffset                                , canvasOffset + STAT *  scalingFactor);
                        context.lineTo(canvasOffset + STAT *  0.87 *  scalingFactor, canvasOffset + STAT *  0.5 * scalingFactor);
                        context.lineTo(canvasOffset + STAT *  0.87 *  scalingFactor, canvasOffset + STAT * -0.5 * scalingFactor);
                        context.lineTo(canvasOffset                                , canvasOffset + STAT * -1.0 * scalingFactor);
                        context.lineTo(canvasOffset + STAT * -0.87 * scalingFactor , canvasOffset + STAT * -0.5 * scalingFactor);
                        context.lineTo(canvasOffset + STAT * -0.87 * scalingFactor , canvasOffset + STAT *  0.5 * scalingFactor);
                        context.lineTo(canvasOffset                                , canvasOffset + STAT *  scalingFactor);
                        context.closePath();
                        context.fillStrokeShape(shape);
                    }}
                    fill="red"  // TODO: make custom fill color based on Pokemon (type 1)
                />
            </Layer>
        </Stage>
    </div>
)

export default radarStats;