import React, { PureComponent } from 'react';
import styles from './RadarChart.module.css';

class RadarChart extends PureComponent {
    render() {
        const radarDir = require('../../../assets/images/RadarChart/RadarChartFrame.svg')
        return (
            <div className={styles.RadarOutline}>
                <img src={radarDir} alt='' />
            </div>
        )
    }
}

export default RadarChart;