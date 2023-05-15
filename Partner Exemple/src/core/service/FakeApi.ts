import { createServer } from "miragejs"

if (window.server) {
  server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("api.agendaedu.com/sso", () => {
      return {
          "access_token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBhcnRuZUBhZS5jb20iLCJuYW1lIjoiUGFydG5lIER1bW15Iiwic2VuaGEiOiJwYXJ0bmUiLCJpYXQiOjE1MTYyMzkwMjJ9.HA6PrzDtv6e7pySFzsSIN-Bdx81UDaQT5p9mAV-ny64',
          "token_type": "Bearer",
          "expires_in": 5235623,
          "created_at": 217872812
      }
    })
  },
})