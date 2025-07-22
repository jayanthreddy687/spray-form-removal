import { useEffect } from "react";
import icon from "../assets/chat-bot.png"
/**
 * Dialogflow Messenger widget component.
 * Replace YOUR_AGENT_ID below with your Dialogflow agent ID.
 */
const Chatbot = () => {
  // Read Dialogflow agent ID from Vite env variable
  const agentId = import.meta.env.VITE_DIALOGFLOW_AGENT_ID as string | undefined;

  if (!agentId) {
    // eslint-disable-next-line no-console
    console.warn("VITE_DIALOGFLOW_AGENT_ID is not set. Chatbot will not initialise correctly.");
  }
  // Ensure the script is injected only once.
  useEffect(() => {
    const scriptId = "df-messenger-loader";
    if (document.getElementById(scriptId)) return;

    const s = document.createElement("script");
    s.id = scriptId;
    s.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <df-messenger
      chat-title="Spray Form Removal Help"
      agent-id={agentId ?? ""}
      language-code="en"
      chat-icon={icon}
    ></df-messenger>
  );
};

export default Chatbot;
