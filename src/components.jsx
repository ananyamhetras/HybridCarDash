import { useState } from "react";
import {
  Car,
  Signal,
  Bluetooth,
  Battery,
  Music,
  MessageCircle,
  Thermometer,
  Shield,
  Settings,
  AudioWaveform,
  CircleParking,
  BarChart3,
  Fan,
  Grid2X2,
  Navigation,
  Phone,
  User,
  Home,
  Briefcase,
  Clock,
  Volume2,
  Sun,
  Mic,
  PhoneOff,
  Check,
  Plus,
  ChevronRight,
  LayoutDashboard,
  Gauge,
  UserRound,
  Video,
  SlidersHorizontal,
  Calendar,
  MapPinned,
  Eye,
  EyeOff,
} from "lucide-react";

function TopBar({ mode, onToggleMode }) {
  return (
    <header className="topBar">
      <div className="brand">
        <Car size={22} strokeWidth={2} />
        <span>HybridDash</span>
      </div>

      <div className="time">10:30 AM</div>

      <div className="statusIcons">
        <button className="modeToggleButton" onClick={onToggleMode}>
          {mode === "visual" ? <Eye size={18} /> : <EyeOff size={18} />}
          {mode === "visual" ? "Visual Mode" : "Eyes-Free Mode"}
        </button>

        <Signal size={20} />
        <Bluetooth size={20} />
        <Battery size={22} />
      </div>
    </header>
  );
}

function MiniSlider({ value, color = "blue" }) {
  return (
    <div className="miniSlider">
      <span className={`miniFill ${color}`} style={{ width: `${value}%` }} />
      <span className="miniKnob" style={{ left: `${value}%` }} />
    </div>
  );
}

function ControlLine({ Icon, label, value, color }) {
  return (
    <div className="controlLine">
      <span className="lineIcon">
        <Icon size={22} strokeWidth={2.2} />
      </span>
      <div>
        <strong>{label}</strong>
        <MiniSlider value={value} color={color} />
      </div>
    </div>
  );
}

function DashboardPreview({ onClick, volume, temperature, fan, brightness }) {
  return (
    <button className="primaryTile dashboardTile" onClick={onClick}>
      <div className="tileIcon red">
        <LayoutDashboard size={28} />
      </div>

      <div>
        <h2>Dashboard</h2>
        <p>Core controls at a glance.</p>
      </div>

      <div className="dashboardMini">
        <ControlLine Icon={Volume2} label="Volume" value={volume} color="red" />
        <ControlLine
          Icon={Thermometer}
          label="Temperature"
          value={(temperature - 60) * 3.33}
          color="yellow"
        />
        <ControlLine Icon={Fan} label="Fan Speed" value={fan * 33.33} color="blue" />
        <ControlLine Icon={Sun} label="Brightness" value={brightness} color="navy" />
      </div>

      <div className="activePill">
        <Check size={16} /> Active
      </div>
    </button>
  );
}

function QuickNavPreview({ onClick }) {
  return (
    <button className="primaryTile yellowTile" onClick={onClick}>
      <div className="tileIcon yellow">
        <Navigation size={28} />
      </div>

      <div>
        <h2>Quick Nav</h2>
        <p>Get there faster.</p>
      </div>

      <RouteMini Icon={Home} title="Home" detail="12 min · 5.4 mi" />
      <RouteMini Icon={Briefcase} title="Work" detail="25 min · 12.8 mi" />
      <RouteMini Icon={Clock} title="Recent" detail="See recent destinations" />
    </button>
  );
}

function RouteMini({ Icon, title, detail }) {
  return (
    <div className="routeMini">
      <span>
        <Icon size={20} />
      </span>
      <div>
        <strong>{title}</strong>
        <p>{detail}</p>
      </div>
      <ChevronRight size={20} />
    </div>
  );
}

function CallsPreview({ onClick }) {
  return (
    <button className="primaryTile blueTile" onClick={onClick}>
      <div className="tileIcon blue">
        <Phone size={28} />
      </div>

      <div>
        <h2>Calls</h2>
        <p>Stay connected.</p>
      </div>

      <div className="callerCircle">JS</div>
      <h3>Jordan</h3>
      <p>Incoming call</p>

      <div className="callActions">
        <span className="callDot decline">
          <PhoneOff size={18} />
        </span>
        <span className="callDot mute">
          <Mic size={18} />
        </span>
        <span className="callDot accept">
          <Phone size={18} />
        </span>
      </div>
    </button>
  );
}

