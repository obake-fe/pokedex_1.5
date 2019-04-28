import React from 'react';
import IndexPage from "./indexComponent";
import SearchPokemon from "./SearchPokemonComponent";
// import SearchType from './SearchType';
// import SearchPartner from './SearchPartner';
import data from '../../data/pokemon_data.json';
import { BrowserRouter, Link } from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";

const AppComponent = (props) => {
  // constructor() {
  //   super();
  //   this.state = {
  //     inputNumber: '1',
  //     normalArray : [],
  //     typeArray : [],
  //     subTypeArray : [],
  //     errorText : '',
  //     detailData : ''
  //   };

  //   this.createNormalArray();
  // }

  const normalArray =[];
  
  const createNormalArray = () => {
    for(let i = 0; i<934; i++){
      if(!(data[i].isMegaEvolution) && !(data[i].form)) {
        normalArray.push(data[i]);
      }
    }
  }

  createNormalArray();


  // decideType(e) {

  //   // テキストを表示
  //   this.showTypeText();

  //   const typeSelector1Value = document.getElementById('typeSelector1').value;
  //   const typeSelector2Value = document.getElementById('typeSelector2').value;
    
  //   if( !(typeSelector1Value !== '-' && typeSelector2Value !== '-')) {
  //     const typeArray = [];
    
  //       for(let i = 0; i<this.state.normalArray.length; i++){
  //         for(let j = 0; j < 2; j++) {
  //           if(this.state.normalArray[i].types[j] === typeSelector1Value || this.state.normalArray[i].types[j] === typeSelector2Value) {
  //             typeArray.push({
  //               key: i,
  //               number: this.state.normalArray[i]
  //             })
  //           }
  //         }
  //       }
  //       this.setState({
  //         typeArray: typeArray
  //       });

  //   } else {
  //     const typeArray = [];
  //     const subTypeArray = [];

  //     for(let i = 0; i<this.state.normalArray.length; i++){
  //       for(let j = 0; j < 2; j++) {
  //         if(this.state.normalArray[i].types[j] === typeSelector1Value) {
  //           typeArray.push({
  //             key: i,
  //             number: this.state.normalArray[i]
  //           })
  //         }
  //       }
  //     }

  //     for(let i = 0; i<typeArray.length; i++){
  //       for(let j = 0; j < 2; j++) {
  //         if(typeArray[i].number.types[j] === typeSelector2Value) {
  //           subTypeArray.push(typeArray[i])
  //         }
  //       }
  //     }
  //     this.setState({
  //       typeArray: subTypeArray
  //     });

  //   }
  // }
  // showTypeText() {

  //   const clickTypeText = document.getElementById('FnClickTypeText');
  //   clickTypeText.classList.add("is-show");
  // }
  // removeTypeText() {

  //   const clickTypeText = document.getElementById('FnClickTypeText');
  //   clickTypeText.classList.remove("is-show");
  // }
  // resetType() {
  //   const typeSelector1 = document.getElementById('typeSelector1');
  //   const typeSelector2 = document.getElementById('typeSelector2');

  //   typeSelector1.value = '-';
  //   typeSelector2.value = '-';

  //   this.decideType();
  //   this.removeTypeText();
  // }
  
  
    
      return(
        <BrowserRouter>
          <div className="App">
            <header>
              <nav>
                <Link to="/">TOP</Link>/
                <Link to="/search">図鑑ナンバー検索</Link>/
                <Link to="/typesearch">タイプ検索</Link>
              </nav>
            </header>
            <main>
              
            <h1>ポケモン図鑑</h1>
            <hr />
            <Switch>
              <Route exact path="/" component={IndexPage} />
              <Route path="/search"
                render={
                  () => <SearchPokemon
                    decidePokemon={props.decidePokemon}
                    number={props.number}
                    errorText={props.errorText}
                    normalArray={normalArray}
                  />
                }
              />
              <Route path="/typesearch"
                render={
                  () => <SearchPokemon
                    decidePokemon={props.decidePokemon}
                    number={props.number}
                    errorText={props.errorText}
                    normalArray={normalArray}
                  />
                }
              />
            </Switch>

              {/* <SearchType 
                decideType={e => this.decideType(e)}
                resetType={e => this.resetType(e)}
                normalArray={this.state.normalArray}
                typeArray={this.state.typeArray}
                detailData={this.state.detailData}
              /> */}

              {/* <SearchPartner 
                decidePartner={e => this.decidePartner(e)}
                normalArray={this.state.normalArray}
                resultNo={this.state.resultNo}
              /> */}

            </main>

          </div>
        </BrowserRouter>
      )
}



export default AppComponent;
