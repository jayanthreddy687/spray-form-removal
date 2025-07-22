// Global JSX declaration for the Dialogflow Messenger web-component
// This silences the TypeScript "Property 'df-messenger' does not exist" error.

import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "df-messenger": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "chat-title"?: string;
        "agent-id"?: string;
        "language-code"?: string;
        "chat-icon"?: string;
        [key: string]: any;
      };
    }
  }
}
