import React, {Component} from 'react';
import styled from 'styled-components';
import Calender from '../Main/common/Calender';
import Aside from '../Main/common/Aside';

class Main extends Component {
    render() {
        return(
            <Wrapper>
                <Aside />
                <Calender />
            </Wrapper>
        )
    }
}

const Wrapper = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
`;

export default Main;