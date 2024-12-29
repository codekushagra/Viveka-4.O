import { createTransport } from "nodemailer";

const sendMail = async (email, subject, data) => {
  const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.Gmail,
      pass: process.env.Password,
    },
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h1 {
            color: red;
        }
        p {
            margin-bottom: 20px;
            color: #666;
        }
        .otp {
            font-size: 36px;
            color: #7b68ee; /* Purple text */
            margin-bottom: 30px;
        }
            .logo {
      text-align: center;
      margin-bottom: 20px;
    }
    .logo img {
      max-height: 50px;
    }
    </style>
</head>
<body>
    
    <div class="container">
      <div class="logo">
      <img src="https://res.cloudinary.com/dlrpqkypx/image/upload/v1735455579/vivekaLogo_lapu4c.png" alt="Your Website Logo">

    </div>
        <h1>OTP Verification</h1>
        <p>Hello ${data.name} your (One-Time Password) for your account verification is.</p>
        <p class="otp">${data.otp}</p> 
    </div>
</body>
</html>
`;

  await transport.sendMail({
    from: process.env.Gmail,
    to: email,
    subject,
    html,
  });
};

export default sendMail;

export const sendForgotMail = async (subject, data) => {
  const transport = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: process.env.Gmail,
      pass: process.env.Password,
    },
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
   
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9fb;
      margin: 0;
      padding: 0;
    }
    .container {
      background-color: #ffffff;
      padding: 30px;
      margin: 40px auto;
      border-radius: 10px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      max-width: 600px;
      border: 1px solid #e5e5e5;
    }
    h1 {
      color: #4c217f;
      font-size: 24px;
      margin-bottom: 20px;
      text-align: center;
    }
    p {
      color: #555555;
      line-height: 1.6;
      margin-bottom: 20px;
      font-size: 16px;
    }
    .button {
      display: inline-block;
      padding: 15px 30px;
      background-color: #4c217f;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
    }
    .button:hover {
      background-color: #6b34a5;
    }
    .footer {
      margin-top: 30px;
      color: #999999;
      text-align: center;
      font-size: 14px;
    }
    .footer a {
      color: #4c217f;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
    .logo {
      text-align: center;
      margin-bottom: 20px;
    }
    .logo img {
      max-height: 50px;
    }
  </style>
</head>
<body>
  <div class="container">
     <div class="logo">
      <img src="https://res.cloudinary.com/dlrpqkypx/image/upload/v1735455579/vivekaLogo_lapu4c.png" alt="Your Website Logo">

    </div>
    <h1>Reset Your Password</h1>
    <p>Hello,</p>
    <p>You have requested to reset your password. Please click the button below to reset your password:</p>
    <p style="text-align: center;">
      <a href="${process.env.frontendurl}/reset-password/${data.token}" class="button">Reset Password</a>
    </p>
    
    <div class="footer">
      <p>Thank you,<br>Team Viveka 4.O</p>
      
    </div>
  </div>
</body>
</html>
`;

  await transport.sendMail({
    from: process.env.Gmail,
    to: data.email,
    subject,
    html,
  });
};
