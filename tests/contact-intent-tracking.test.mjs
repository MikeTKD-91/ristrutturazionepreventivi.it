import { URL } from "node:url";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const tracker = read("components/shared/ContactIntentTracking.tsx");
const layout = read("app/layout.tsx");

test("contact intent is gated by explicit analytics consent", () => {
  assert.match(tracker, /preferences\?\.analytics === true/);
  assert.match(tracker, /!hasAnalyticsConsent\(\)/);
  assert.match(tracker, /document\.addEventListener\("click", onClick\)/);
  assert.match(tracker, /document\.removeEventListener\("click", onClick\)/);
});

test("WhatsApp and phone clicks are intentions, not submitted leads", () => {
  assert.match(tracker, /contact_intent/);
  assert.match(tracker, /wa\.me/);
  assert.match(tracker, /tel:/);
  assert.doesNotMatch(tracker, /generate_lead/);
  assert.doesNotMatch(tracker, /link\.search|link\.href|textContent/);
});

test("tracker is mounted globally without changing the consent banner", () => {
  assert.match(layout, /import ContactIntentTracking from "@\/components\/shared\/ContactIntentTracking"/);
  assert.match(layout, /<ContactIntentTracking \/>/);
});
