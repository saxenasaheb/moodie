import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import MoodSelector from '../components/MoodSelector';
import CircleList from '../components/CircleList';
import MoodFeed from '../components/MoodFeed';
import { Mood, Circle } from '../types';

export default function HomeScreen() {
 const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
 const [selectedCircles, setSelectedCircles] = useState<Circle[]>([]);

 const handleShare = () => {
   if (selectedMood && selectedCircles.length > 0) {
     console.log('Sharing:', { mood: selectedMood, circles: selectedCircles });
     // TODO: Implement sharing logic
   }
 };

 return (
   <SafeAreaView style={styles.container}>
     <MoodSelector onMoodSelect={setSelectedMood} />
     <CircleList onCircleSelect={setSelectedCircles} />
     <Button 
       mode="contained" 
       onPress={handleShare}
       disabled={!selectedMood || selectedCircles.length === 0}
       style={styles.shareButton}
     >
       Share Mood
     </Button>
     <MoodFeed />
   </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
 },
 shareButton: {
   margin: 16,
 }
});