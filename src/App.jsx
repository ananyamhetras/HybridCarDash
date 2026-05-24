import { useState } from "react";
import {
  TopBar,
  DashboardPreview,
  QuickNavPreview,
  CallsPreview,
  PresetsPreview,
  SupportingStrip,
  SupportModules,
  DashboardDetail,
  QuickNavDetail,
  CallsDetail,
  UserPresetsDetail,
} from "./components";
import "./styles.css";

export default function App() {
  const [screen, setScreen] = useState("overview");
  const [supportOpen, setSupportOpen] = useState(false);

  const [volume, setVolume] = useState(50);
  const [temperature, setTemperature] = useState(70);
  const [fan, setFan] = useState(1);
  const [brightness, setBrightness] = useState(50);
const [muted, setMuted] = useState(false);
const [mode, setMode] = useState("visual");

  const presets = [
    {
      name: "Driver A",
      seat: "Low + forward",
      mirrors: "Wide angle",
      temperature: "70°F",
      fan: "Medium",
      brightness: "60%",
      haptics: "Strong",
      ui: "High contrast",
      mode: "Visual default",
      quickAction: "Comfort Reset",
    },
    {
      name: "Driver B",
      seat: "High + back",
      mirrors: "Narrow focus",
      temperature: "74°F",
      fan: "Low",
      brightness: "40%",
      haptics: "Light",
      ui: "Large text",
      mode: "Eyes-free default",
      quickAction: "Comfort Reset",
    },
  ];

  return (
    <main className={`app ${mode === "eyes-free" ? "eyesFree" : ""}`}>
  <TopBar
    mode={mode}
    onToggleMode={() =>
      setMode((m) => (m === "visual" ? "eyes-free" : "visual"))
    }
  />

      {screen === "overview" && (
        <section className="overviewScreen">
          <section className="primaryGrid">
            <DashboardPreview
              onClick={() => setScreen("dashboard")}
              volume={volume}
              temperature={temperature}
              fan={fan}
              brightness={brightness}
            />
            <QuickNavPreview onClick={() => setScreen("quicknav")} />
            <CallsPreview onClick={() => setScreen("calls")} />
            <PresetsPreview onClick={() => setScreen("presets")} presets={presets} />
          </section>

          <div className={`supportDock ${supportOpen ? "open" : ""}`}>
  {!supportOpen ? (
    <SupportingStrip onClick={() => setSupportOpen(true)} />
  ) : (
    <div className="expandedSupportPanel">
      <div className="expandedPanelHeader">
        <button onClick={() => setSupportOpen(false)}>Collapse</button>
      </div>

      <SupportModules />
    </div>
  )}
</div>

        </section>
      )}

      {screen === "dashboard" && (
        <DashboardDetail
          onBack={() => setScreen("overview")}
          volume={volume}
          setVolume={setVolume}
          muted={muted}
          setMuted={setMuted}
          temperature={temperature}
          setTemperature={setTemperature}
          fan={fan}
          setFan={setFan}
          brightness={brightness}
          setBrightness={setBrightness}
        />
      )}

      {screen === "quicknav" && (
        <QuickNavDetail onBack={() => setScreen("overview")} />
      )}

      {screen === "calls" && (
        <CallsDetail onBack={() => setScreen("overview")} />
      )}

      {screen === "presets" && (
        <UserPresetsDetail
          onBack={() => setScreen("overview")}
          presets={presets}
        />
      )}
    </main>
  );
}