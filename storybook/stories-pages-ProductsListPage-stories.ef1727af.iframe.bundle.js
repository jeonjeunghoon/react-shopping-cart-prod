(self.webpackChunkreact_shopping_cart_prod=self.webpackChunkreact_shopping_cart_prod||[]).push([[304],{"./src/stories/pages/ProductsListPage.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Interaction:function(){return Interaction},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ProductsListPage_stories}});var _templateObject,_Default$parameters,_Default$parameters2,_Default$parameters2$,_Interaction$paramete,_Interaction$paramete2,_Interaction$paramete3,_play,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),dist_esm=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js"),react_error_boundary_module=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.module.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Message=__webpack_require__("./src/components/Common/Message.tsx"),ProductList=__webpack_require__("./src/components/Product/ProductList.tsx"),useFetchCartProducts=__webpack_require__("./src/hooks/useFetchCartProducts.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Main=styled_components_browser_esm.ZP.main(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  padding: 30px 30px 90px 30px;\n"]))),ProductsListPage_stories={title:"Pages/ProductsListPage",component:function ProductsListPage(){var serverName=(0,useFetchCartProducts.Z)();return(0,jsx_runtime.jsx)(Main,{children:(0,jsx_runtime.jsx)(react_error_boundary_module.SV,{fallback:(0,jsx_runtime.jsx)(Message.Z,{type:"error"}),children:(0,jsx_runtime.jsx)(react.Suspense,{fallback:(0,jsx_runtime.jsx)(Message.Z,{type:"loading"}),children:(0,jsx_runtime.jsx)(ProductList.Z,{})})},serverName)})},tags:["autodocs"],parameters:{viewport:{defaultViewport:"desktop"}}},Default={args:{}},Interaction={args:{},play:(_play=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee2(_ref){var canvasElement,step,canvas,productList,productListCanvas,cartButtons;return(0,regeneratorRuntime.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return canvasElement=_ref.canvasElement,step=_ref.step,window.localStorage.clear(),canvas=(0,esm.uh)(canvasElement),_context2.next=5,canvas.findByRole("list");case 5:return productList=_context2.sent,productListCanvas=(0,esm.uh)(productList),_context2.next=9,productListCanvas.findAllByRole("button");case 9:return cartButtons=_context2.sent,_context2.next=12,step("Click Cart Button",(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,esm.mV.click(cartButtons[0]);case 2:return _context.next=4,esm.mV.click(cartButtons[1]);case 4:case"end":return _context.stop()}}),_callee)}))));case 12:return _context2.next=14,(0,esm.X_)((function(){(0,dist_esm.l)(canvas.getByText(2)).toBeInTheDocument()}));case 14:case"end":return _context2.stop()}}),_callee2)}))),function play(_x){return _play.apply(this,arguments)})};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Interaction.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Interaction.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Interaction$paramete=Interaction.parameters)||void 0===_Interaction$paramete?void 0:_Interaction$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {},\n  play: async ({\n    canvasElement,\n    step\n  }) => {\n    window.localStorage.clear();\n    const canvas = within(canvasElement);\n    const productList = await canvas.findByRole('list');\n    const productListCanvas = within(productList);\n    const cartButtons = await productListCanvas.findAllByRole('button');\n    await step('Click Cart Button', async () => {\n      await userEvent.click(cartButtons[0]);\n      await userEvent.click(cartButtons[1]);\n    });\n    await waitFor(() => {\n      expect(canvas.getByText(2)).toBeInTheDocument();\n    });\n  }\n}"},null===(_Interaction$paramete2=Interaction.parameters)||void 0===_Interaction$paramete2||null===(_Interaction$paramete3=_Interaction$paramete2.docs)||void 0===_Interaction$paramete3?void 0:_Interaction$paramete3.source)})});var __namedExportsOrder=["Default","Interaction"]},"./src/components/Common/Message.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _templateObject,_templateObject2,_templateObject3,_templateObject4,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_constants_message__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/message.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Message=function Message(_ref){var type=_ref.type,_ref$link=_ref.link,link=void 0!==_ref$link&&_ref$link;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(MessageSection,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{width:160,height:160,src:_constants_message__WEBPACK_IMPORTED_MODULE_0__.$[type].imageSrc,alt:_constants_message__WEBPACK_IMPORTED_MODULE_0__.$[type].title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MessageTitle,{children:_constants_message__WEBPACK_IMPORTED_MODULE_0__.$[type].title}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MessageDesc,{children:_constants_message__WEBPACK_IMPORTED_MODULE_0__.$[type].description}),link&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(HomeLink,{to:"/",children:"홈으로 가기"})]})},MessageSection=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.section(_templateObject||(_templateObject=(0,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  min-width: 320px;\n  transform: translate(-50%, -50%);\n"]))),MessageTitle=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.h2(_templateObject2||(_templateObject2=(0,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  margin: 16px 0 0 0;\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 600;\n"]))),MessageDesc=styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP.p(_templateObject3||(_templateObject3=(0,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  margin: 8px 0 0 0;\n"]))),HomeLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.ZP)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.rU)(_templateObject4||(_templateObject4=(0,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_3__.Z)(["\n  width: 100px;\n  height: 40px;\n  margin: 36px 0 0 0;\n  text-align: center;\n  line-height: 40px;\n  color: ",";\n  background: ",";\n  border-radius: 4px;\n"])),(function(_ref2){return _ref2.theme.colors.white}),(function(_ref3){return _ref3.theme.colors.primary}));__webpack_exports__.Z=Message;try{Message.displayName="Message",Message.__docgenInfo={description:"",displayName:"Message",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"loading"'},{value:'"empty"'},{value:'"notFound"'},{value:'"cartEmpty"'}]}},link:{defaultValue:{value:"false"},description:"",name:"link",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Common/Message.tsx#Message"]={docgenInfo:Message.__docgenInfo,name:"Message",path:"src/components/Common/Message.tsx#Message"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Product/ProductList.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return Product_ProductList}});var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ProductItem=__webpack_require__("./src/components/Product/ProductItem.tsx"),Message=__webpack_require__("./src/components/Common/Message.tsx"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),fetchApis=__webpack_require__("./src/apis/fetchApis.ts"),urls=__webpack_require__("./src/constants/urls.ts"),productState=(0,es.CG)({key:"productState",get:function get(serverName){return(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){var _fetchApis,getData;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _fetchApis=(0,fetchApis.Z)(serverName),getData=_fetchApis.getData,_context.next=3,getData(urls.k.products);case 3:return _context.abrupt("return",_context.sent);case 4:case"end":return _context.stop()}}),_callee)})))}}),states_serverName=__webpack_require__("./src/states/serverName/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProductListContainer=styled_components_browser_esm.ZP.ul(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  display: grid;\n  justify-content: center;\n  grid-template-columns: repeat(auto-fill, 282px);\n  grid-row-gap: 84px;\n  grid-column-gap: 48px;\n"]))),Product_ProductList=function ProductList(){var serverName=(0,es.sJ)(states_serverName._),products=(0,es.sJ)(productState(serverName));return products.length?(0,jsx_runtime.jsx)(ProductListContainer,{children:products.map((function(product){return(0,jsx_runtime.jsx)(ProductItem.C,{product:product},product.id)}))}):(0,jsx_runtime.jsx)(Message.Z,{type:"empty"})}},"./src/constants/message.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$:function(){return MESSAGE},B:function(){return DISABLED_MESSAGES}});var MESSAGE={error:{title:"에러가 발생했습니다.",description:"새로고침 해주세요.",imageSrc:"images/error.png"},empty:{title:"상품을 찾을 수 없습니다.",description:"새로고침 해주세요.",imageSrc:"images/error.png"},notFound:{title:"페이지를 찾을 수 없습니다.",description:"페이지가 존재하지 않거나 삭제되어 찾을 수 없어요.",imageSrc:"images/error.png"},loading:{title:"로딩중입니다.",description:"잠시만 기다려주세요.",imageSrc:"images/loading.png"},cartEmpty:{title:"장바구니에 상품이 없습니다.",description:"상품을 추가해보세요.",imageSrc:"images/lay-down.png"}},DISABLED_MESSAGES={cantOrder:"주문할 상품이 없어요",noSelectProduct:"선택된 상품이 없어요"}},"./src/hooks/useFetchCartProducts.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),_states_cartProducts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/states/cartProducts/index.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),_states_serverName__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/states/serverName/index.ts"),_apis_fetchApis__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/apis/fetchApis.ts"),_constants_urls__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/constants/urls.ts");__webpack_exports__.Z=function useFetchCartProducts(){var serverName=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.sJ)(_states_serverName__WEBPACK_IMPORTED_MODULE_3__._),setCartProducts=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.Zl)(_states_cartProducts__WEBPACK_IMPORTED_MODULE_1__.i),resetCartProducts=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.rb)(_states_cartProducts__WEBPACK_IMPORTED_MODULE_1__.i);return(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){var getData=(0,_apis_fetchApis__WEBPACK_IMPORTED_MODULE_4__.Z)(serverName).getData,fetch=function(){var _ref=(0,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__.Z)().mark((function _callee(){var cartProducts;return(0,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,_context.next=3,getData(_constants_urls__WEBPACK_IMPORTED_MODULE_5__.k.cartItems);case 3:cartProducts=_context.sent,setCartProducts(cartProducts),_context.next=10;break;case 7:_context.prev=7,_context.t0=_context.catch(0),resetCartProducts();case 10:case"end":return _context.stop()}}),_callee,null,[[0,7]])})));return function fetch(){return _ref.apply(this,arguments)}}();fetch()}),[resetCartProducts,serverName,setCartProducts]),serverName}},"./node_modules/react-error-boundary/dist/react-error-boundary.module.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{SV:function(){return $44d7e150ebc754d2$export$e926676385687eaf}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $parcel$export(e,n,v,s){Object.defineProperty(e,n,{get:v,set:s,enumerable:!0,configurable:!0})}$parcel$export({},"ErrorBoundary",(()=>$44d7e150ebc754d2$export$e926676385687eaf));$parcel$export({},"ErrorBoundaryContext",(()=>$ebb31c7feaa4405e$export$b16d9fb1a22de840));const $ebb31c7feaa4405e$export$b16d9fb1a22de840=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null),$44d7e150ebc754d2$var$initialState={didCatch:!1,error:null};class $44d7e150ebc754d2$export$e926676385687eaf extends react__WEBPACK_IMPORTED_MODULE_0__.Component{state=$44d7e150ebc754d2$var$initialState;static getDerivedStateFromError(error){return{didCatch:!0,error:error}}resetErrorBoundary=(...args)=>{const{error:error}=this.state;null!==error&&(this.props.onReset?.({args:args,reason:"imperative-api"}),this.setState($44d7e150ebc754d2$var$initialState))};componentDidCatch(error,info){this.props.onError?.(error,info)}componentDidUpdate(prevProps,prevState){const{didCatch:didCatch}=this.state,{resetKeys:resetKeys}=this.props;didCatch&&null!==prevState.error&&function $44d7e150ebc754d2$var$hasArrayChanged(a=[],b=[]){return a.length!==b.length||a.some(((item,index)=>!Object.is(item,b[index])))}(prevProps.resetKeys,resetKeys)&&(this.props.onReset?.({next:resetKeys,prev:prevProps.resetKeys,reason:"keys"}),this.setState($44d7e150ebc754d2$var$initialState))}render(){const{children:children,fallbackRender:fallbackRender,FallbackComponent:FallbackComponent,fallback:fallback}=this.props,{didCatch:didCatch,error:error}=this.state;let childToRender=children;if(didCatch){const props={error:error,resetErrorBoundary:this.resetErrorBoundary};if((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(fallback))childToRender=fallback;else if("function"==typeof fallbackRender)childToRender=fallbackRender(props);else{if(!FallbackComponent)throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");childToRender=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FallbackComponent,props)}}return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($ebb31c7feaa4405e$export$b16d9fb1a22de840.Provider,{value:{didCatch:didCatch,error:error,resetErrorBoundary:this.resetErrorBoundary}},childToRender)}}function $75c9d331f9c1ed1a$export$f20aa86254872370(value){if(null==value||"boolean"!=typeof value.didCatch||"function"!=typeof value.resetErrorBoundary)throw new Error("ErrorBoundaryContext not found");return!0}function $7c3c25b3f398a9d6$export$c052f6604b7d51fe(){const context=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($ebb31c7feaa4405e$export$b16d9fb1a22de840);$75c9d331f9c1ed1a$export$f20aa86254872370(context);const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({error:null,hasError:!1}),memoized=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({resetBoundary:()=>{context?.resetErrorBoundary(),setState({error:null,hasError:!1})},showBoundary:error=>setState({error:error,hasError:!0})})),[context?.resetErrorBoundary]);if(state.hasError)throw state.error;return memoized}$parcel$export({},"useErrorBoundary",(()=>$7c3c25b3f398a9d6$export$c052f6604b7d51fe));function $62ff477d53f02a5b$export$f0c7a449e0cfaec7(component,errorBoundaryProps){const Wrapped=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($44d7e150ebc754d2$export$e926676385687eaf,errorBoundaryProps,(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component,{...props,ref:ref})))),name=component.displayName||component.name||"Unknown";return Wrapped.displayName=`withErrorBoundary(${name})`,Wrapped}$parcel$export({},"withErrorBoundary",(()=>$62ff477d53f02a5b$export$f0c7a449e0cfaec7))},"?4f7e":function(){}}]);