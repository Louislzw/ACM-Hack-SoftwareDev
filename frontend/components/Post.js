import { StyleSheet, Text, View } from 'react-native';

export default function Post ({post})
{
    return( 
        <View style = {styles.container}>
            <Text> Song Title: {post.title} </Text>
            <Text> Song artist: {post.title} </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });