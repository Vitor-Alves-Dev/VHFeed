import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import CommentIcon from '../../components/CommentIcon';
import LikeIcon from '../../components/LikeIcon';
import SendIcon from '../../components/SendIcon';

export default function List(props) {
 
  const { width } = useWindowDimensions();
  const isMobile = width < 500;
  
  const [liked, setLiked] = useState(props.data.likeada);
  const [likes, setLikes] = useState(props.data.likers);

  const handleLike = () => {
    setLikes(prev => (liked ? prev - 1 : prev + 1));
    setLiked(!liked);
    
   
  };
  
  const plural = likes > 1 ? 'curtidas' : 'curtida';
  
   
  

  return (
    <View style={{
      width: '100%',
      maxWidth: 500,
      alignSelf: 'center',
      marginBottom: 20,
      paddingHorizontal: isMobile ? 0 : 10,
    }}>

      <View style={styles.viewPerfil}>
        <Image
          source={props.data.imgperfil}
          style={styles.fotoPerfil}
        />
        <Text style={styles.nomePerfil}>{props.data.nome}</Text>
      </View>

      <Image
        resizeMode='cover'
        source={props.data.imgpublicacao}
        style={styles.fotoFeed}
      />

      <View style={styles.interacao}>
        <Pressable onPress={handleLike}>
          <LikeIcon liked={liked}/>
        </Pressable>

        <Pressable>
          <CommentIcon style={styles.icones}/>
        </Pressable>

        <Pressable>
          <SendIcon style={styles.icones}/>
        </Pressable>
      </View>

      <Text style={styles.curtidas}>{likes} {plural}</Text>
      <Text style={styles.nomeDescricao}>{props.data.nome}</Text>
      <Text style={styles.descricao}>{props.data.descricao}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
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
    flexShrink: 1,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  fotoFeed: {
  width: '100%',
  height: 400,
    
  },
  interacao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    gap: 8
  },
  curtidas: {
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 5
  },
  descricao: {
    marginLeft: 5,
  },
  nomeDescricao: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 20
  }
});