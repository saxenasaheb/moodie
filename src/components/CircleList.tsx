import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';
import { CIRCLES } from '../data/mockData';
import { Circle } from '../types';

interface CircleListProps {
 onCircleSelect?: (circles: Circle[]) => void;
}

export default function CircleList({ onCircleSelect }: CircleListProps) {
 const [selectedCircles, setSelectedCircles] = useState<number[]>([]);

 const toggleCircle = (id: number) => {
   const newSelected = selectedCircles.includes(id)
     ? selectedCircles.filter(circleId => circleId !== id)
     : [...selectedCircles, id];
   
   setSelectedCircles(newSelected);
   onCircleSelect?.(CIRCLES.filter(circle => newSelected.includes(circle.id)));
 };

 return (
   <ScrollView horizontal style={styles.container}>
     {CIRCLES.map(circle => (
       <Chip
         key={circle.id}
         selected={selectedCircles.includes(circle.id)}
         onPress={() => toggleCircle(circle.id)}
         style={styles.chip}
       >
         {circle.name}
       </Chip>
     ))}
   </ScrollView>
 );
}

const styles = StyleSheet.create({
 container: {
   flexGrow: 0,
   padding: 16,
 },
 chip: {
   marginRight: 8,
 }
});