import React, {Component} from 'react';
import classNames from 'classnames/bind';
import category from '../text/category.json';
import styles from './Aside.css';
const cx = classNames.bind(styles);


// month만 0~11로 한다!! 

class Aside extends Component {
    constructor(props) {
        super(props);
        this.state= {
            add_event: false,
            flipped: [],
        }

        // load category
        category.map(() => this.state.flipped.push(true))
    }
    toggleCategory = (e, index) => {
        let flipped = this.state.flipped;
        flipped.splice(index, 1, !flipped[index]);
        // console.log(flipped, index, flipped[index]);
        this.forceUpdate();
    }
    render() {
        const { flipped } = this.state;
        return(
            <aside>
                <label className={cx('add')}>
                    <i className="fas fa-plus"></i>
                    Add Event
                </label>

                { category.map((json, index) => 
                    <div className={cx('category')} key={index}>
                        <label className={cx('categoryHead')} onClick={e => this.toggleCategory(e, index)}>
                            {<i className={`fas fa-caret-${flipped[index]?'up':'down'}`}></i>}
                            {json.name}
                        </label>
                        {flipped[index]?
                            <ul className={cx('categoryBody')}>
                                {json.items.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>:null
                        }
                    </div>
                )}
            </aside>
        )
    }
}

export default Aside;