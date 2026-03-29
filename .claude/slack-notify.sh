#!/bin/bash
# Claude Code 훅 이벤트를 Slack 웹훅으로 전송
# 이벤트: Notification (권한 요청), Stop (작업 완료)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENV_FILE="$SCRIPT_DIR/../.env"

# .env 파일에서 SLACK_WEBHOOK_URL 읽기
[ -f "$ENV_FILE" ] || exit 0
WEBHOOK_URL=$(grep -E '^SLACK_WEBHOOK_URL=' "$ENV_FILE" | cut -d '=' -f2- | tr -d '[:space:]')
[ -z "$WEBHOOK_URL" ] && exit 0

# stdin에서 훅 JSON 페이로드 읽기
INPUT=$(cat)

EVENT=$(echo "$INPUT" | python3 -c \
  "import sys,json; print(json.load(sys.stdin).get('hook_event_name',''))" 2>/dev/null)

case "$EVENT" in
  "Notification")
    DETAIL=$(echo "$INPUT" | python3 -c \
      "import sys,json; d=json.load(sys.stdin); print(d.get('message') or d.get('notification',''))" 2>/dev/null)
    TEXT="🔔 *Claude Code — 권한 요청*\n${DETAIL}"
    ;;
  "Stop")
    TEXT="✅ *Claude Code — 작업 완료*"
    ;;
  *)
    exit 0
    ;;
esac

PAYLOAD=$(python3 -c "import json,sys; print(json.dumps({'text':sys.argv[1]}))" "$TEXT")

curl -s -o /dev/null -X POST \
  -H 'Content-type: application/json' \
  --data "$PAYLOAD" \
  "$WEBHOOK_URL"
