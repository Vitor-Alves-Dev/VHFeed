import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from '../../src/Header';
import List from '../../src/List';

 export default function App() {
  const  [feed, setFeed] = useState([
    {   
      id: '1',
      nome: 'Vitor Alves',
      descricao: 'Que vocês tenham um ótimo dia!',
      imgperfil: require('../../src/img/imagemPessoa2.jpg'),
      imgpublicacao: require('../../src/img/paisagem.jpg'),
      likeada: true,
      likers: 1
    },
    {   
      id: '2',
      nome: 'Agatha Soares',
      descricao: 'Hoje eu to de boa!',
      imgperfil: require('../../src/img/imagemPessoa.jpg'),
      imgpublicacao: 'https://pt.quizur.com/_image?href=https://img.quizur.com/f/img60b299675ec6e9.67762000.png?lastEdited=1622317420&w=600&h=600&f=webp',
      likeada: true,
      likers: 5
    },
    {   
      id: '3',
      nome: 'Cinthia Teixeira',
      descricao: 'Saudades',
      imgperfil: require('../../src/img/imagemPessoa3.jpg'),
      imgpublicacao: '',
      likeada: true,
      likers: 3
    },
    {   
      id: '4',
      nome: 'Gabriel Alves',
      descricao: 'Saudades',
      imgperfil: require('../../src/img/imagemPessoa4.jpg'),
      imgpublicacao: '',
      likeada: true,
      likers: 10
    }
  ])
  return(
    <View style={ styles.container}>
      <Header/>

      <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data={feed}
      renderItem={ ({item}) => <List data={item}/> }
      />
      
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
     flex: 1
  }
})