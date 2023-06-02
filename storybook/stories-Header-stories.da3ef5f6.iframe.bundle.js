"use strict";(self.webpackChunkreact_shopping_cart_prod=self.webpackChunkreact_shopping_cart_prod||[]).push([[758],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./src/stories/Header.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Header_stories}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_Default$parameters,_Default$parameters2,_Default$parameters2$,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),SelectBox=__webpack_require__("./src/components/Common/SelectBox.tsx"),CartIcon=__webpack_require__("./src/assets/CartIcon.tsx"),useCartProductCount=__webpack_require__("./src/hooks/useCartProductCount.ts"),serverName=__webpack_require__("./src/states/serverName/index.ts"),server=__webpack_require__("./src/constants/server.ts"),pageUrls=__webpack_require__("./src/constants/pageUrls.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),HeaderContainer=styled_components_browser_esm.ZP.header(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  width: 100%;\n  height: 80px;\n  background-color: ",";\n"])),(function(_ref){return _ref.theme.colors.black})),HeaderContent=styled_components_browser_esm.ZP.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0 160px;\n\n  & > div {\n    display: flex;\n    align-items: center;\n    gap: 40px;\n\n    & > select {\n      width: 100px;\n      height: 28px;\n\n      text-align: center;\n      font-size: 16px;\n      font-weight: bold;\n    }\n\n    @media (max-width: ",") {\n      gap: 8px;\n\n      & > select {\n        width: 50px;\n        font-size: 12px;\n      }\n    }\n  }\n\n  @media (max-width: ",") {\n    padding: 0 40px;\n  }\n"])),(function(_ref2){return _ref2.theme.breakPoints.large}),(function(_ref3){return _ref3.theme.breakPoints.large})),LogoContainer=(0,styled_components_browser_esm.ZP)(react_router_dom_dist.rU)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n\n  & > svg {\n    transform: scaleX(-1);\n\n    @media (max-width: ",") {\n      width: 28px;\n      height: 28px;\n    }\n  }\n"])),(function(_ref4){return _ref4.theme.breakPoints.large})),Logo=styled_components_browser_esm.ZP.h1(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  color: ",";\n  font-size: 34px;\n  font-weight: 900;\n  letter-spacing: 0.1em;\n\n  @media (max-width: ",") {\n    font-size: 28px;\n  }\n"])),(function(_ref5){return _ref5.theme.colors.white}),(function(_ref6){return _ref6.theme.breakPoints.large})),StyledLink=(0,styled_components_browser_esm.ZP)(react_router_dom_dist.rU)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n\n  color: ",";\n  font-size: 24px;\n  font-weight: 500;\n\n  @media (max-width: ",") {\n    font-size: 24px;\n  }\n"])),(function(_ref7){return _ref7.theme.colors.white}),(function(_ref8){return _ref8.theme.breakPoints.large})),CartLink=(0,styled_components_browser_esm.ZP)(StyledLink)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n  @media (max-width: ",") {\n    display: ",";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 20px;\n    z-index: 999;\n\n    text-align: center;\n    background-color: ",";\n  }\n"])),(function(_ref9){return _ref9.theme.breakPoints.large}),(function(_ref10){return _ref10.pathname===pageUrls.H.cart?"none":"block"}),(function(_ref11){return _ref11.theme.colors.primary})),DesktopText=styled_components_browser_esm.ZP.p(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  @media (max-width: ",") {\n    display: none;\n  }\n"])),(function(_ref12){return _ref12.theme.breakPoints.large})),MobileText=styled_components_browser_esm.ZP.p(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n  display: none;\n\n  @media (max-width: ",") {\n    display: block;\n  }\n"])),(function(_ref13){return _ref13.theme.breakPoints.large})),ProductCountAlert=styled_components_browser_esm.ZP.span(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n  width: 28px;\n  height: 28px;\n\n  font-size: 20px;\n  line-height: 28px;\n  text-align: center;\n  border-radius: 50%;\n  background-color: ",";\n\n  @media (max-width: ",") {\n    display: none;\n  }\n"])),(function(_ref14){return _ref14.theme.colors.primary}),(function(_ref15){return _ref15.theme.breakPoints.large})),Header_stories={title:"Common/Header",component:function Header(){var cartProductCount=(0,useCartProductCount.Z)(),setServerName=(0,es.Zl)(serverName._),pathname=(0,dist.TH)().pathname;return(0,jsx_runtime.jsx)(HeaderContainer,{children:(0,jsx_runtime.jsxs)(HeaderContent,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(LogoContainer,{to:"/",children:[(0,jsx_runtime.jsx)(CartIcon.Z,{width:51,height:44,color:"white"}),(0,jsx_runtime.jsx)(Logo,{children:"SHOP"})]}),(0,jsx_runtime.jsx)(SelectBox.Z,{options:server.Lq,onChange:function onChange(event){var serverKey=event.currentTarget.value;(0,server.zJ)(serverKey)&&setServerName(serverKey)}})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(CartLink,{to:"/cart",pathname:pathname,children:[(0,jsx_runtime.jsx)(DesktopText,{children:"장바구니"}),(0,jsx_runtime.jsx)(ProductCountAlert,{children:cartProductCount}),(0,jsx_runtime.jsxs)(MobileText,{children:["장바구니에 ",cartProductCount,"개의 상품이 있어요"]})]}),(0,jsx_runtime.jsx)(StyledLink,{to:"/order",children:"주문목록"})]})]})})},tags:["autodocs"]},Default={args:{}};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/assets/CartIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _styles_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),CartIcon=function CartIcon(_ref){var width=_ref.width,height=_ref.height,color=_ref.color;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:width,height:height,viewBox:"0 0 25 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M2.27577 17.3525L0.00422287 4.9775C-0.00124931 4.9227 -0.00124931 4.8673 0.00422287 4.8125C0.00422287 4.63017 0.0640526 4.4553 0.170551 4.32637C0.27705 4.19744 0.421495 4.125 0.572107 4.125H18.7785L19.5849 0.488128C19.6204 0.346605 19.6925 0.222681 19.7907 0.134749C19.8889 0.0468165 20.008 -0.000436457 20.1301 3.03821e-06H24.4233C24.5739 3.03821e-06 24.7184 0.0724359 24.8249 0.201367C24.9314 0.330298 24.9912 0.505167 24.9912 0.687503C24.9912 0.869839 24.9314 1.04471 24.8249 1.17364C24.7184 1.30257 24.5739 1.375 24.4233 1.375H20.5617L17.0408 17.3869C17.017 17.4827 16.9763 17.5712 16.9213 17.646C16.8664 17.7208 16.7986 17.7802 16.7228 17.82C16.9348 18.2525 17.0448 18.7471 17.0408 19.25C17.0408 19.9793 16.8015 20.6788 16.3755 21.1945C15.9495 21.7103 15.3717 22 14.7693 22C14.1668 22 13.589 21.7103 13.163 21.1945C12.737 20.6788 12.4977 19.9793 12.4977 19.25C12.5001 18.7664 12.6079 18.2921 12.8101 17.875H6.50652C6.70869 18.2921 6.81642 18.7664 6.81886 19.25C6.81886 19.9793 6.57953 20.6788 6.15353 21.1945C5.72754 21.7103 5.14976 22 4.54731 22C3.94486 22 3.36708 21.7103 2.94109 21.1945C2.51509 20.6788 2.27577 19.9793 2.27577 19.25C2.27757 18.7421 2.3955 18.2448 2.6165 17.8131C2.53394 17.7739 2.46011 17.7118 2.40094 17.6318C2.34177 17.5518 2.2989 17.4562 2.27577 17.3525ZM4.60978 5.5H1.28197L1.78738 8.25H4.85965L4.60978 5.5ZM18.4776 5.5H14.7125L14.4626 8.25H17.8699L18.4776 5.5ZM16.9556 12.375L17.5633 9.625H14.332L14.0764 12.375H16.9556ZM16.649 13.75H13.9515L13.7016 16.5H16.0356L16.649 13.75ZM14.7693 20.625C14.9939 20.625 15.2135 20.5444 15.4003 20.3933C15.587 20.2422 15.7326 20.0274 15.8186 19.7762C15.9045 19.5249 15.927 19.2485 15.8832 18.9818C15.8394 18.715 15.7312 18.47 15.5724 18.2777C15.4135 18.0854 15.2112 17.9545 14.9908 17.9014C14.7705 17.8484 14.5422 17.8756 14.3346 17.9797C14.1271 18.0837 13.9497 18.26 13.8249 18.4861C13.7001 18.7122 13.6335 18.9781 13.6335 19.25C13.6335 19.6147 13.7531 19.9644 13.9661 20.2223C14.1791 20.4801 14.468 20.625 14.7693 20.625ZM10.2262 16.5H12.5602L12.8101 13.75H10.2262V16.5ZM10.2262 12.375H12.935L13.1905 9.625H10.2262V12.375ZM10.2262 8.25H13.3155L13.5653 5.5H10.2262V8.25ZM6.75639 16.5H9.0904V13.75H6.50652L6.75639 16.5ZM6.3759 12.375H9.0904V9.625H6.12603L6.3759 12.375ZM5.99542 8.25H9.0904V5.5H5.75123L5.99542 8.25ZM4.54731 20.625C4.77195 20.625 4.99154 20.5444 5.17831 20.3933C5.36509 20.2422 5.51066 20.0274 5.59663 19.7762C5.68259 19.5249 5.70508 19.2485 5.66126 18.9818C5.61744 18.715 5.50926 18.47 5.35042 18.2777C5.19158 18.0854 4.98921 17.9545 4.76889 17.9014C4.54857 17.8484 4.32021 17.8756 4.11267 17.9797C3.90513 18.0837 3.72775 18.26 3.60295 18.4861C3.47815 18.7122 3.41154 18.9781 3.41154 19.25C3.41154 19.6147 3.5312 19.9644 3.7442 20.2223C3.9572 20.4801 4.24609 20.625 4.54731 20.625ZM3.29796 16.5H5.61494L5.36507 13.75H2.79254L3.29796 16.5ZM5.23445 12.375L4.9789 9.625H2.03157L2.53699 12.375H5.23445Z",fill:_styles_theme__WEBPACK_IMPORTED_MODULE_0__.Z.colors[color]})})};__webpack_exports__.Z=CartIcon;try{CartIcon.displayName="CartIcon",CartIcon.__docgenInfo={description:"",displayName:"CartIcon",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"black"'},{value:'"white"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/assets/CartIcon.tsx#CartIcon"]={docgenInfo:CartIcon.__docgenInfo,name:"CartIcon",path:"src/assets/CartIcon.tsx#CartIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Common/SelectBox.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["options"],SelectBox=function SelectBox(_ref){var options=_ref.options,props=(0,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledSelectBox,(0,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},props),{},{children:options.map((function(option){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:option,children:option},option)}))}))},StyledSelectBox=styled_components__WEBPACK_IMPORTED_MODULE_3__.zo.select(_templateObject||(_templateObject=(0,_Users_jeonjeunghoon_Engineering_Woowacourse_react_shopping_cart_prod_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n  &:disabled {\n    cursor: not-allowed;\n    background: ",";\n  }\n"])),(function(_ref2){return _ref2.theme.colors.gray200}));__webpack_exports__.Z=SelectBox;try{SelectBox.displayName="SelectBox",SelectBox.__docgenInfo={description:"",displayName:"SelectBox",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"string[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Common/SelectBox.tsx#SelectBox"]={docgenInfo:SelectBox.__docgenInfo,name:"SelectBox",path:"src/components/Common/SelectBox.tsx#SelectBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/constants/pageUrls.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{H:function(){return PAGE_URLS}});var PAGE_URLS={products:"/products",cart:"/cart",order:"/order",orderDetail:"/order/detail"}},"./src/constants/server.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Lq:function(){return SERVER_KEYS},cN:function(){return SERVER},zJ:function(){return isServerKey}});var SERVER={"푸우":{url:"https://poohtest.kro.kr",id:"a@a.com",password:"1234"},"도치":{url:"http://13.209.67.114:8080",id:"a@a.com",password:"1234"},"엔초":{url:"http://13.124.236.192:8080",id:"a@a.com",password:"1234"},MSW:{url:"",id:"a@a.com",password:"1234"}},SERVER_KEYS=Object.keys(SERVER),isServerKey=function isServerKey(value){return value in SERVER}},"./src/hooks/useCartProductCount.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),_states_cartProducts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/states/cartProducts/index.ts");__webpack_exports__.Z=function useCartProductCount(){return(0,recoil__WEBPACK_IMPORTED_MODULE_0__.sJ)(_states_cartProducts__WEBPACK_IMPORTED_MODULE_1__.TC)}},"./src/states/cartProducts/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{TC:function(){return cartProductCountState},i:function(){return cartProductState},P5:function(){return targetCartProductState}});var es=__webpack_require__("./node_modules/recoil/es/index.js"),cartProductState=(0,es.cn)({key:"cartProductState",default:[]}),util=__webpack_require__("./src/states/cartProducts/util.ts"),cartProductCountState=(0,es.nZ)({key:"cartProductCountState",get:function get(_ref){return(0,_ref.get)(cartProductState).length}}),targetCartProductState=(0,es.CG)({key:"targetCartProductState",get:function get(_ref2){var productId=_ref2.productId,cartItemId=_ref2.cartItemId;return function(_ref3){var get=_ref3.get;return(0,util.Vh)(get(cartProductState),productId,cartItemId)}}})},"./src/states/serverName/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{_:function(){return serverNameState}});var es=__webpack_require__("./node_modules/recoil/es/index.js"),server=__webpack_require__("./src/constants/server.ts"),serverNameState=(0,es.cn)({key:"serverNameState",default:(0,server.zJ)(server.Lq[0])?server.Lq[0]:"도치"})}}]);