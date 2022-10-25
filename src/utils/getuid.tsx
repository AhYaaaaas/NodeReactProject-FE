export default function getuid() {
  const res = window.localStorage.getItem('userinfo') || "{}";
  return JSON.parse(res);
}