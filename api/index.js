export default function handler(req, res) {
  const accept = req.headers.accept || "";

  // ===============================
  // BLOCK BROWSERS / RAW VIEW
  // ===============================
  if (accept.includes("text/html")) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Blocked</title>
<style>
body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(135deg, #000000, #1a1a1a, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont;
}
.container {
  background: rgba(0,0,0,0.75);
  padding: 35px;
  border-radius: 14px;
  box-shadow: 0 0 40px rgba(255,255,255,0.15);
  text-align: center;
  max-width: 440px;
  color: white;
}
h1 {
  font-size: 34px;
  margin-bottom: 10px;
}
p {
  opacity: 0.85;
  line-height: 1.5;
}
</style>
</head>
<body>
  <div class="container">
    <h1>🛑 STOP</h1>
    <p>
      You Have Been Blocked For Viewing Raw Lua Script<br>
      Without Permission From The Owner
    </p>
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
print("script test I'll change soon haha")

-- Example loader
-- loadstring(game:HttpGet("https://example.com/real-script.lua"))()

-- Put your real script here
`);
}
