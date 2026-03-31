import { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import CommentIcon from '../../components/CommentIcon';
import LikeIcon from '../../components/LikeIcon';
import SendIcon from '../../components/SendIcon';




export default function List(props) {
    const screenWidth = Dimensions.get('window').width;
    const isMobile = screenWidth < 500;
    const [liked, setLiked] = useState(props.data.likeada);
    const [likes, setLikes] = useState(props.data.likers);
    const handleLike = () => {
    setLikes(prev => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
  };
    return (
        <View style={{
            width: isMobile ? '100%' : 500,   
            alignSelf: 'center',              
            marginBottom: 20,
            paddingHorizontal: isMobile ? 0 : 10,
        }}>
            <View style={ styles.viewPerfil }>
                <Image
                source={ props.data.imgperfil}
                style={ styles.fotoPerfil}
                />
                <Text style={ styles.nomePerfil }>{props.data.nome}</Text>
                
            </View>
            <View>
                <Image
                resizeMode='cover'
                source={ props.data.imgpublicacao}
                style={ styles.fotoFeed }
                />
            </View>
            <View style ={ styles.interacao}>
              <Pressable onPress={handleLike}>
                    <LikeIcon liked={liked}/>
              </Pressable>
              <Pressable>
                    <CommentIcon style={ styles.icones}/>
              </Pressable>
              <Pressable>
                    <SendIcon style={ styles.icones }/>
              </Pressable>
              
            </View>
            <Text style={ styles.curtidas }>{likes} curtida</Text>
            <Text style={ styles.nomeDescricao }>{props.data.nome}</Text>
            <Text  style={ styles.descricao }>{props.data.descricao}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create ({
  viewPerfil: {
     flexDirection: 'row',
     
     alignItems: 'center',
     padding: 8
     
  },
  fotoPerfil: {
    width: 50,
    height: 55,
    borderRadius: 25,
  },
  nomePerfil: {
    flexShrink: 1,       // evita overflow
  fontSize: 18,
  fontWeight: 'bold',
  marginLeft: 10,    
  },
  fotoFeed: {
    width: '100%',       // nunca ultrapassa o container
  aspectRatio: 1,
  borderRadius: 8,
  },
  interacao: {
    
  flexDirection: 'row',
  alignItems: 'center',
  marginVertical: 5,
  gap:8
  
  },
  icones: {
    
  },
  curtidas:{
    fontWeight: 'bold',
    marginTop:10,
    marginLeft: 5
  },
  descricao: {
    marginLeft: 5,
  },
  nomeDescricao:{
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 20
  }
})