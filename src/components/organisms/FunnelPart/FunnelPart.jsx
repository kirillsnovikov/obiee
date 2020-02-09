import React from 'react';
import { Svg } from './../../atoms/Svg';
import { SvgFigure } from '../../atoms/SvgFigure';
import PropTypes from 'prop-types';
import { FunnelVertical } from '../../../lib/charts';
import { Funnel } from '../../molecules/Funnel';
import { Spinner } from '../../atoms/Spinner';
import style from './style.scss';
import { Subtitle, Title } from '../../atoms/Text';
import { Text } from '../../atoms/Text';
import { Radio } from '../../atoms/Radio';

export class FunnelPart extends React.Component {
  render() {
    const { funnel, getFunnelInThings, getFunnelInMlns } = this.props;
    const config = {
      height: 300,
      width: 228,
      angle: 18,
      dot: 7,
      layers: funnel.funnel
    };
    const types = ['Кол-во сделок, шт', 'Сумма сделок, млн'];
    const funnelChart = new FunnelVertical(config);
    const labels = funnelChart.attrs.map(label => (
      <div className={style.label} key={label.name}>
        <Svg width={config.dot} height={config.dot}>
          <SvgFigure figure={'circle'} attrs={label.label} />
        </Svg>
        <span className={style.label__name}>
          <Text mod={{ size: 'l' }}>{label.name}</Text>
        </span>
      </div>
    ));
    const checkboxes = types.map(type => {
      let onChange =
        type === 'Кол-во сделок, шт' ? getFunnelInThings : getFunnelInMlns;
      return (
        <Radio
          key={type}
          label={type}
          value={type}
          onChange={onChange}
          checked={funnel.type === type}
        />
      );
    });
    const body = funnel.body.data.map(item => (
      <div
        className={style.bodyDescription__item}
        key={`${item.label}_${item.value}`}
      >
        <div className={style.bodyDescription__value}>
          <Text mod={{ size: 'xl', type: 'bold', color: 'dark' }}>
            {item.label}
          </Text>
        </div>
        <Text mod={{ size: 'xl', type: 'bold', color: 'danger' }}>
          {item.value}
        </Text>
      </div>
    ));
    return funnel.loading ? (
      <Spinner />
    ) : (
      <div className={style['funnel-part']}>
        <div className={style.top}>
          <Subtitle mod={{ type: 'bold' }}>{funnel.header}</Subtitle>
          <div className={style.checkboxes}>{checkboxes}</div>
        </div>
        <div className={style['body-funnel']}>
          <Funnel
            data={funnelChart.attrs}
            width={config.width}
            height={config.height}
          />
        </div>
        <div className={style.bodyDescription}>
          <div className={style.bodyDescription__title}>
            <Title mod={{ type: 'bold', color: 'primary' }}>
              {funnel.body.title}
            </Title>
          </div>
          {body}
        </div>
        <div className={style.bottom}>
          {labels}
          <div onClick={getFunnelInThings}>reloadFunnelff</div>
        </div>
      </div>
    );
  }
}

FunnelPart.propTypes = {
  funnel: PropTypes.object.isRequired
};
