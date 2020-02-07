import React from 'react';
import { Svg } from './../../atoms/Svg';
import { SvgFigure } from '../../atoms/SvgFigure';
import PropTypes from 'prop-types';
import style from './style.scss';

export class Funnel extends React.Component {
  render() {
    const { data, width, height } = this.props;
    const figures = data.map((attr, i) => {
      let clipPath = `layerPath_${i}`;
      return (
        <React.Fragment key={i}>
          <g>
            <defs>
              <SvgFigure
                figure={'clipPath'}
                attrs={{
                  id: clipPath
                }}
              >
                <SvgFigure figure={'path'} attrs={attr.path}>
                  <SvgFigure
                    figure={'animateTransform'}
                    attrs={{
                      attributeName: 'transform',
                      type: 'translate',
                      from: `-${attr.layerWidth} 0`,
                      to: `0 0`,
                      begin: '0',
                      dur: '1s'
                    }}
                  />
                </SvgFigure>
              </SvgFigure>
            </defs>
          </g>
          <g>
            <g clipPath={`url(#${clipPath})`}>
              <SvgFigure figure={'rect'} attrs={attr.rect} />
            </g>
            <SvgFigure
              className={style.text}
              figure={'text'}
              attrs={attr.text}
            >{`${attr.data}%`}</SvgFigure>
          </g>
        </React.Fragment>
      );
    });
    return (
      <Svg className={style.test} width={width} height={height}>
        {figures}
        <SvgFigure
          figure={'animate'}
          attrs={{
            attributeName: 'opacity',
            values: '0; 1',
            dur: '1s'
          }}
        />
      </Svg>
    );
  }
}

Funnel.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
