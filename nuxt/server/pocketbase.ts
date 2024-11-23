import PocketBase from "pocketbase";

let pocketbase: PocketBase | null = null;

export default async function getPocketBaseInstance(): Promise<PocketBase> {
  if (pocketbase === null) {
    pocketbase = new PocketBase(process.env.POCKETBASE_ADDRESS);
    await pocketbase.admins.authWithPassword(
      "frontend@frontend.de",
      "1234567890"
    );
  }

  return pocketbase;
}
