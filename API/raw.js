export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain");

  const lua = `
print("script test I'll change soon haha")

-- real script goes here
`;

  res.status(200).send(lua);
}
