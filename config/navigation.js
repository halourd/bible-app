module.exports = {
    gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionConfig: () => {
          return {
            transitionSpec: {
              duration: 750,
              easing: Easing.out(Easing.poly(4)),
              timing: Animated.timing,
              useNativeDriver: true,
            },
            screenInterpolator: sceneProps => {
              const { layout, position, scene } = sceneProps;
              const { index } = scene;
              const width = layout.initWidth;
              const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
              });
              return { transform: [{ translateX }] };
            },
          };
        },
}