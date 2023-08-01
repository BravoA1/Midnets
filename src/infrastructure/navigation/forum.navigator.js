import { createStackNavigator } from "@react-navigation/stack";
import { ForumConversationHelp } from "../../screens/forum/forumConversationHelp.screen";
import { ForumInteraction } from "../../screens/forum/forumInteraction";
import { Forum } from "../../screens/forum/forum.screen";
import { ForumConversation } from "../../screens/forum/forumConversation";
import { ForumAddQuestion } from "../../screens/forum/ForumAddQuestion";
import { ForumResponse } from "../../screens/forum/forumResponse";

const ForumStack = createStackNavigator();

export const ForumNavigator = () => {
	return (
		<ForumStack.Navigator screenOptions={{ headerShown: false }}>
			<ForumStack.Screen name="Form" component={Forum} />
			<ForumStack.Screen
				name="ForumConversationHelp"
				component={ForumConversationHelp}
			/>
			<ForumStack.Screen name="ForumInteraction" component={ForumInteraction} />
			<ForumStack.Screen
				name="ForumConversation"
				component={ForumConversation}
			/>
			<ForumStack.Screen name="ForumAddQuestion" component={ForumAddQuestion} />
			<ForumStack.Screen name="ForumResponse" component={ForumResponse} />
		</ForumStack.Navigator>
	);
};
