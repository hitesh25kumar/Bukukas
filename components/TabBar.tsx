import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export function MyTabBar({ state, descriptors, navigation }) {
    
  return (
    <View style={{ flexDirection: 'row',height:55,display: 'flex',alignItems: 'center',justifyContent: 'center',width:'100%',backgroundColor:'#fff',elevation:5}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

            const Icon = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
          key={Math.random()}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1,display:'flex',alignItems:'center',justifyContent:'center' }}
          >
              <Icon color={isFocused ? '#323edd' : 'rgba(50,62,221,0.5)'}/>
            <Text style={{ color: isFocused ? '#323edd' : 'rgba(50,62,221,0.5)' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}