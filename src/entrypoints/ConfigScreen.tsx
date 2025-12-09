import type { RenderConfigScreenCtx } from "datocms-plugin-sdk";
import { Canvas } from "datocms-react-ui";
import s from "./styles.module.css";

type Props = {
  ctx: RenderConfigScreenCtx;
};

const CUSTOM_STYLES = [
  {
    id: "disclosure",
    label: "Disclosure",
    description: "Small, italic, muted text for legal disclosures and fine print",
  },
];

export default function ConfigScreen({ ctx }: Props) {
  return (
    <Canvas ctx={ctx}>
      <div className={s.container}>
        <h1 className={s.title}>Structured Text Styles</h1>
        <p className={s.description}>
          This plugin adds custom block styles to all Structured Text fields in
          your DatoCMS project.
        </p>

        <h2 className={s.subtitle}>Available Styles</h2>
        <table className={s.table}>
          <thead>
            <tr>
              <th>Style</th>
              <th>ID</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {CUSTOM_STYLES.map((style) => (
              <tr key={style.id}>
                <td>
                  <strong>{style.label}</strong>
                </td>
                <td>
                  <code>{style.id}</code>
                </td>
                <td>{style.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className={s.subtitle}>Usage</h2>
        <p className={s.description}>
          In any Structured Text field, select text and use the paragraph format
          dropdown to apply these styles. The style will be stored in the{" "}
          <code>style</code> property of the paragraph node.
        </p>

        <h2 className={s.subtitle}>Frontend Rendering</h2>
        <p className={s.description}>
          Remember to update your frontend to handle the <code>style</code>{" "}
          property when rendering Structured Text content.
        </p>
      </div>
    </Canvas>
  );
}
