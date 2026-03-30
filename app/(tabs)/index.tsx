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
      descricao: 'Ótimo dia para viajar!',
      imgperfil: require('../../src/img/imagemPessoa.jpg'),
      imgpublicacao: require('../../src/img/paisagem2.jpg'),
      likeada: true,
      likers: 5
    },
    {   
      id: '3',
      nome: 'Cinthia Teixeira',
      descricao: 'Fim de tarde com um por do sol lindo!',
      imgperfil: require('../../src/img/imagemPessoa3.jpg'),
      imgpublicacao: require('../../src/img/paisagem3.jpg'),
      likeada: true,
      likers: 3
    },
    {   
      id: '4',
      nome: 'Gabriel Alves',
      descricao: 'Fazendo o que eu mais gosto, resolver bugs!',
      imgperfil: require('../../src/img/imagemPessoa4.jpg'),
      imgpublicacao: require('../../src/img/paisagem4.jpg'),
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