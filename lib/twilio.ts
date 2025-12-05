import Twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const verifyServiceSid = process.env.TWILIO_VERIFY_SERVICE_SID!;

const client = Twilio(accountSid, authToken);

export async function sendOTP(mobile: string) {
  try {
    const verification = await client.verify.v2
      .services(verifyServiceSid)
      .verifications.create({
        to: mobile,
        channel: "sms",
      });

    return { success: true, status: verification.status };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Failed to send OTP",
    };
  }
}

export async function verifyOTP(mobile: string, code: string) {
  try {
    const verificationCheck = await client.verify.v2
      .services(verifyServiceSid)
      .verificationChecks.create({
        to: mobile,
        code,
      });

    return {
      success: verificationCheck.status === "approved",
      status: verificationCheck.status,
    };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Failed to verify OTP",
    };
  }
}

