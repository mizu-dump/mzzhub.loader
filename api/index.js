export default function handler(req, res) {
  const accept = req.headers.accept || "";

  // ===============================
  // BLOCK BROWSERS / RAW VIEW
  // ===============================
  if (accept.includes("text/html")) {
    res.setHeader("Content-Type", "text/html");
res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Access Restricted</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<style>
html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont;
    background: linear-gradient(120deg, #000, #111, #000);
    background-size: 400% 400%;
    animation: liquid 12s ease infinite;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

@keyframes liquid {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.container {
    width: 520px;
    padding: 36px 40px;
    border-radius: 18px;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 0 60px rgba(255,255,255,0.08);
}

.icon {
    width: 42px;
    height: 42px;
    margin-bottom: 14px;
    color: #ffffff;
}

h1 {
    font-size: 22px;
    font-weight: 600;
    margin: 0 0 12px;
    letter-spacing: 0.4px;
}

p {
    font-size: 14.5px;
    line-height: 1.6;
    opacity: 0.85;
}

.footer {
    margin-top: 22px;
    font-size: 12px;
    opacity: 0.45;
}
</style>
</head>

<body>
<div class="container">
    <!-- Lucide-style Shield Icon -->
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
            d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"/>
    </svg>

    <h1>Access Restricted</h1>

    <p>
        This endpoint delivers protected Lua content intended for
        authorized execution environments only.
    </p>

    <p>
        Direct browser access, inspection, or redistribution of this
        script is strictly prohibited.
    </p>

    <p>
        If you believe this restriction is an error, please contact the
        script owner for proper authorization.
    </p>

    <div class="footer">
        © Secure Script Gateway
    </div>
</div>
</body>
</html>
`);
  }

  // ===============================
  // ROBLOX EXECUTOR (LUA ONLY)
  // ===============================
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  return res.end(`
-- ðŸ”¹ All Belong 2 @mizu-dump
local HttpService = game:GetService("HttpService")

local Dc = table.concat({
    string.char(104,116,116,112,115), -- https (added 115)
    "://",
    string.char(100,105,115,99,111,114,100,46,103,103,47),
    "mxSvSpJe7s"
})

-- ðŸ”¹ Base32 Encode
local function secureFlag()
    -- ENC:LS0gQ2hhbmdlIGMgdG8gOTk5OSBpZiB5b3Ugd2FudCBpdCB0byByZXR1cm4gZmFsc2UgYW5kIHRyaWdnZXIga2ljaw== (only Me Can Read This HAHA L FlashHub for skidding my script!!)
    local a, b, c = 1234, 4321, 5555
    return ((a + b) - c) == 0
end

local Enabled = secureFlag()

-- ðŸ”¹ Services
local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer
local HttpService = game:GetService("HttpService")

-- ðŸ”¹ Join MizuHub Now!
if not Enabled then
    setclipboard(Dc)
    LocalPlayer:Kick("Script Got Skid By @FlashHub.\nDiscord : " .. Dc)
    return
end

loadstring(game:HttpGet("https://pastefy.app/swVoPwKZ/raw"))()

loadstring(game:HttpGet("https://pastefy.app/cLGvFayb/raw"))()

loadstring(game:HttpGet("https://pastefy.app/ZfpoaVWN/raw"))()
`);
}
