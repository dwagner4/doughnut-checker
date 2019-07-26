import { html, css, LitElement } from 'lit-element';

export default class DoughnutChecker extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
      #board {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        width: 504px;
        height: 504px;
      }
      .row0 {
        grid-row: 1;
      }
      .row1 {
        grid-row: 2;
      }
      .row2 {
        grid-row: 3;
      }
      .row3 {
        grid-row: 4;
      }
      .row4 {
        grid-row: 5;
      }
      .row5 {
        grid-row: 6;
      }
      .row6 {
        grid-row: 7;
      }
      .row7 {
        grid-row: 8;
      }
      .col0 {
        grid-column: 1;
      }
      .col1 {
        grid-column: 2;
      }
      .col2 {
        grid-column: 3;
      }
      .col3 {
        grid-column: 4;
      }
      .col4 {
        grid-column: 5;
      }
      .col5 {
        grid-column: 6;
      }
      .col6 {
        grid-column: 7;
      }
      .col7 {
        grid-column: 8;
      }
      .white {
        background-color: pink;
      }
      .grey {
        background-color: #555555;
      }
      .redpc {
        background-image: url('red.png');
      }
      .blkpc {
        background-image: url('blk.png');
      }
    `;
  }

  static get properties() {
    return {
      match: { type: String },
      sel: { type: Number },
      allmvs: { type: Array },
    };
  }

  constructor() {
    super();
    // this.match = "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
    this.match = 'rrrreeeeeeeeeeeeeeeeeeeeeeeebbbb';
  }

  render() {
    return html`
      <div id="board" @click="${this.spClick}">
        <div id="00" class="white row0 col0 ${this.spImg(this.match[0])}"></div>
        <div id="01" class="grey row0 col1"></div>
        <div id="02" class="white row0 col2 ${this.spImg(this.match[1])}"></div>
        <div id="03" class="grey row0 col3"></div>
        <div id="04" class="white row0 col4 ${this.spImg(this.match[2])}"></div>
        <div id="05" class="grey row0 col5"></div>
        <div id="06" class="white row0 col6 ${this.spImg(this.match[3])}"></div>
        <div id="07" class="grey row0 col7"></div>
        <div id="10" class="grey row1 col0"></div>
        <div id="11" class="white row1 col1 ${this.spImg(this.match[4])}"></div>
        <div id="12" class="grey row1 col2"></div>
        <div id="13" class="white row1 col3 ${this.spImg(this.match[5])}"></div>
        <div id="14" class="grey row1 col4"></div>
        <div id="15" class="white row1 col5 ${this.spImg(this.match[6])}"></div>
        <div id="16" class="grey row1 col6"></div>
        <div id="17" class="white row1 col7 ${this.spImg(this.match[7])}"></div>
        <div id="20" class="white row2 col0 ${this.spImg(this.match[8])}"></div>
        <div id="21" class="grey row2 col1"></div>
        <div id="22" class="white row2 col2 ${this.spImg(this.match[9])}"></div>
        <div id="23" class="grey row2 col3"></div>
        <div id="24" class="white row2 col4 ${this.spImg(this.match[10])}"></div>
        <div id="25" class="grey row2 col5"></div>
        <div id="26" class="white row2 col6 ${this.spImg(this.match[11])}"></div>
        <div id="27" class="grey row2 col7"></div>
        <div id="30" class="grey row3 col0"></div>
        <div id="31" class="white row3 col1 ${this.spImg(this.match[12])}"></div>
        <div id="32" class="grey row3 col2"></div>
        <div id="33" class="white row3 col3 ${this.spImg(this.match[13])}"></div>
        <div id="34" class="grey row3 col4"></div>
        <div id="35" class="white row3 col5 ${this.spImg(this.match[14])}"></div>
        <div id="36" class="grey row3 col6"></div>
        <div id="37" class="white row3 col7 ${this.spImg(this.match[15])}"></div>
        <div id="40" class="white row4 col0 ${this.spImg(this.match[16])}"></div>
        <div id="41" class="grey row4 col1"></div>
        <div id="42" class="white row4 col2 ${this.spImg(this.match[17])}"></div>
        <div id="43" class="grey row4 col3"></div>
        <div id="44" class="white row4 col4 ${this.spImg(this.match[18])}"></div>
        <div id="45" class="grey row4 col5"></div>
        <div id="46" class="white row4 col6 ${this.spImg(this.match[19])}"></div>
        <div id="47" class="grey row4 col7"></div>
        <div id="50" class="grey row5 col0"></div>
        <div id="51" class="white row5 col1 ${this.spImg(this.match[20])}"></div>
        <div id="52" class="grey row5 col2"></div>
        <div id="53" class="white row5 col3 ${this.spImg(this.match[21])}"></div>
        <div id="54" class="grey row5 col4"></div>
        <div id="55" class="white row5 col5 ${this.spImg(this.match[22])}"></div>
        <div id="56" class="grey row5 col6"></div>
        <div id="57" class="white row5 col7 ${this.spImg(this.match[23])}"></div>
        <div id="60" class="white row6 col0 ${this.spImg(this.match[24])}"></div>
        <div id="61" class="grey row6 col1"></div>
        <div id="62" class="white row6 col2 ${this.spImg(this.match[25])}"></div>
        <div id="63" class="grey row6 col3"></div>
        <div id="64" class="white row6 col4 ${this.spImg(this.match[26])}"></div>
        <div id="65" class="grey row6 col5"></div>
        <div id="66" class="white row6 col6 ${this.spImg(this.match[27])}"></div>
        <div id="67" class="grey row6 col7"></div>
        <div id="70" class="grey row7 col0"></div>
        <div id="71" class="white row7 col1 ${this.spImg(this.match[28])}"></div>
        <div id="72" class="grey row7 col2"></div>
        <div id="73" class="white row7 col3 ${this.spImg(this.match[29])}"></div>
        <div id="74" class="grey row7 col4"></div>
        <div id="75" class="white row7 col5 ${this.spImg(this.match[30])}"></div>
        <div id="76" class="grey row7 col6"></div>
        <div id="77" class="white row7 col7 ${this.spImg(this.match[31])}"></div>
      </div>
    `;
  }

  spClick(e) {
    const sprow = parseInt(e.path[0].id[0], 10);
    const spcol = parseInt(e.path[0].id[1], 10);
    const sp = { row: sprow, col: spcol };
    this.dispatchEvent(new CustomEvent('spclk', { bubbles: true, detail: sp }));
  }

  spImg = letter => {
    if (letter === 'r') {
      return 'redpc';
    }
    if (letter === 'b') {
      return 'blkpc';
    }
    return '';
  };
}