function PresetsPreview({ onClick }) {
  return (
    <button className="primaryTile presetTileBlue" onClick={onClick}>
      <div className="presetTop">
        <div className="tileIcon navy">
          <User size={28} />
        </div>

        <div>
          <h2>User Presets</h2>
          <p>Personalize your drive.</p>
        </div>

        <div className="weather">
          <Sun size={22} /> 72°F
        </div>
      </div>

      <div className="driverPreview active">
        <span>
          <User size={18} />
        </span>
        <div>
          <strong>Alex</strong>
          <p>Active</p>
        </div>
        <Check size={18} />
      </div>

      <div className="driverPreview">
        <span>
          <UserRound size={18} />
        </span>
        <div>
          <strong>Jordan</strong>
          <p>Driver 2</p>
        </div>
        <ChevronRight size={18} />
      </div>

      <div className="addProfile">
        <Plus size={18} /> Add New Profile
      </div>
    </button>
  );
}

function SupportingStrip({ onClick }) {
  const supportIcons = [
    Music,
    MessageCircle,
    Car,
    Thermometer,
    Settings,
    Video,
    BarChart3,
    Grid2X2,
  ];

  return (
    <button className="supportStrip" onClick={onClick}>
      {supportIcons.map((Icon, i) => (
        <span key={i}>
          <Icon size={24} strokeWidth={2} />
        </span>
      ))}
    </button>
  );
}

function SupportModules() {
  const modules = [
    [Music, "Media", "Now Playing", "Beyond the Horizon", "Oceans"],
    [MessageCircle, "Messages", "New Message", "Sam", "On my way."],
    [Car, "Vehicle Status", "All Systems Normal", "Tire Pressure", "OK"],
    [Thermometer, "Climate Detail", "72°F", "Fan Speed", "Air Quality Good"],
    [Settings, "Settings", "Display", "Connectivity", "General"],
    [Video, "Parking / Camera", "Rear view", "Guidelines", "Active"],
    [BarChart3, "Trip / Energy", "Trip A", "128.6 mi", "3.1 mi/kWh"],
    [Grid2X2, "Apps", "Calendar", "Weather", "Profile"],
  ];

  return (
    <section className="moduleGrid">
      {modules.map(([Icon, title, a, b, c]) => (
        <article className="moduleTile" key={title}>
          <div className="moduleHeader">
            <span>
              <Icon size={18} />
            </span>
            <h3>{title}</h3>
          </div>
          <p>{a}</p>
          <strong>{b}</strong>
          <p>{c}</p>
        </article>
      ))}
    </section>
  );
}

function Slider({ value, min, max, onChange, label, color = "blue" }) {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <input
      aria-label={label}
      className={`slider ${color}`}
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      style={{ "--percent": `${percent}%` }}
    />
  );
}

function DashboardDetail({
  onBack,
  volume,
  setVolume,
  muted,
  setMuted,
  temperature,
  setTemperature,
  fan,
  setFan,
  brightness,
  setBrightness,
}) {
  const fanLabels = ["Off", "Low", "Medium", "High"];

  return (
    <section>
      <button className="backButton" onClick={onBack}>← Back</button>
      <h1 className="screenTitle">Dashboard</h1>

      <div className="detailGrid">
        <DetailCard Icon={Volume2} title="Volume" value={muted ? "Muted" : `${volume}%`}>
          <Slider
            value={muted ? 0 : volume}
            min={0}
            max={100}
            onChange={(v) => {
              setMuted(false);
              setVolume(v);
            }}
            label="Volume"
            color="red"
          />
          <button className="outlineButton" onClick={() => setMuted((m) => !m)}>
            Press knob: {muted ? "Unmute" : "Mute"}
          </button>
        </DetailCard>

        <DetailCard Icon={Thermometer} title="Temperature" value={`${temperature}°F`}>
          <Slider
            value={temperature}
            min={60}
            max={90}
            onChange={setTemperature}
            label="Temperature"
            color="yellow"
          />
        </DetailCard>

        <DetailCard Icon={Fan} title="Fan" value={fanLabels[fan]}>
          <Slider value={fan} min={0} max={3} onChange={setFan} label="Fan" color="blue" />
        </DetailCard>

        <DetailCard Icon={Sun} title="Interior Brightness" value={`${brightness}%`}>
          <Slider
            value={brightness}
            min={0}
            max={100}
            onChange={setBrightness}
            label="Brightness"
            color="navy"
          />
        </DetailCard>
      </div>
    </section>
  );
}

