import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions } from 'react-native';
import { Reader, ReaderProvider } from 'epubjs-react-native';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  
  }


  render() {
    return (
      <SafeAreaView>
      <ReaderProvider>
        <Reader
          src={{ uri: 'https://s3.amazonaws.com/epubjs/books/moby-dick.epub' }}
          width={400}
          height={800}
        />
      </ReaderProvider>
    </SafeAreaView>
    )

  }

};

const styles = StyleSheet.create({

});

export default App;
