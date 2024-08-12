import { handlers } from "@/auth";
import { NextRequest } from "next/server";

import { azureFetchInterceptor } from "@/lib/adb2cInterceptor";

const originalFetch = fetch;

export async function POST(req: NextRequest) {
  const url = new URL(req.url);

  if (url.pathname === "/auth/signin/azure-ad-b2c") {
    global.fetch = azureFetchInterceptor(originalFetch);
    const response = await handlers.POST(req);
    global.fetch = originalFetch;
    return response;
  }
  return await handlers.POST(req);
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  if (url.pathname === "/auth/callback/azure-ad-b2c") {
    global.fetch = azureFetchInterceptor(originalFetch);
    const response = await handlers.GET(req);
    global.fetch = originalFetch;
    return response;
  }
  return await handlers.GET(req);
}
