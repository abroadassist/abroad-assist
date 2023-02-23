import API from "api";

export const notify = ({
  content,
  subject,
  to = "contact@abroadassist.net",
  from = "noreply@abroadassist.net",
}) =>
  API.post("email", {
    from,
    to,
    subject,
    htmlBody: content,
  });
