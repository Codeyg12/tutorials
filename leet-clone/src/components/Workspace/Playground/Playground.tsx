import Split from "react-split";
import PreferenceNav from "./PreferenceNav/PreferenceNav";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

type PlaygroundProps = {};

const Playground: React.FC<PlaygroundProps> = () => {
  return (
    <div className="flex flex-col bg-dark-layer-1 relative">
      <PreferenceNav />

      <Split
        className="h-[calc(100vh-94px)]"
        direction="vertical"
        sizes={[60, 40]}
        minSize={60}
      >
        <div className="w-full overflow-auto">
          <CodeMirror
            value="const codeyIsCool = () => return 'Codey is Cool'"
            theme={vscodeDark}
            extensions={[javascript()]}
            style={{ fontSize: 16 }}
          />
        </div>
        <div className="w-full px-5 overflow-auto">testcases</div>
      </Split>
    </div>
  );
};
export default Playground;
