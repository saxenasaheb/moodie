import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { MOODS } from '../data/mockData';
import { Mood } from '../types';

interface MoodSelectorProps {
 onMoodSelect: (mood: Mood) => void;
}

export default function MoodSelector({ onMoodSelect }: MoodSelectorProps) {
 return (
   <View style={styles.container}>
     {MOODS.map((mood) => (
       <TouchableOpacity
         key={mood.id}
         style={styles.moodItem}
         onPress={() => onMoodSelect(mood)}
       >
         <Text style={styles.emoji}>{mood.emoji}</Text>
         <Text style={styles.label}>{mood.label}</Text>
       </TouchableOpacity>
     ))}
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flexDirection: 'row',
   flexWrap: 'wrap',
   padding: 16,
   justifyContent: 'space-between',
 },
 moodItem: {
   alignItems: 'center',
   padding: 12,
   width: '20%',
 },
 emoji: {
   fontSize: 32,
   marginBottom: 4,
 },
 label: {
   fontSize: 12,
 },
});