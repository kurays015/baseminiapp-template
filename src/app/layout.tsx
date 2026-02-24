import type { Metadata } from "next";
import "./globals.css";
import { miniappConfig } from "../../minikit.config";

export async function generateMetadata(): Promise<Metadata> {
  const appName = miniappConfig.miniapp.name;

  return {
    title: appName,
    description: miniappConfig.miniapp.description,
    other: {
      "base:app_id": process.env.NEXT_PUBLIC_BASE_APP_ID || "",
      "fc:miniapp": JSON.stringify({
        version: "next",
        imageUrl: miniappConfig.miniapp.heroImageUrl,
        button: {
          title: `Launch ${appName}`,
          action: {
            type: "launch_miniapp",
            name: appName,
            url: miniappConfig.miniapp.homeUrl,
            splashImageUrl: miniappConfig.miniapp.splashImageUrl,
            splashBackgroundColor: miniappConfig.miniapp.splashBackgroundColor,
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
