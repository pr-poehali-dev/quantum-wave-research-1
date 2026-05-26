import json
import os
import smtplib
import urllib.request
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def send_email(name: str, phone: str):
    smtp_user = "master-gir@yandex.ru"
    smtp_password = os.environ["SMTP_PASSWORD"]

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка от {name}"
    msg["From"] = smtp_user
    msg["To"] = smtp_user

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px; padding: 24px; background: #f9f9f9; border-radius: 8px;">
        <h2 style="color: #e11d48; margin-bottom: 16px;">Новая заявка с сайта СтройГрупп</h2>
        <p style="margin: 8px 0;"><strong>Имя:</strong> {name}</p>
        <p style="margin: 8px 0;"><strong>Телефон:</strong> <a href="tel:{phone}">{phone}</a></p>
    </div>
    """

    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP_SSL("smtp.yandex.ru", 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())


def send_telegram(name: str, phone: str):
    token = os.environ["TELEGRAM_BOT_TOKEN"]
    chat_id = os.environ["TELEGRAM_CHAT_ID"]

    text = f"🏠 *Новая заявка с сайта СтройГрупп*\n\n👤 Имя: {name}\n📞 Телефон: {phone}"

    data = json.dumps({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "Markdown"
    }).encode("utf-8")

    req = urllib.request.Request(
        f"https://api.telegram.org/bot{token}/sendMessage",
        data=data,
        headers={"Content-Type": "application/json"},
        method="POST"
    )
    urllib.request.urlopen(req, timeout=10)


def handler(event: dict, context) -> dict:
    """Отправка заявки с формы на email и в Telegram"""

    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
        }

    send_email(name, phone)
    send_telegram(name, phone)

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }
