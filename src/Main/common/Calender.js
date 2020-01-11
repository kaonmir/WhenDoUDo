import React, {Component} from 'react';
import classNames from 'classnames/bind';
import styles from './Calender.css';
const cx = classNames.bind(styles);


// month만 0~11로 한다!! 

class Calender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            syear: 2020,
            smonth: 2,
            sday: 27,
        }
    }


    checkDays = (year, month) => {
        // TODO 이달이 몇 일인지
        return 28;
    }
    render() {
        const {syear, smonth, sday } = this.state;
        const eday = this.checkDays(syear, smonth);
        const next_eday = this.checkDays(syear, smonth+1);
        let day = sday;
        let month = smonth;

        let rows = [];
        let row = [];
        for(let i = 0; i < 5; i++) {
            row = [];
            for(let j=0; j< 7; j++) {
                let isStart = i+j===0?true:day===1?true:false;
                row.push(<Day month={month} day={day} isStart={isStart} key={[month, day]}></Day>)
                day++;
                if(month===smonth && day===eday+1) {month++; day=1;}
                if(month===smonth+1 && day===next_eday+1) {month++; day=1;}
            }
            rows.push(<div className="week" key={i}>{row.map(day=>day)}</div>);
        }
        return(
            <main id={cx('main')}>
                <div className={cx('control')}>
                    <div className={cx('controlDate')}>
                        <i className="fas fa-angle-up"></i>
                        <i className="fas fa-angle-down"></i>
                        <label>{eday-sday>=6
                            ?`${syear}년 ${smonth}월`
                            :`${syear+parseInt((smonth+1)/12)}년 ${(smonth+1)%12}월`}
                        </label>
                    </div>
                    <div className={cx('controlPanel')}>
                        sign in, sign up, 설정
                        sign out, chatting, 설정
                    </div>
                </div>
                <ul className={cx('head')}>
                    <li>일요일</li>
                    <li>월요일</li>
                    <li>화요일</li>
                    <li>수요일</li>
                    <li>목요일</li>
                    <li>금요일</li>
                    <li>토요일</li>
                </ul>
                <div className={cx('body')}>
                    {rows.map(week => week)}
                </div>

            </main>
        )
    }
}

class Day extends Component {
    render() {
        const {month, day, isStart} = this.props;
        const text = isStart
            ? `${month<10?'0':null}${month}-${day}`
            : `${day}일`;
        return(
            <div className={cx('day', {'dayGray':month%2===1})}>
                <div className={cx('dayHead')}>{text}</div>
                <div className={cx('dayBody')}>
                    <input type="checkbox" name="days" id={`${month}+${day}`}/>
                </div>
            </div>
        )
    }
}

export default Calender;