export function gtagReportConversion({ gtag = "", url }) {
  if (!gtag) return;
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: gtag,
    event_callback: callback,
  });
  return false;
}
