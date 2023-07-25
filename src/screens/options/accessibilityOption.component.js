import { Switch, View, Text, StyleSheet } from "react-native";
//import { sizes } from "../../infrastructure/theme/sizes";
import { fonts } from "../../infrastructure/theme/fonts";
import { colors } from "../../infrastructure/theme/colors";

export const AccessibilityOption = ({
  title = "",
  content = "",
  state,
  setState,
}) => {
  const toggleOption = () => {
    setState((prevState) => !prevState);
  };
  return (
    <View style={styles.accessibilityOptionContainer}>
      <View style={styles.switchLabel}>
        <Switch
          trackColor={{
            false: colors.bg.quaternary,
            true: colors.brand.tertiary,
          }}
          thumbColor={state ? colors.brand.primary : colors.bg.tertiary}
          onValueChange={toggleOption}
          value={state}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.body}>{content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  switchLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  accessibilityOptionContainer: {
    //marginHorizontal: sizes[0],
    marginHorizontal: 8,
  },
  title: {
    margin: 8,
    fontFamily: fonts.headingBold,
  },
  body: {
    fontFamily: fonts.body,
  },
});
