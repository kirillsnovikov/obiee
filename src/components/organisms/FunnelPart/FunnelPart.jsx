import React from 'react';
import { Svg } from './../../atoms/Svg';
import { SvgFigure } from '../../atoms/SvgFigure';
import PropTypes from 'prop-types';
import { FunnelVertical } from '../../../lib/charts';
import { Funnel } from '../../molecules/Funnel';
import { Spinner } from '../../atoms/Spinner';
import style from './style.scss';

export class FunnelPart extends React.Component {
  render() {
    const { funnel, getFunnelInThings } = this.props;
    console.log('pprprppr', this.props);
    const config = {
      height: 300,
      width: 228,
      angle: 18,
      dot: 7,
      layers: funnel.funnel
    };
    const funnelChart = new FunnelVertical(config);
    const labels = funnelChart.attrs.map(label => (
      <div className={style.label} key={label.name}>
        <Svg width={config.dot} height={config.dot}>
          <SvgFigure figure={'circle'} attrs={label.label} />
        </Svg>
        <span className={style.label__value}>{label.name}</span>
      </div>
    ));
    return funnel.loading ? (
      <Spinner />
    ) : (
      <div className={style['funnel-part']}>
        <div className={style.top}>Воронка продаж</div>
        <div className={style['body-funnel']}>
          <Funnel
            data={funnelChart.attrs}
            width={config.width}
            height={config.height}
          />
        </div>
        <div className={style['body-description']}></div>
        <div className={style.bottom}>
          {labels}
          <div onClick={getFunnelInThings}>reloadFunnel</div>
        </div>
      </div>
    );
  }
}

FunnelPart.propTypes = {
  funnel: PropTypes.object.isRequired
};
