import * as React from 'react';
import './style.scss';
import {Heart} from '../../components/Heart';

export namespace AboutYou {
  export interface Props {
  }

  export interface State {
    /* empty */
  }
}

export class AboutYou extends React.Component<AboutYou.Props, AboutYou.State> {

  render() {
    return (
      <div className='normal page-about-you'>
        <h1 className='title'><span><Heart/><Heart/>Кисуля<Heart/></span></h1>
        <p>
          Я знаю о тебе все, знаю твои привычки(я), знаю кто тебе нравится(я), и даже знаю кого ты любишь(меня).
          Ты мне стала самым дорогим человеком, ради которого я способен на что угодно.
        </p>
        <p>Ты любишь обниматься и целоваться
          <img src={require('../../assets/about_you/cat4.gif')} alt="" style={{
            width: '180px',
            verticalAlign: 'middle',
            margin: '20px'
          }}/></p>

        <p>И ругать :( <img src={require('../../assets/about_you/cat3.gif')} alt="" style={{
          width: '150px',
          verticalAlign: 'middle',
          margin: '20px'
        }}/></p>
        <p>У тебя очень красивые карие глазули, а еще ты супер пупер красивая!</p>
        <p>Я никогда не думал раньше что смогу найти того человека, с которым я смогу быть всю жизнь, но сейчас я думаю
          иначе. Потому что в моей жизни появилось такое чудо как ты :**</p>
        <p>
          <span>А еще я знаю что очень любишь котов :з</span>
          <img src={require('../../assets/about_you/cat1.gif')} alt="" style={{
            width: '190px',
            verticalAlign: 'middle',
            margin: '20px'
          }}/>
        </p>
        <p>Поэтому держи милах
          <img src={require('../../assets/about_you/cat2.gif')} alt="" style={{
            width: '190px',
            verticalAlign: 'middle',
            margin: '20px'
          }}/></p>
        <p>Мне с тобой очень повезло, ведь ты у меня такая умничка и очень заботливая. Спасибо тебе за то, что ты такая
          прекрасная! </p>
      </div>
    );
  }
}