function DetailCard({ Icon, title, value, children }) {
  return (
    <article className="detailCard">
      <div className="detailHeader">
        <span>
          <Icon size={26} />
        </span>
        <div>
          <p>{title}</p>
          <h2>{value}</h2>
        </div>
      </div>
      {children}
    </article>
  );
}

function QuickNavDetail({ onBack }) {
  return (
    <section>
      <button className="backButton" onClick={onBack}>← Back</button>
      <h1 className="screenTitle">Quick Nav</h1>
      <p className="subtext">Saved routes. Detailed destination entry is available only when parked.</p>

      <div className="navGrid">
        <RouteBig Icon={Home} title="Home" detail="123 Maple St · 12 min · 5.4 mi" />
        <RouteBig Icon={Briefcase} title="Work" detail="456 Business Rd · 25 min · 12.8 mi" />
        <RouteBig Icon={MapPinned} title="Recent Destination" detail="Coffee House · 8 min · 2.1 mi" />
      </div>
    </section>
  );
}

function RouteBig({ Icon, title, detail }) {
  return (
    <button className="bigRoute">
      <span>
        <Icon size={34} />
      </span>
      <div>
        <h2>{title}</h2>
        <p>{detail}</p>
      </div>
      <ChevronRight size={22} />
    </button>
  );
}

function CallsDetail({ onBack }) {
  return (
    <section>
      <button className="backButton" onClick={onBack}>← Back</button>

      <div className="callScreen">
        <div className="avatarLarge">JS</div>
        <p className="spaced">Incoming Call</p>
        <h1>Jordan</h1>
        <p>Mobile · (123) 456-7890</p>

        <div className="callButtons">
          <button className="declineBtn">
            <PhoneOff size={20} /> Decline
          </button>
          <button className="muteBtn">
            <Mic size={20} /> Mute
          </button>
          <button className="acceptBtn">
            <Phone size={20} /> Accept
          </button>
        </div>
      </div>
    </section>
  );
}

function UserPresetsDetail({ onBack, presets }) {
  const [selectedDriver, setSelectedDriver] = useState(presets[0]);

  const [quickActions, setQuickActions] = useState(
    Object.fromEntries(
      presets.map((driver) => [
        driver.name,
        driver.quickAction || "Comfort Reset",
      ])
    )
  );

  const quickActionOptions = [
    "Comfort Reset",
    "Defog / Visibility Boost",
    "Navigate Home",
    "Privacy Mode",
    "Eyes-Free Mode",
  ];

  return (
    <section>
      <button className="backButton" onClick={onBack}>← Back</button>
      <h1 className="screenTitle">User Presets</h1>

      <div className="presetLayout">
        <aside className="driverList">
          {presets.map((driver) => (
            <button
              key={driver.name}
              className={
                selectedDriver.name === driver.name
                  ? "driverOption active"
                  : "driverOption"
              }
              onClick={() => setSelectedDriver(driver)}
            >
              <span>{driver.name.replace("Driver ", "")}</span>
              <div>
                <strong>{driver.name}</strong>
                <p>
                  {selectedDriver.name === driver.name
                    ? "Active"
                    : "Tap to activate"}
                </p>
              </div>
            </button>
          ))}

          <button className="addDriver">
            <Plus size={18} /> Add New Driver
          </button>
        </aside>

        <div className="presetCards">
          {Object.entries(selectedDriver)
            .filter(([key]) => key !== "name" && key !== "quickAction")
            .map(([key, value]) => (
              <article className="presetCard" key={key}>
                <p>{key}</p>
                <h3>{value}</h3>
              </article>
            ))}

          <article className="presetCard quickActionCard">
            <p>Programmable button</p>
            <h3>Quick Action</h3>

            <label className="quickActionLabel">
              Assigned to
              <select
                value={quickActions[selectedDriver.name]}
                onChange={(e) =>
                  setQuickActions((current) => ({
                    ...current,
                    [selectedDriver.name]: e.target.value,
                  }))
                }
              >
                {quickActionOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </article>
        </div>
      </div>
    </section>
  );
}

export {
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
};