import { Image, StyleSheet, Text, View } from 'react-native'
import CommentIcon from '../../components/CommentIcon'
import LikeIcon from '../../components/LikeIcon'
import SendIcon from '../../components/SendIcon'

export default function List(props) {
    return (
        <View>
            <View style={ styles.viewPerfil }>
                <Image
                source={ props.data.imgperfil}
                style={ styles.fotoPerfil}
                />
                <Text style={ styles.nomePerfil }>{props.data.nome}</Text>
                
            </View>
            <View>
                <Image
                source={ props.data.imgpublicacao}
                style={ styles.fotoFeed }
                />
            </View>
            <View style ={ styles.interacao}>
              <LikeIcon style={{ marginBottom: 20}}/>
              <CommentIcon style={ styles.icones}/>
              <SendIcon style={ styles.icones }/>
              
            </View>
            <Text style={ styles.curtidas }>{props.data.likers} curtida</Text>
            <Text style={ styles.nomeDescricao }>{props.data.nome}</Text>
            <Text  style={ styles.descricao }>{props.data.descricao}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create ({
  viewPerfil: {
     flexDirection: 'row',
     flex: 1,
     alignItems: 'center',
     padding: 8
     
  },
  fotoPerfil: {
    width: 50,
    height: 55,
    borderRadius: 25,
  },
  nomePerfil: {
    paddingLeft: 15,
    fontSize: 20
  },
  fotoFeed: {
    aspectRatio: 1
  },
  interacao: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
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