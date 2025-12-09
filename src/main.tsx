import { connect } from "datocms-plugin-sdk";
import "datocms-react-ui/styles.css";
import ConfigScreen from "./entrypoints/ConfigScreen";
import { render } from "./utils/render";

connect({
  /**
   * Custom block styles for Structured Text fields.
   * These styles appear in the paragraph format dropdown in the DatoCMS editor.
   */
  customBlockStylesForStructuredTextField() {
    return [
      {
        id: "disclosure",
        node: "paragraph",
        label: "Disclosure",
        appliedStyle: {
          fontSize: "0.75em",
          color: "#666",
          fontStyle: "italic",
        },
      },
    ];
  },

  /**
   * Plugin configuration screen
   */
  renderConfigScreen(ctx) {
    return render(<ConfigScreen ctx={ctx} />);
  },
});
