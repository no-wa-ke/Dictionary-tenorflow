// class WordTex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch("/packjson.json")
//       .then(res => res.json())
//       .then(
//         result => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         error => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       );
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.name}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }

// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// const DEV = [{ word: "book", phonetic: /bʊk/ }];
// const JsonTable = require("ts-react-json-table");

// var items = [
//   {
//     id: 75950,
//     name: "Louella Wallace",
//     age: 24,
//     phone: "+44 (0)203 437 7302",
//     color: "green"
//   },
//   {
//     id: 80616,
//     name: "Hanson Perry",
//     age: 36,
//     phone: "+44 (0)203 279 3708",
//     color: "brown"
//   },
//   {
//     id: 77621,
//     name: "Brandi Long",
//     age: 20,
//     phone: "+44 (0)203 319 4880",
//     color: "gray"
//   },
//   {
//     id: 81299,
//     name: "Tonia Sykes",
//     age: 38,
//     phone: "+44 (0)208 328 3671",
//     color: "blue"
//   },
//   {
//     id: 14225,
//     name: "Leach Durham",
//     age: 23,
//     phone: "+44 (0)208 280 9572",
//     color: "green"
//   }
// ];

// console.log("Dictionary");




//コンポーネントの作成
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       myState1 : 'foo01',
//       myState2 : 'foo02'
//     };
//   }
//   render() {
//     return (
//       <div>
//         myState1 : {this.state.myState1}
//         myState2 : {this.state.myState2}
//       </div>
//     )
//   }
// };
//  //コンポーネントの描画
// ReactDOM.render(
//   <myComponent />,
//   document.getElementById('app')
// );



// const todoItems = todos.map((todo, index) =>
//   // アイテムに安定したIDがない場合にのみ行う
//   <li key={index}>
//     {todo.text}
//   </li>
// );

// ReactDOM.render(
//   <JsonTable className="table" rows={items} />,
//   document.getElementById("container")
// );



// @flow
// @jsx glam
// import glam from 'glam';
// import React, { Component, Fragment } from 'react';

// import { type ProviderProps } from '../../ImageProvider';
// import Carousel, { Modal, ModalGateway } from '../../../src/components';
// import { FooterCaption } from '../components';
// import { getAltText } from '../formatters';

// type State = {
//   selectedIndex?: number,
//   lightboxIsOpen: boolean,
// };

// export default class Home extends Component<ProviderProps, State> {
//   state = {
//     selectedIndex: 0,
//     lightboxIsOpen: false,
//   };
//   toggleLightbox = (selectedIndex: number) => {
//     this.setState(state => ({
//       lightboxIsOpen: !state.lightboxIsOpen,
//       selectedIndex,
//     }));
//   };
//   render() {
//     const { images, isLoading } = this.props;
//     const { selectedIndex, lightboxIsOpen } = this.state;

//     return (
//       <Fragment>
//         {!isLoading ? (
//           <Gallery>
//             {images.map(({ author, caption, source }, j) => (
//               <Image onClick={() => this.toggleLightbox(j)} key={source.thumbnail}>
//                 <img
//                   alt={caption}
//                   src={source.thumbnail}
//                   css={{
//                     cursor: 'pointer',
//                     position: 'absolute',
//                     maxWidth: '100%',
//                   }}
//                 />
//               </Image>
//             ))}
//           </Gallery>
//         ) : null}

//         <ModalGateway>
//           {lightboxIsOpen && !isLoading ? (
//             <Modal onClose={this.toggleLightbox}>
//               <Carousel
//                 components={{ FooterCaption }}
//                 currentIndex={selectedIndex}
//                 formatters={{ getAltText }}
//                 frameProps={{ autoSize: 'height' }}
//                 views={images}
//               />
//             </Modal>
//           ) : null}
//         </ModalGateway>
//       </Fragment>
//     );
//   }
// }

// const gutter = 2;

// const Gallery = (props: any) => (
//   <div
//     css={{
//       overflow: 'hidden',
//       marginLeft: -gutter,
//       marginRight: -gutter,
//     }}
//     {...props}
//   />
// );

// const Image = (props: any) => (
//   <div
//     css={{
//       backgroundColor: '#eee',
//       boxSizing: 'border-box',
//       float: 'left',
//       margin: gutter,
//       overflow: 'hidden',
//       paddingBottom: '16%',
//       position: 'relative',
//       width: `calc(25% - ${gutter * 2}px)`,

//       ':hover': {
//         opacity: 0.9,
//       },
//     }}
//     {...props}
//   />
// );