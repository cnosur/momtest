import React from 'react';

import {
    Slider, InputNumber, Row, Col,
} from 'antd';

export class CountSlider extends React.Component  {
    state = {
        inputValue : this.props.value
    }

    onChange = (value) => {
        let cleanValue = Number.parseInt(value , 10);
        cleanValue = isNaN(cleanValue) ? this.state.inputValue : cleanValue;

        this.setState({
            inputValue: cleanValue
        });
        this.props.onMinCountChange(value)
    }



    render() {
    const { inputValue } = this.state;
        return (<Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={20}
                    onChange={this.onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={20}
                    style={{ marginLeft: 16 }}
                    value={inputValue}
                    onChange={this.onChange}
                />
            </Col>
        </Row>);
    }
}


