import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";
import { InitialModal } from "@/components/modals/Initial-modal";
import { LandingPage } from "@/components/landing-page";

export default async function SetupPage() {
  const { userId } = auth();

  if (!userId) {
    return <LandingPage />;
  }

  const profile = await currentProfile();

  if (!profile) {
    return redirect("/sign-in");
  }

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <div>
      <InitialModal />
    </div>
  );
}
