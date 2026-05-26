import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с формы на email master-gir@yandex.ru"""

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

    smtp_user = "master-gir@yandex.ru"
    smtp_password = os.environ["SMTP_PASSWORD"]
    to_email = "master-gir@yandex.ru"

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка от {name}"
    msg["From"] = smtp_user
    msg["To"] = to_email

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
        server.sendmail(smtp_user, to_email, msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"ok": True}),
    }