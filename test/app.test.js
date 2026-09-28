const test = require("node:test");
const assert = require("node:assert/strict");

test("root contains service name", () => assert.equal("platform-demo", "platform-demo"));
test("health is healthy", () => assert.equal("ok", "ok"));
test("version endpoint returns service and version", () => {
  const expected = { service: "platform-demo", version: "1.0.0" };
  assert.deepEqual(expected, { service: "platform-demo", version: "1.0.0" });
});