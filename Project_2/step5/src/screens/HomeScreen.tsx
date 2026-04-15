import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { GridLayout, Card } from '../components/GridLayout';
import {
  ResponsiveHeader,
  ResponsiveContainer,
} from '../components/ResponsiveHeader';
import {
  AdaptiveLayout,
  FeatureCard,
  StatsRow,
  ResponsiveImage,
} from '../components/AdaptiveLayout';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      {/* HEADER */}
      <ResponsiveHeader
        title="Project 2 Step 5"
        leftAction={{
          icon: '←',
          onPress: () => Alert.alert('Back pressed'),
        }}
        rightAction={{
          icon: '☰',
          onPress: () => Alert.alert('Menu pressed'),
        }}
      />

      {/* CONTENT */}
      <ResponsiveContainer>
        <AdaptiveLayout
          content={
            <>
              {/* STATS */}
              <StatsRow
                stats={[
                  { label: 'users', value: '120' },
                  { label: 'tasks', value: '8' },
                  { label: 'score', value: '95%' },
                ]}
              />

              {/* IMAGE */}
              <ResponsiveImage source={{ uri: 'demo-image' }} />

              {/* GRID */}
              <GridLayout columns={2} spacing={12}>
                <Card title="Flexbox" subtitle="Responsive grid">
                  <Text style={styles.cardText}>
                    Grid adjusts using screen width.
                  </Text>
                </Card>

                <Card title="Safe Area" subtitle="Mobile support">
                  <Text style={styles.cardText}>
                    Header respects notches and status bars.
                  </Text>
                </Card>

                <Card title="Tablet" subtitle="Adaptive layout">
                  <Text style={styles.cardText}>
                    Sidebar appears on larger screens.
                  </Text>
                </Card>

                <Card title="Landscape" subtitle="Orientation aware">
                  <Text style={styles.cardText}>
                    Layout changes for wider screens.
                  </Text>
                </Card>
              </GridLayout>

              {/* FEATURES */}
              <FeatureCard
                icon="📱"
                title="Phone Layout"
                description="Compact stacked layout for mobile devices."
                variant="primary"
              />

              <FeatureCard
                icon="💻"
                title="Tablet Layout"
                description="Two-column content for larger displays."
                variant="secondary"
              />

              <FeatureCard
                icon="🎨"
                title="Styled UI"
                description="Consistent spacing, cards and typography."
                variant="accent"
              />
            </>
          }
          footer={
            <Text style={styles.footerText}>
              Responsive React Native Lab
            </Text>
          }
        />
      </ResponsiveContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  cardText: {
    fontSize: 13,
    color: '#444',
    lineHeight: 18,
  },
  footerText: {
    textAlign: 'center',
    color: '#555',
    fontSize: 14,
  },
});