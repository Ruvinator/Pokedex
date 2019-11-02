import React, { PureComponent } from 'react';
import styles from './RadarChart.module.css';

import RadarStats from './RadarStats/RadarStats';

class RadarChart extends PureComponent {
    render() {
        const assetsDir    = '';
        const radarDir     = require('../../../assets/images/RadarChart/RadarChartFrame.svg');
        const nodeHPDir    = require('../../../assets/images/RadarChart/NodeHPText.png');
        const nodeAtkDir   = require('../../../assets/images/RadarChart/NodeAtkText.png');
        const nodeDefDir   = require('../../../assets/images/RadarChart/NodeDefText.png');
        const nodeSpADir   = require('../../../assets/images/RadarChart/NodeSpAText.png');
        const nodeSpDDir   = require('../../../assets/images/RadarChart/NodeSpDText.png');
        const nodeSpeedDir = require('../../../assets/images/RadarChart/NodeSpeedText.png');
        return (
            <div className={styles.RadarChart}>
                <img src={radarDir}     alt='' className={styles.RadarOutline} />
                <img src={nodeHPDir}    alt='' className={[styles.Node,    styles.HP].join(' ')} />
                <img src={nodeAtkDir}   alt='' className={[styles.Node,   styles.Atk].join(' ')} />
                <img src={nodeDefDir}   alt='' className={[styles.Node,   styles.Def].join(' ')} />
                <img src={nodeSpADir}   alt='' className={[styles.Node,   styles.SpA].join(' ')} />
                <img src={nodeSpDDir}   alt='' className={[styles.Node,   styles.SpD].join(' ')} />
                <img src={nodeSpeedDir} alt='' className={[styles.Node, styles.Speed].join(' ')} />
                <RadarStats />
            </div>
        )
    }
}

export default RadarChart;