import React from 'react';
// import ChildProps from './propsexample/ChildProps';
// import FBCPropex from './propsexample/FBCPropex';
import PropsChildrenEx from './propsexample/PropsChildrenEx';
import ChildProps from './propsexample/ChildProps';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Sidebar1 from './components/Sidebar1';
// import Sidebar2 from './components/Sidebar2';
// import Footer from './components/Footer';
// import CBCPropex1 from './propsexample/CBCPropex1';
// // function App () {

//     return (
//         // <div className='app'>
//         //     <Navbar/>
//         //     <Main/>
//         //     <div className='Sidebar'>
//         //         <Sidebar1/>
//         //         <Sidebar2/>
//         //     </div>
//         //     <Footer/>
//         // </div>
//         <>
//         <CBCPropex1
//         username='vinay'
//         age={25}
//         desig={["developer" , " tester"]}
//         userDetails={{city:"Hyd",area:"Maisammaguda"}}
//         sendFun={function(){alert("Hi i am form parent componet")}}
//         />
//         </>
//     );
// }

// export default App;

// const App = () => {
//   return (
//     <div>
//       <FBCPropex
//       username="vk"
//       isLoggedIn={true}
//       hobbies={["playing VR","bing watch","travel"]}
//       />
//     </div>
//   )
// }

// export default App

export default function App() {
  return (
    <div>
      <PropsChildrenEx username="vinay" company="TCS">
      <h1>This data is passed as props child</h1>
      <ChildProps/>
      </PropsChildrenEx>
    </div>
  )
}

