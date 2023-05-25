import React from "react";
import {WebView} from 'react-native-webview';


function MyWeb(){
  webViewRef = React.createRef();
  return(
    <WebView ref={this.webViewRef.current?.injectJavaScript(`
    window.location.href = 'https://upwork.com/';`)} source={{uri: 'https://upwork.com/'}}
   style={{marginTop:30}}  javaScriptEnabled={true}/>

  )}
export default MyWeb;