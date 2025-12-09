# DatoCMS Structured Text Styles

A DatoCMS plugin that adds custom block styles to Structured Text fields.

## Features

This plugin adds the following custom paragraph styles to all Structured Text fields:

| Style | ID | Description |
|-------|-----|-------------|
| **Disclosure** | `disclosure` | Small, italic, muted text for legal disclosures and fine print |

## Installation

### Deploy the Plugin

1. Deploy this project to Netlify or Vercel
2. Note the deployed URL (e.g., `https://your-plugin.netlify.app`)

### Install in DatoCMS

1. Go to your DatoCMS project
2. Navigate to **Settings > Plugins**
3. Click **Add new plugin**
4. Select **Create a private plugin**
5. Enter the deployed URL as the **Entry point URL**
6. Save

## Usage

Once installed, open any Structured Text field in your DatoCMS project. When editing a paragraph, you'll see the new styles available in the paragraph format dropdown.

The style is stored in the `style` property of the paragraph node in your Structured Text data.

## Frontend Rendering

When rendering Structured Text on your frontend, you need to handle the `style` property on paragraph nodes. Here's an example using React:

```tsx
import { renderNodeRule, StructuredText } from "react-datocms";
import { isParagraph } from "datocms-structured-text-utils";

const paragraphStyles = {
  default: "",
  disclosure: "text-xs text-slate-500 italic",
};

<StructuredText
  data={content}
  customNodeRules={[
    renderNodeRule(isParagraph, ({ node, children, key }) => {
      const style = (node.style as string) || "default";
      const className = paragraphStyles[style] || paragraphStyles.default;
      return (
        <p key={key} className={className}>
          {children}
        </p>
      );
    }),
  ]}
/>
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Adding More Styles

To add more custom styles, edit `src/main.tsx`:

```tsx
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
    // Add more styles here
    {
      id: "callout",
      node: "paragraph",
      label: "Callout",
      appliedStyle: {
        backgroundColor: "#f0f9ff",
        padding: "1em",
        borderLeft: "4px solid #0284c7",
      },
    },
  ];
}
```

## License

MIT
