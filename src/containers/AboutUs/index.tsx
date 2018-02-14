import * as React from 'react';
import './style.scss';
import {Heart} from '../../components/Heart';

export namespace AboutUs {
  export interface Props {
  }

  export interface State {
    /* empty */
  }
}

export class AboutUs extends React.Component<AboutUs.Props, AboutUs.State> {

  render() {
    return (
      <div className='normal page-about-us'>
        <h1 className='title'><span><Heart/><Heart/>Мы<Heart/></span></h1>
        <img src={require('../../assets/about_us/us2.jpg')} className="main-photo"/>
        <span className='photo-description'>Это мы на какой то акции около Pur-Pur :3</span>
        <p>
          Первый раз мы увиделись в колледже, и после этого стали глядеть друг на друга, но нитко из нас не мог подойти и познакомиться.
        </p>
        <img src={require('../../assets/about_us/us1.jpg')} className="main-photo"/>
        <span className='photo-description'>Это мы на покре:3</span>
        <p>
          Совершенно случайно я в один прекрасный момент решил посмотреть кто лайкнул мою запись в одном паблике, и не ожидал, что именно мою запись лайкнешь ты.
          Самое главное, что ты ведь не знала, что ее написал я. Не знаю что это могло бы значит, может быть это была судьба ?
        </p>
        <img src={require('../../assets/about_us/us3.jpg')} className="main-photo"/>
        <span className='photo-description'>Это мы твоем дне рождения в MOLOKO :3</span>
        <p>
          Я так счастлив с тобой... Даже когда мы ругаемся я все равно думаю о тебе... Родная моя, я тебя очень сильно люблю, спасибо тебе за все и за этот прекрасный день.
        </p>
        <img src={require('../../assets/about_us/sxc4j4XLRqk.jpg')} className="main-photo"/>
        <span className='photo-description'>Это я выражаю свою любовь к тебе:3</span>
        <p>
          Поздравляю тебя с Днём Святого Валентина :3
        </p>
      </div>
    );
  }
}

