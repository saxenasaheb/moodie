import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { MOCK_FEED } from '../data/mockData';
import { MoodPost } from '../types';

export default function MoodFeed() {
 return (
   <ScrollView style={styles.container}>
     {MOCK_FEED.map((item: MoodPost) => (
       <Card key={item.id} style={styles.card}>
         <Card.Content>
           <Title>{item.mood} {item.user}</Title>
           <Paragraph>Shared with {item.circle} • {item.time}</Paragraph>
         </Card.Content>
       </Card>
     ))}
   </ScrollView>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding: 16,
 },
 card: {
   marginBottom: 8,
 },
});